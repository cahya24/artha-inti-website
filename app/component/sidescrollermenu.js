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

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

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
          layout="fill"
          className="transition-opacity duration-500 ease-in-out object-cover w-full h-full"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-10"></div>

      {/* Content Container */}
      <div className="absolute z-20 h-full overflow-hidden start-64 p-0" ref={scrollContainerRef}>
        <div className="flex h-full">
          {items.map((item, index) => (
            <div key={item.id} className="flex-none w-full h-full flex items-center justify-start px-4">
              <div className="p-6 rounded-lg max-w-xl">
                <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                <p className="text-base text-slate-50 mb-4">{item.description}</p>
                <button className="px-4 py-2 bg-darkPrimary text-white rounded-lg hover:bg-darkSecondary transition-all duration-300 ease-in-out">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SVG Separator */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="relative w-full h-32 bg-transparent">
          <svg
            className="relative w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio='none'
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

      {/* Indicator Dots */}
      <div className="absolute bottom-8 left-1/4 transform -translate-x-1/2 flex space-x-2 z-40">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${currentIndex === index ? "bg-darkPrimary" : "bg-darkSecondary"}`}
            onClick={() => {
              stopAutoScroll();
              scrollToIndex(index);
              startAutoScroll();
            }}
          >
          </button>
        ))}
      </div>
    </div>
  );
}
