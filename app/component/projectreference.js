"use client";

import React, { useRef, useState } from "react";
import Link from 'next/link'; // Import Link from Next.js

const projectItems = [
  { id: 1, name: "PT Berlico Mulia Farma - Sidomuncul", image: "Project-Berlico.jpg", url: "/projects/berlico-mulia-farma" },
  { id: 2, name: "Reverse Osmosis - Bali", image: "Project-BaliRO.jpg", url: "/projects/reverse-osmosis-bali" },
  { id: 3, name: "PT Bintang Toedjoe", image: "Project-BintangToedjoe.jpg", url: "/projects/bintang-toedjoe" },
  { id: 4, name: "PT Dankos Farma Tbk", image: "Project-Dankos.jpg", url: "/projects/dankos-farma" },
  { id: 5, name: "Project 5", image: "Project-Berlico.jpg", url: "/projects/project-5" },
  // Add more items as needed
];

export default function ProjectReference() {
  const containerRef = useRef(null);
  const [hoverPosition, setHoverPosition] = useState(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.clientWidth / 4, // Scroll one item width at a time
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.clientWidth / 4, // Scroll one item width at a time
        behavior: "smooth",
      });
    }
  };

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      if (mouseX < rect.width / 2) {
        setHoverPosition("left");
      } else {
        setHoverPosition("right");
      }
    }
  };

  const handleMouseLeave = () => {
    setHoverPosition(null);
  };

  return (
    <div className="relative bg-gray-800 pt-24 pb-36">
      {/* Sliced Off Effect at Top */}
      <div className="absolute top-0 left-0 right-0 w-full h-32 bg-white rounded-b-[50%] transform -translate-y-16"></div>
      <h2 className="text-white text-2xl text-center mb-6">Project References</h2>
      <div
        className="relative flex items-center justify-center"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className={`absolute left-2 z-10 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition-all duration-300 ${
            hoverPosition === "left" ? "opacity-100" : "opacity-0"
          }`}
        >
          &lt;
        </button>

        {/* Scrollable Container */}
        <div className="overflow-hidden w-[1380px] mx-4" ref={containerRef}>
          {/* Set width to exactly fit 4 items */}
          <div className="flex space-x-4">
            {projectItems.map((item) => (
              <Link href={item.url} key={item.id}>
                <div
                  className="relative flex-none w-[329px] h-[216px] rounded-md overflow-hidden cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full w-[329px] h-[216px]"
                  />
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-50 opacity-0 hover:opacity-100 transition flex items-center justify-center rounded-md">
                    <div className="text-white text-lg">{item.name}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className={`absolute right-2 z-10 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition-all duration-300 ${
            hoverPosition === "right" ? "opacity-100" : "opacity-0"
          }`}
        >
          &gt;
        </button>
      </div>
      {/* Sliced Off Effect at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-32 bg-white rounded-t-[50%] transform translate-y-16"></div>
    </div>
  );
}
