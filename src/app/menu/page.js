import Navbar from "@/components/Navbar";
import { getMenu } from "@/lib/getMenu";

import { createCheckoutSession } from "@/app/actions/createCheckout";

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
            <li
              key={item.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              {item.imageUrl && (
                <div className="overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-44 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-xl font-semibold">{item.name}</h2>

                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    £{item.price}
                  </span>
                </div>

                {!item.available && (
                  <p className="text-red-600 text-sm font-medium mb-4">
                    Sold Out
                  </p>
                )}

                {/* Spacer */}
                <div className="mt-auto">
                  <button
                    onClick={async () => {
                      const url = await createCheckoutSession(item);
                      window.location.href = url;
                    }}
                    disabled={!item.available}
                    className={`w-full py-2 rounded-full font-semibold transition 
                      ${
                        item.available
                          ? "bg-black text-white hover:bg-red-500"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                  >
                    {item.available ? "Order Now" : "Unavailable"}
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
