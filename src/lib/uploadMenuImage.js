// src/lib/uploadMenuImage.js
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase"; // ← use storage directly

export async function uploadMenuImage(file) {
  if (!file) throw new Error("No file selected");

  const imageRef = ref(storage, `menu/${Date.now()}-${file.name}`);
  await uploadBytes(imageRef, file);
  return await getDownloadURL(imageRef);
}
