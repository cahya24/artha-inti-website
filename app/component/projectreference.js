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
  const [startX, setStartX] = useState(0); // For tracking touch start position
  const [scrollLeftPos, setScrollLeftPos] = useState(0); // Store initial scroll position

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

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX); // Track the initial touch position
    setScrollLeftPos(containerRef.current.scrollLeft); // Track the scroll position
  };

  const handleTouchMove = (e) => {
    if (!containerRef.current) return;
    const deltaX = e.touches[0].clientX - startX; // Calculate the distance moved
    containerRef.current.scrollLeft = scrollLeftPos - deltaX; // Scroll the container
  };

  return (
    <div className="relative bg-secondary pt-24 pb-36">
      <h2 className="text-black font-bold text-3xl text-center mb-4">Project References</h2>
      <h3 className="text-black font-medium text-2xl text-center mb-12">Find out more about our latest project here.</h3>

      <div
        className="relative flex items-center justify-center"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Left Scroll Button - Visible only on medium and larger screens */}
        <button
          onClick={scrollLeft}
          className={`absolute left-10 top-1/2 transform -translate-y-1/2 z-10 h-full w-32 text-white p-2 transition-all duration-300 hidden md:block ${
            hoverPosition === "left" ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="bg-secondary p-3 rounded-full border-solid border-4 border-primary shadow-md flex justify-center items-center">
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
        <div
          className="overflow-hidden w-[1380px] mx-4"
          ref={containerRef}
          onTouchStart={handleTouchStart} // Register touch start event
          onTouchMove={handleTouchMove}  // Register touch move event
        >
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
                  {/* For small screens, always show the text. For medium screens and up, apply hover effect */}
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-50 sm:bg-opacity-50 sm:opacity-100 md:opacity-0 md:hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center rounded-md">
                    <div className="text-white text-lg">{item.name}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Scroll Button - Visible only on medium and larger screens */}
        <button
          onClick={scrollRight}
          className={`absolute right-10 top-1/2 transform -translate-y-1/2 z-10 h-full w-32 text-white p-2 transition-all duration-300 hidden md:block ${
            hoverPosition === "right" ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="bg-secondary p-3 rounded-full border-solid border-4 border-primary shadow-md flex justify-center items-center">
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
    </div>
  );
}
