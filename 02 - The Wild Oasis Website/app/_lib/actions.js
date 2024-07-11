"use server";

import { formatDate } from "date-fns";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";
import { getBookings } from "./data-service";

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
  const [nationality, countryFlag] = formData.get("nationality").split("%");

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

  revalidatePath("/account/profile");
}

export async function deleteBooking(id) {
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
