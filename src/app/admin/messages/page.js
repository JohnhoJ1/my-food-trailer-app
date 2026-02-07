"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Navbar from "@/components/Navbar";

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function fetchMessages() {
      const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setMessages(data);
    }

    fetchMessages();
  }, []);

  return (
    <main className="p-4 max-w-3xl mx-auto">
      <Navbar />
      <h1 className="text-3xl font-bold mb-4">Contact Messages</h1>

      {messages.length === 0 && <p>No messages yet.</p>}

      <ul className="space-y-4">
        {messages.map((msg) => (
          <li key={msg.id} className="border p-3">
            <p>
              <strong>Name:</strong> {msg.name}
            </p>
            <p>
              <strong>Email:</strong> {msg.email}
            </p>
            <p className="mt-2">{msg.message}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
