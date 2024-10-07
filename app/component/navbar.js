"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa"; // FaBars for hamburger and FaTimes for close icon

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null); // State for hovered item
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const [activeDropdown, setActiveDropdown] = useState(null); // For mobile dropdowns

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
    {
      name: "Product",
      href: "/product",
      subItems: [
        { name: "EDI Water Treatment Indonesia", href: "/product/product1" },
        { name: "Reverse Osmosis", href: "/product/product2" },
        { name: "Water Treatment Chemicals", href: "/product/product3" }
      ]
    },
    {
      name: "Services",
      href: "/services",
      subItems: [
        { name: "Sub-Service 1", href: "/services/sub1" },
        { name: "Sub-Service 2", href: "/services/sub2" }
      ]
    },
    {
      name: "Project References",
      href: "/projectreferences",
      subItems: [
        { name: "Reference 1", href: "/references/sub1" },
        { name: "Reference 2", href: "/references/sub2" }
      ]
    },
    { 
      name: "Supported Brand", 
      href: "/#supported-brand"
    }
  ];

  const toggleDropdown = (href) => {
    setActiveDropdown((prev) => (prev === href ? null : href)); // Toggle dropdown for mobile
  };

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
                className={`h-12 transition-all duration-300 ease-in-out ${isScrolled ? "h-10" : "h-12"}`}
              />
            </Link>
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <div className="md:hidden ml-auto"> {/* Added `ml-auto` to push the icon to the far right */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black text-2xl focus:outline-none"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>


          {/* Navigation Links for Desktop */}
          <ul className={"`hidden md:flex space-x-8 text-black font-semibold"}>
            {navItems.map((item) => (
              <li
                key={item.href}
                className="relative group"
                // MouseEnter/MouseLeave for parent item
                onMouseEnter={() => setHoveredItem(item.href)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link href={item.href} className="hidden md:flex items-center hover:text-primary">
                  {item.name}
                  <span
                    className={`ml-2 transition-transform duration-300 ease-in-out ${
                      hoveredItem === item.href && item.subItems ? "rotate-180" : ""
                    }`}
                  >
                    <FaChevronDown />
                  </span>
                </Link>

                {/* Dropdown for Desktop */}
                {item.subItems && (
                  <ul
                    className={`absolute left-0 top-full w-48 bg-white shadow-2xl rounded-b-lg z-20 transition-all duration-300 
                      ${
                        hoveredItem === item.href ? "opacity-100 visible" : "opacity-0 invisible"
                      }
                      ${
                        isScrolled ? "mt-4" : "mt-6"
                      }
                  `}
                    // Add MouseEnter/MouseLeave to the dropdown
                    onMouseEnter={() => setHoveredItem(item.href)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {item.subItems.map((subItem) => (
                      <li key={subItem.href} className="py-4 px-6 hover:text-primary hover:bg-gray-200">
                        <Link href={subItem.href}>{subItem.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:hidden absolute top-full left-0 w-full bg-secondary shadow-lg`}
          >
            <ul className="flex flex-col space-y-6 text-black font-bold p-6">
              {navItems.map((item) => (
                <li key={item.href} className="py-2 border-b">
                  <div className="flex justify-between items-center hover:text-primary">
                    <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                      {item.name}
                    </Link>
                    {item.subItems && (
                      <button
                        onClick={() => toggleDropdown(item.href)}
                        className="focus:outline-none"
                      >
                        <FaChevronDown
                          className={`transition-transform ease-in-out duration-300 ${
                            activeDropdown === item.href ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Dropdown for Mobile */}
                  {item.subItems && activeDropdown === item.href && (
                    <ul className="pl-6 mt-2">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.href} className="py-2">
                          <Link href={subItem.href}>{subItem.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
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
