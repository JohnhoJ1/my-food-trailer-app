import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Success() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-xl mx-auto p-10 text-center">
        <h1 className="text-3xl font-bold mb-4">Payment Successful 🎉</h1>
        <p className="mb-6">
          Thank you for your order. We’ll prepare it shortly.
        </p>
        <Link
          href="/menu"
          className="bg-black text-white px-6 py-3 rounded-full"
        >
          Back to Menu
        </Link>
      </div>
    </main>
  );
}
