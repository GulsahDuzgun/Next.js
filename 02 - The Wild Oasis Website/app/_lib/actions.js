"use server";

import { formatDate } from "date-fns";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";
import { getBookings } from "./data-service";
import { revalidate } from "../about/page";
import { redirect } from "next/navigation";

export async function signInUser() {
  await signIn("google", {
    redirectTo: "/account",
  });
}

export async function signOutUser() {
  await signOut({ redirectTo: "/" });
}

export async function updateGuest(formData) {
  const session = await auth();

  if (!session) throw new Error("You must be logged in.");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality")?.split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provide a valid national ID");

  const updatedData = {
    nationalID,
    nationality,
    countryFlag,
  };

  const { error } = await supabase
    .from("guests")
    .update(updatedData)
    .eq("id", session?.user?.guestId);

  if (error) {
    throw new Error("Guest could not be updated");
  }
}

export async function deleteBooking(id) {
  // await new Promise((res) => setTimeout(res, 5000));

  const session = await auth();
  if (!session) throw new Error("You must be logged in.");

  const bookings = await getBookings(session.user.guestId);
  const bookingIDs = bookings.map((booking) => booking.id);

  if (!bookingIDs.includes(id))
    throw new Error("You are not allow to delete this booking.");

  const { error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }

  revalidatePath("account/reservations");
}

export async function updateBooking(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in.");

  const editedBookingID = Number(formData.get("bookingId"));
  const guestID = session.user.guestId;

  const usersBookings = await getBookings(guestID);
  const userBookingsIDs = usersBookings.map((booking) => booking.id);

  if (!userBookingsIDs.includes(editedBookingID))
    throw new Error("You are not allow to update this booking");

  const updatedFeatures = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations")?.slice(0, 100),
  };

  const { error } = await supabase
    .from("bookings")
    .update(updatedFeatures)
    .eq("id", editedBookingID);

  if (error) {
    throw new Error("Booking could not be updated");
  }

  revalidatePath("/account/reservations/");
  revalidatePath(`/account/reservations/edit/${editedBookingID}`);
  redirect("/account/reservations");
}

export async function createBooking(bookingData, formData) {
  const session = await auth();

  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations")?.slice(0, 100),
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };

  const { error } = await supabase.from("bookings").insert([newBooking]);

  if (error) {
    throw new Error("Guest could not be created");
  }

  revalidatePath(`/cabins/${bookingData.cabinId}`);
  redirect("/cabins/thankyou");
}
