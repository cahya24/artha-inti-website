"use client";

import React, { useRef, useState } from "react";
import Link from 'next/link';

const projectItems = [
  { id: 1, name: "PT Berlico Mulia Farma - Sidomuncul", image: "Project-Berlico.jpg", url: "/projects/berlico-mulia-farma" },
  { id: 2, name: "Reverse Osmosis - Bali", image: "Project-BaliRO.jpg", url: "/projects/reverse-osmosis-bali" },
  { id: 3, name: "PT Bintang Toedjoe", image: "Project-BintangToedjoe.jpg", url: "/projects/bintang-toedjoe" },
  { id: 4, name: "PT Dankos Farma Tbk", image: "Project-Dankos.jpg", url: "/projects/dankos-farma" },
  { id: 5, name: "Project 5", image: "Project-Berlico.jpg", url: "/projects/project-5" },
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
      if (mouseX < rect.width / 3) {
        setHoverPosition("left");
      } else if (mouseX > rect.width * 2 / 3) {
        setHoverPosition("right");
      } else {
        setHoverPosition(null);
      }
    }
  };

  const handleMouseLeave = () => {
    setHoverPosition(null);
  };

  return (
    <div className="relative bg-primary pt-24 pb-36">
      {/* Sliced Off Effect at Top */}
      <div className="absolute top-0 left-0 right-0 w-full h-32 bg-secondary rounded-b-[50%] transform -translate-y-16"></div>
      <h2 className="text-darkPrimary text-2xl text-center mb-6">Project References</h2>
      
      <div
        className="relative flex items-center justify-center"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className={`absolute left-10 top-1/2 transform -translate-y-1/2 z-10 h-full w-32 text-white p-2 transition-all duration-300 ${
            hoverPosition === "left" ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="bg-secondary p-3 rounded-full shadow-md flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-gray-900"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </button>

        {/* Scrollable Container */}
        <div className="overflow-hidden w-[1380px] mx-4" ref={containerRef}>
          <div className="flex space-x-4">
            {projectItems.map((item) => (
              <Link href={item.url} key={item.id}>
                <div
                  className="relative flex-none w-[329px] h-[216px] rounded-md overflow-hidden cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
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
          className={`absolute right-10 top-1/2 transform -translate-y-1/2 z-10 h-full w-32 text-white p-2 transition-all duration-300 ${
            hoverPosition === "right" ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="bg-secondary p-3 rounded-full shadow-md flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-gray-900"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>

      {/* Sliced Off Effect at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-32 bg-secondary rounded-t-[50%] transform translate-y-16"></div>
    </div>
  );
}
