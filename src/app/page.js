import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0">
          <img
            src="/hero.png"
            alt="Momo Wheels Trailer"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Momo Wheels</h1>

          <p className="text-lg md:text-xl mb-8">
            Fresh Handmade Momos in Birmingham
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/menu"
              className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-full font-semibold transition"
            >
              View Menu
            </Link>

            <a
              href="https://wa.me/447000000000"
              className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-full font-semibold transition"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Street Food With Heart</h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          We serve freshly steamed and fried momos made daily from locally
          sourced ingredients. Find us across Birmingham bringing authentic
          Himalayan flavours to the streets.
        </p>
      </section>

      {/* CTA Section */}
      <section className="bg-red-500 text-white text-center py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Order?</h2>

        <p className="mb-6">Click & Collect available daily.</p>

        <Link
          href="/menu"
          className="bg-white text-red-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Order Now
        </Link>
      </section>
    </main>
  );
}
