"use client";

import React, { useRef } from 'react';

// Update the items array to include images and descriptions
const items = [
  { id: 1, name: 'Item 1', image: 'Artha-Inti-Equipment.jpg', description: 'Lorem Ipsum Dolor, this is a placeholder text for sidescroller' },
  { id: 2, name: 'Item 2', image: 'Artha-Inti-Home-Optimization.jpg', description: 'Lorem Ipsum Dolor, this is a placeholder text for sidescroller' },
  { id: 3, name: 'Item 3', image: 'Artha-Inti-Services.jpg', description: 'Lorem Ipsum Dolor, this is a placeholder text for sidescroller' },
  { id: 4, name: 'Item 4', image: 'Artha-Inti-Water-Treatment.jpg', description: 'Lorem Ipsum Dolor, this is a placeholder text for sidescroller' },
  { id: 5, name: 'Item 5', image: 'Cooling-Tower-Water-Treatment-Indonesia.jpg', description: 'Lorem Ipsum Dolor, this is a placeholder text for sidescroller' },
  // Add more items as needed
];

export default function SidescrollerMenu() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -window.innerWidth, // Scroll by the width of the viewport
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: window.innerWidth, // Scroll by the width of the viewport
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative py-4 flex justify-center">
      {/* Left Scroll Button */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2"
        onClick={scrollLeft}
      >
        &larr;
      </button>
      {/* Right Scroll Button */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2"
        onClick={scrollRight}
      >
        &rarr;
      </button>
      {/* Sidescroller Container */}
      <div className="overflow-hidden w-full max-w-4xl" ref={scrollContainerRef}>
        <div className="flex space-x-0 w-full">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-none flex w-full h-64 bg-white items-center justify-center rounded-lg shadow-md"
            >
              {/* Image on the Left */}
              <div className="flex-none w-1/5 h-full">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-l-lg" />
              </div>
              {/* Description on the Right */}
              <div className="flex-grow p-4 w-3/5">
                <h3 className="text-2xl font-bold text-gray-800">{item.name}</h3>
                <p className="text-base text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
