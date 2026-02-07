"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useAuth } from "@/lib/useAuth";

export default function AdminPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) return <p>Loading...</p>;
  if (!user) return null;

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <Navbar />

      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <ul className="space-y-4">
        <li>
          <Link href="/admin/messages">📩 Contact Messages</Link>
        </li>
        <li>
          <Link href="/admin/menu">🍔 Manage Menu</Link>
        </li>
      </ul>
    </main>
  );
}
