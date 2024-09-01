"use client";

import React, { useRef, useState, useEffect } from "react";

// Updated items array to include images and descriptions
const items = [
  {
    id: 1,
    name: "Item 1",
    image: "Artha-Inti-Equipment.jpg",
    description: "Description for Item 1",
  },
  {
    id: 2,
    name: "Item 2",
    image: "Artha-Inti-Home-Optimization.jpg",
    description: "Description for Item 2",
  },
  {
    id: 3,
    name: "Item 3",
    image: "Artha-Inti-Services.jpg",
    description: "Description for Item 3",
  },
  {
    id: 4,
    name: "Item 4",
    image: "Artha-Inti-Water-Treatment.jpg",
    description: "Description for Item 4",
  },
  {
    id: 5,
    name: "Item 5",
    image: "Cooling-Tower-Water-Treatment-Indonesia.jpg",
    description: "Description for Item 5",
  },
];

export default function SidescrollerMenu() {
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  // Function to scroll to a specific index
  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const scrollAmount = index * window.innerWidth; // Calculate scroll amount based on index
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
      setCurrentIndex(index);
      setAutoScroll(false); // Stop auto scroll when dot is pressed
    }
  };

  // Automatically scroll every 5 seconds if autoScroll is true
  useEffect(() => {
    if (autoScroll) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, 5000); // 5000 milliseconds = 5 seconds
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }
  }, [autoScroll]);

  // Reset auto scroll timer when dot is pressed
  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex]);

  return (
    <div className="relative py-4 flex flex-col items-center justify-center mt-20 bg-gradient-to-r from-blue-100 to-white overflow-hidden">
      {/* Sliced Off Effect at Bottom */}
      <div className="absolute bottom-0 w-full h-32 bg-white rounded-t-full transform translate-y-1/2"></div>

      {/* Sidescroller Container */}
      <div
        className="overflow-hidden w-full max-w-4xl"
        ref={scrollContainerRef}
      >
        <div className="flex space-x-0 w-full">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="flex-none flex w-full h-96 items-center justify-center mx-4"
            >
              {/* Image on the Left with Fixed Size */}
              <div className="flex-none w-1/5 h-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              {/* Description on the Right */}
              <div className="flex-grow p-4 w-4/5">
                <h3 className="text-2xl font-bold text-gray-800">{item.name}</h3>
                <p className="text-base text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicator Dots */}
      <div className="flex mt-4 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-blue-300"
            }`}
            onClick={() => scrollToIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
