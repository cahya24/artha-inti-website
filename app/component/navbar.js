"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex flex-wrap justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          <img src="Logo-Artha-Inti-Manunggal.jpg" alt="Artha Inti" className="h-10" />
        </Link>
        {/* Navigation Links */}
        <div className="flex-grow flex items-center justify-end space-x-4 md:space-x-6">
          <Link href="/" className="text-gray-800 hover:text-primary transition duration-200 ease-in-out">
            Home
          </Link>
          <Link href="/contact/contact" className="text-gray-800 hover:text-primary transition duration-200 ease-in-out">
            Contact
          </Link>
          {/* Add more links if needed */}
        </div>
      </div>
    </nav>
  );
}
