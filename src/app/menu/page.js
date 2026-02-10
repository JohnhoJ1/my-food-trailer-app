import Navbar from "@/components/Navbar";
import { getMenu } from "@/lib/getMenu";
import MenuCard from "@/components/MenuCard";

export default async function MenuPage() {
  const menu = await getMenu();

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Header */}
      <section className="bg-black text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
        <p className="text-gray-300">
          Freshly made. Bold flavour. Birmingham street food.
        </p>
      </section>

      {/* Menu Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {menu.length === 0 && (
          <p className="text-center text-gray-500">No items available</p>
        )}

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {menu.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </main>
  );
}
