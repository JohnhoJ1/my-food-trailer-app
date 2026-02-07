"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { uploadMenuImage } from "@/lib/uploadMenuImage";

export default function AdminMenuPage() {
  const router = useRouter();

  // Auth guard
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) router.push("/admin/login");
    });
    return () => unsub();
  }, []);

  const [menu, setMenu] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(true);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch menu items
  async function fetchMenu() {
    const snapshot = await getDocs(collection(db, "menu"));
    const items = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setMenu(items);
  }

  useEffect(() => {
    fetchMenu();
  }, []);

  // Add new item
  async function handleAdd(e) {
    e.preventDefault();
    if (!image) return alert("Please select an image");

    setLoading(true);

    try {
      const imageUrl = await uploadMenuImage(image);

      await addDoc(collection(db, "menu"), {
        name,
        price: Number(price),
        available,
        imageUrl,
        createdAt: Date.now(),
      });

      setName("");
      setPrice("");
      setAvailable(true);
      setImage(null);
    } catch (err) {
      console.error(err);
      alert("Failed to add item");
    } finally {
      setLoading(false);
      fetchMenu();
    }
  }

  // Update item
  async function handleUpdate(id, field, value) {
    const ref = doc(db, "menu", id);

    // Handle price type
    const data =
      field === "price" ? { [field]: Number(value) } : { [field]: value };
    await updateDoc(ref, data);
    fetchMenu();
  }

  // Update image
  async function handleImageUpdate(id, file) {
    if (!file) return;
    setLoading(true);

    try {
      const imageUrl = await uploadMenuImage(file);
      const ref = doc(db, "menu", id);
      await updateDoc(ref, { imageUrl });
      fetchMenu();
    } catch (err) {
      console.error(err);
      alert("Failed to update image");
    } finally {
      setLoading(false);
    }
  }

  // Delete item
  async function handleDelete(id) {
    if (!confirm("Delete this item?")) return;
    await deleteDoc(doc(db, "menu", id));
    fetchMenu();
  }

  return (
    <main className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Menu</h1>

      {/* Add new item */}
      <form onSubmit={handleAdd} className="space-y-2 mb-6">
        <input
          className="w-full border p-2"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          className="w-full border p-2"
          type="number"
          placeholder="Price (£)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <label className="flex gap-2 items-center">
          <input
            type="checkbox"
            checked={available}
            onChange={(e) => setAvailable(e.target.checked)}
          />
          Available
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />

        <button className="bg-black text-white px-4 py-2 w-full">
          {loading ? "Saving..." : "Add Item"}
        </button>
      </form>

      {/* Existing menu */}
      <ul className="space-y-4">
        {menu.map((item) => (
          <li key={item.id} className="border p-3 rounded">
            {/* Image preview */}
            {item.imageUrl && (
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-32 object-cover rounded mb-2"
              />
            )}

            {/* Update image */}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpdate(item.id, e.target.files[0])}
            />

            {/* Name */}
            <input
              className="w-full border p-1 mb-1"
              value={item.name}
              onChange={(e) => handleUpdate(item.id, "name", e.target.value)}
            />

            {/* Price */}
            <input
              className="w-full border p-1 mb-1"
              type="number"
              value={item.price}
              onChange={(e) => handleUpdate(item.id, "price", e.target.value)}
            />

            {/* Availability */}
            <label className="flex gap-2 items-center mb-2">
              <input
                type="checkbox"
                checked={item.available}
                onChange={(e) =>
                  handleUpdate(item.id, "available", e.target.checked)
                }
              />
              Available
            </label>

            {/* Delete */}
            <button
              onClick={() => handleDelete(item.id)}
              className="text-red-600 text-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
