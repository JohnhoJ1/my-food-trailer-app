"use client";

import { useState } from "react";
import { createCheckoutSession } from "@/app/actions/createCheckout";

export default function MenuCard({ item }) {
  const [loading, setLoading] = useState(false);

  async function handleOrder() {
    try {
      setLoading(true);
      const url = await createCheckoutSession(item);
      window.location.href = url;
    } catch (err) {
      console.error(err);
      alert("Could not start checkout. Please try again.");
      setLoading(false);
    }
  }

  return (
    <li className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col">
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
          <p className="text-red-600 text-sm font-medium mb-4">Sold Out</p>
        )}

        <div className="mt-auto">
          <button
            onClick={handleOrder}
            disabled={!item.available || loading}
            className={`w-full py-2 rounded-full font-semibold transition 
              ${
                item.available && !loading
                  ? "bg-black text-white hover:bg-red-500"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            {loading
              ? "Redirecting..."
              : item.available
                ? "Order Now"
                : "Unavailable"}
          </button>
        </div>
      </div>
    </li>
  );
}
