import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header Section */}
      <section className="bg-black text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Momo Wheels
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          Bringing authentic Himalayan flavours to the streets of Birmingham.
        </p>
      </section>

      {/* Story Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Momo Wheels started with one simple idea — serve fresh, handmade
            momos with authentic flavour and street-food energy.
          </p>
          <p className="text-gray-600 mb-4">
            Every dumpling is prepared daily using locally sourced ingredients
            and traditional recipes inspired by Himalayan kitchens.
          </p>
          <p className="text-gray-600">
            From food festivals to local events, we’re proud to bring bold
            flavours and warm hospitality wherever our trailer goes.
          </p>
        </div>

        <div>
          <img
            src="https://fireflyfabrication.com/wp-content/uploads/2025/01/HIMALAYA-MOMO-3-1024x683.jpg"
            alt="Momo Wheels Food Trailer"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What We Stand For</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Fresh Daily</h3>
              <p className="text-gray-600">
                Prepared fresh every day with high-quality ingredients.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Authentic Taste</h3>
              <p className="text-gray-600">
                Traditional Himalayan recipes with bold flavour.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Community First</h3>
              <p className="text-gray-600">
                Serving Birmingham with warmth and street-food passion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
