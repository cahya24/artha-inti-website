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
  const autoScrollIntervalRef = useRef(null);

  // Function to scroll to a specific index
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

  // Function to start auto-scroll
  const startAutoScroll = () => {
    stopAutoScroll(); // Ensure no previous interval is running
    autoScrollIntervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000); // 5000 milliseconds = 5 seconds
  };

  // Function to stop auto-scroll
  const stopAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  };

  // Start auto-scroll on component mount
  useEffect(() => {
    startAutoScroll();

    return () => stopAutoScroll(); // Cleanup interval on component unmount
  }, []);

  // Update scroll position whenever currentIndex changes
  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex]);

  return (
    <div className="relative pt-12 pb-24 flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-white overflow-hidden">
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
      <div className="flex pt-8 mt-4 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-blue-300"
            }`}
            onClick={() => {
              stopAutoScroll(); // Stop auto-scroll when dot is clicked
              scrollToIndex(index); // Scroll to the clicked dot
              startAutoScroll(); // Restart auto-scroll
            }}
          ></button>
        ))}
      </div>
    </div>
  );
}
