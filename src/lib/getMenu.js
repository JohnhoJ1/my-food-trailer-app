import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export async function getMenu() {
  const querySnapshot = await getDocs(collection(db, "menu"));

  const menu = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return menu;
}
