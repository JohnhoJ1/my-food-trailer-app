import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-center gap-8">
        <Link
          href="/"
          className="text-gray-700 hover:text-black font-medium transition-colors duration-200"
        >
          Home
        </Link>

        <Link
          href="/menu"
          className="text-gray-700 hover:text-black font-medium transition-colors duration-200"
        >
          Menu
        </Link>

        <Link
          href="/about"
          className="text-gray-700 hover:text-black font-medium transition-colors duration-200"
        >
          About
        </Link>

        <Link
          href="/contact"
          className="text-gray-700 hover:text-black font-medium transition-colors duration-200"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
