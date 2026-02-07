"use server";

import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function sendMessage(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    throw new Error("Missing fields");
  }

  await addDoc(collection(db, "messages"), {
    name,
    email,
    message,
    createdAt: serverTimestamp(),
  });
}
