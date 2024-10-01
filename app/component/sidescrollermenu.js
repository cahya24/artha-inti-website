"use client";

import React, { useState, useEffect, useCallback } from "react";

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

function IndicatorDots({ currentIndex, setCurrentIndex, resetTimer }) {
  return (
    <div className="flex space-x-2">
      {items.map((_, index) => (
        <button
          key={index}
          className={`w-10 h-2 rounded-full cursor-pointer transition-all duration-300 ${
            currentIndex === index ? "bg-white" : "bg-gray-400"
          }`}
          onClick={() => {
            setCurrentIndex(index);
            resetTimer();
          }}
        />
      ))}
    </div>
  );
}

export default function SidescrollerMenu() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, []);

  const resetTimer = useCallback(() => {
    // This function is now empty as we're using a different approach
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      {/* Carousel Container */}
      <div 
        className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={item.id} className="w-full h-full flex-shrink-0 relative">
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.name}
              className="object-cover w-full h-full"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950 opacity-40 z-10"></div>

            {/* Content */}
            <div className="absolute z-20 inset-0 flex items-center">
              <div className="max-w-3xl text-left ml-16 sm:ml-24 md:ml-32 lg:ml-64 px-4 sm:px-6 md:px-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4 line-clamp-2">{item.name}</h3>
                <p className="text-sm sm:text-base text-slate-50 mb-4 sm:mb-5 md:mb-6 line-clamp-3">{item.description}</p>
                <button className="px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-buttonColor text-white rounded-lg hover:bg-buttonColorHover transition-all duration-300 ease-in-out text-sm sm:text-base">
                  Find Services
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicator Dots - positioned absolutely */}
      <div className="absolute bottom-40 left-26 sm:left-32 md:left-40 lg:left-72 z-30">
        <IndicatorDots 
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          resetTimer={resetTimer}
        />
      </div>

      {/* SVG Separator */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="relative w-full h-32 bg-transparent">
          <svg
            className="relative w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="100 0 900 100"
            preserveAspectRatio="none"
          >
            <path
              d="M1000 100V0.3C938 31 877.6 51.3 795 34c-83.8-17.6-160.5-20.4-240 12-54 22-110 26-173 10a392.2 392.2 0 0 0-222 5C105 78 49.7 97.9 0 88.2V100h1000Z"
              fill="#1171ba"
            />
            <path
              d="M1000 100V25.3C938 56 877.6 71.3 795 54c-83.8-17.6-160.5-25.4-240 7-54 22-110 21-173 5-76.5-19.4-146.5-23.3-222 0C105 83 49.7 97.9 0 88.2V100h1000Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}