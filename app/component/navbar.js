"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa"; // Using react-icons for the arrow

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null); // State for hovered item

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Product", href: "/product" },
    { name: "Services", href: "/services" },
    { name: "Project References", href: "/projectreferences" }, // New item
    { name: "Supported Brand", href: "/supportedbrand" },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Top Small Bar */}
      <div className="bg-darkSecondary h-10 text-white flex justify-end items-stretch">
        <Link href="/contact" className="h-full flex items-stretch">
          <button className="px-6 mr-52 bg-green-600 text-white hover:bg-green-500 transition-all duration-300 ease-in-out text-sm font-semibold">
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
        <nav className="container mx-auto flex justify-between items-center px-8">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/">
              <img
                src="/Logo-Artha-Inti-Manunggal.jpg"
                alt="Artha Inti Logo"
                className={`h-12 transition-all duration-300 ease-in-out ${
                  isScrolled ? "h-10" : "h-12"
                }`}
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-8 text-black font-bold">
            {navItems.map((item) => (
              <li
                key={item.href}
                className="relative flex items-center group"
                onMouseEnter={() => setHoveredItem(item.href)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link href={item.href}>{item.name}</Link>
                <span
                  className={`ml-2 transition-transform duration-300 ${
                    hoveredItem === item.href ? "rotate-180" : ""
                  }`}
                >
                  <FaChevronDown />
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
