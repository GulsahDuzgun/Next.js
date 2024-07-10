"use server";

import { formatDate } from "date-fns";
import { signIn, signOut } from "./auth";

export async function signInUser() {
  await signIn("google", {
    redirectTo: "/account",
  });
}

export async function signOutUser() {
  await signOut({ redirectTo: "/" });
}

export async function updateGuest(formData) {
  console.log(formData);
}
