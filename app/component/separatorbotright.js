import React from 'react';

export default function SeparatorBotRight() {
  return (
    <div className="relative w-full h-32">
      <svg
        className="relative w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        fill="none"
        preserveAspectRatio='none'
      >
        {/* Stroke */}
        <path
          d="M1000 100V0.3C938 31 877.6 51.3 795 34c-83.8-17.6-160.5-20.4-240 12-54 22-110 26-173 10a392.2 392.2 0 0 0-222 5C105 78 49.7 97.9 0 88.2V100h1000Z"
          fill="#4D869C"
          opacity=".5"
        />
        {/* Main Path */}
        <path
          d="M1000 100V25.3C938 56 877.6 71.3 795 54c-83.8-17.6-160.5-25.4-240 7-54 22-110 21-173 5-76.5-19.4-146.5-23.3-222 0C105 83 49.7 97.9 0 88.2V100h1000Z"
          fill="#4D869C"
        />
      </svg>
    </div>
  );
};