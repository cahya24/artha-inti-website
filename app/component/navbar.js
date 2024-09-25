"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Small Bar */}
      <div className="bg-darkSecondary h-10 text-white flex justify-end p-2">
        <Link href="/contact">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out">
            Contact Us
          </button>
        </Link>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ease-in-out bg-secondary shadow-md ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <nav className="container ml-24 flex justify-between items-center px-4">
          <div className="flex items-center">
            <Link href="/">
              <img
                src="Logo-Artha-Inti-Manunggal-rev.png"
                alt="Artha Inti Logo"
                className={`h-8 transition-all duration-300 ease-in-out ${
                  isScrolled ? "h-10" : "h-12"
                }`}
              />
            </Link>
          </div>
          <ul className="flex space-x-16 text-black font-bold">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
