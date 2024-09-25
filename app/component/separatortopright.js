import React from 'react';

export default function SeparatorTopRight() {
  return (
    <div className="relative w-full h-32 bg-primary">
      <svg
        className="relative w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        fill="none"
        preserveAspectRatio='none'
      >
        {/* Stroke */}
        <path
          d="M1000 0v99.7C938 69 877.6 48.7 795 66c-83.8 17.6-160.5 20.4-240-12-54-22-110-26-173-10a392.2 392.2 0 0 1-222-5C105 22 49.7 2.1 0 11.8V0h1000Z"
          fill="#1171ba"
        />
        {/* Main Path */}
        <path
          d="M1000 0v74.7C938 44 877.6 28.7 795 46c-83.8 17.6-160.5 25.4-240-7-54-22-110-21-173-5-76.5 19.4-146.5 23.3-222 0C105 17 49.7 2.1 0 11.8V0h1000Z"
          fill="white"
        />
      </svg>
    </div>
  );
};