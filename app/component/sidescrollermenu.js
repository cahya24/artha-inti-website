"use client";

import React, { useRef, useState, useEffect } from "react";

const items = [
  {
    id: 1,
    name: "Leading Supplier of the World's Best Water Filtration and Purification Systems",
    image: "placeholdersidescroller.jpg",
    description: "For more than four decades, Mar Cor has built a reputation in the medical, commercial and industrial marketplace as the #1 leading supplier of water filtration systems and disinfection products.",
  },
  {
    id: 2,
    name: "Item 2",
    image: "Artha-Inti-Equipment.jpg",
    description: "Description for Item 2",
  },
  {
    id: 3,
    name: "Item 3",
    image: "placeholdersidescroller.jpg",
    description: "Description for Item 3",
  },
  {
    id: 4,
    name: "Item 4",
    image: "placeholdersidescroller.jpg",
    description: "Description for Item 4",
  },
  {
    id: 5,
    name: "Item 5",
    image: "placeholdersidescroller.jpg",
    description: "Description for Item 5",
  },
];

export default function SidescrollerMenu() {
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoScrollIntervalRef = useRef(null);

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const scrollAmount = index * (scrollContainerRef.current.scrollWidth / items.length);
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const startAutoScroll = () => {
    stopAutoScroll();
    autoScrollIntervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);
  };

  const stopAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  };

  // Ensure auto-scrolling starts
  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  // Scroll when the currentIndex changes
  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={items[currentIndex].image}
          alt={items[currentIndex].name}
          className="transition-opacity duration-500 ease-in-out object-cover w-full h-full"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-10"></div>

      {/* Content Container */}
      <div className="absolute z-20 w-full h-full flex items-center start-64 px-8">
        <div className="max-w-2xl text-left">
          <h3 className="text-4xl font-bold text-white mb-4">{items[currentIndex].name}</h3>
          <p className="text-base text-slate-50 mb-6">{items[currentIndex].description}</p>
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 ease-in-out">
            Find Services
          </button>

          {/* Rectangular Indicator Dots */}
          <div className="mt-6 flex space-x-2 justify-start z-30 relative">
            {items.map((_, index) => (
              <button
                key={index}
                className={`w-10 h-2 rounded-full cursor-pointer ${currentIndex === index ? "bg-white" : "bg-gray-400"}`}
                onClick={() => {
                  // Ensure click updates the index properly
                  stopAutoScroll();
                  setCurrentIndex(index);
                  startAutoScroll();
                }}
              >
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* SVG Separator */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="relative w-full h-32 bg-transparent">
          <svg
            className="relative w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            {/* Stroke */}
            <path
              d="M1000 100V0.3C938 31 877.6 51.3 795 34c-83.8-17.6-160.5-20.4-240 12-54 22-110 26-173 10a392.2 392.2 0 0 0-222 5C105 78 49.7 97.9 0 88.2V100h1000Z"
              fill="#7AB2B2"
            />
            {/* Main Path */}
            <path
              d="M1000 100V25.3C938 56 877.6 71.3 795 54c-83.8-17.6-160.5-25.4-240 7-54 22-110 21-173 5-76.5-19.4-146.5-23.3-222 0C105 83 49.7 97.9 0 88.2V100h1000Z"
              fill="#EEF7FF"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
