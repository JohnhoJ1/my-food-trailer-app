"use client";

import { sendMessage } from "./actions";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData) {
    setLoading(true);
    setStatus("");

    try {
      await sendMessage(formData);
      setStatus("✅ Message sent successfully!");
    } catch {
      setStatus("❌ Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Header */}
      <section className="bg-black text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact & Location</h1>
        <p className="text-gray-300">
          Questions? Catering requests? Or just craving momos?
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

          <form action={handleSubmit} className="space-y-5">
            <input
              name="name"
              placeholder="Your name"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <input
              name="email"
              type="email"
              placeholder="Your email"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <textarea
              name="message"
              placeholder="Your message"
              required
              rows={5}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <button
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-red-500 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {status && <p className="mt-4 text-sm font-medium">{status}</p>}
        </div>

        {/* Location Section */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">
              Find Us in Birmingham
            </h2>

            <p className="text-gray-600 mb-4">
              We pop up at events and street locations across Birmingham. Follow
              us on social media for live location updates.
            </p>

            <p className="font-medium">📍 Birmingham City Centre</p>

            <p className="mt-4">
              📞 07XXXXXXXXX
              <br />
              📧 contact@momowheels.co.uk
            </p>
          </div>

          {/* Google Map Placeholder */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=YOUR_MAP_LINK"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
