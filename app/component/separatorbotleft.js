import React from 'react';

export default function SeparatorBotLeft() {
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
          d="M0 100V0.3C62 31 122.4 51.3 205 34c83.8-17.6 160.5-20.4 240 12 54 22 110 26 173 10a392.2 392.2 0 0 1 222 5c55 17 110.3 36.9 160 27.2V100H0Z"
          fill="#1171ba"
        />
        {/* Main Path */}
        <path
          d="M0 100V25.3C62 56 122.4 71.3 205 54c83.8-17.6 160.5-25.4 240 7 54 22 110 21 173 5 76.5-19.4 146.5-23.3 222 0 55 17 110.3 31.9 160 22.2V100H0Z"
          fill="white"
        />
      </svg>
    </div>
  );
};