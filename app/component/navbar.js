"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa"; // FaBars for hamburger and FaTimes for close icon

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null); // State for hovered item
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

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
      {/* Top Small Bar - Hidden on mobile by default */}
      <div className="hidden md:flex bg-darkSecondary h-10 text-white justify-end items-stretch">
        <Link href="/#contact-us" className="h-full flex items-center">
          <button className="px-6 h-10 mr-52 bg-buttonColor text-white hover:bg-buttonColorHover transition-all duration-300 ease-in-out text-sm font-semibold">
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

          {/* Hamburger Menu Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black text-2xl focus:outline-none"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Navigation Links for Desktop */}
          <ul className="hidden md:flex space-x-8 text-black font-bold">
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

          {/* Mobile Menu */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:hidden absolute top-full left-0 w-full bg-secondary shadow-lg`}
          >
            <ul className="flex flex-col space-y-6 text-black font-bold p-6"> {/* Increased padding and spacing */}
              {navItems.map((item) => (
                <li key={item.href} className="py-2 border-b"> {/* Added padding and border for separation */}
                  <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Top Small Bar - For Mobile Only (below the menu) */}
            {isMenuOpen && (
              <div className="block bg-darkSecondary h-10 text-white flex justify-start items-center">
                <Link href="/#contact-us" className="h-full flex items-center">
                  <button className="px-6 h-10 bg-buttonColor text-white hover:bg-buttonColorHover transition-all duration-300 ease-in-out text-sm font-semibold w-full">
                    Contact Us
                  </button>
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
