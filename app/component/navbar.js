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
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out bg-darkSecondary shadow-md ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <Link href="/">
            <img
              src="Logo-Artha-Inti-Manunggal-rev.png" // Replace with the path to your logo image
              alt="Artha Inti Logo"
              className={`h-8 transition-all duration-300 ease-in-out ${
                isScrolled ? "h-6" : "h-8"
              }`}
            />
          </Link>
        </div>
        <ul className="flex space-x-4 text-gray-700">
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
    </header>
  );
}
