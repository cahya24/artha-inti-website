"use client";

import React from 'react';
import Link from "next/link";

export default function SupportedBrand() {
  return (
    <div className="relative bg-primary py-16"> {/* Adjusted background and padding */}    
      <div className="min-h-fit bg-primary flex items-center justify-center p-6 relative z-10"> {/* Ensure content appears above the sliced-off effect */}
        <div className="max-w-5xl w-full">
          {/* Headline Title */}
          <h1 className="text-4xl font-bold text-secondary mb-4 text-center">Why Artha Inti?</h1>
          
          {/* Description Text */}
          <p className="text-lg text-secondary mb-8 text-center">
            With tons of experiences, learn and grow together with our customers, PT. Artha Inti Manunggal always focus on long term partnership, therefore we build our reference and customer loyalty in more than 10 years in Indonesia. Another important things why Artha Inti now become one of the water treatment leader in Indonesia is because support from the well-known brand such as Alfa Laval, Ozonia, Dow, Aquafine, Gemu, Overton, Calgon and so many world class brand. So we have the global knowledge with strong local support and understanding.
          </p>
          
          {/* Sponsors Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center">
            {/* Adjust sizes for different logos */}
            <div className="flex items-center justify-center bg-white p-4 rounded-lg">
              <Link href='/supportedbrand/alfalaval.js'>
                <img
                  src="Brand-Alfa-Laval.jpg"
                  alt="Alfa Laval"
                  className="h-16 w-auto object-contain"
                />
              </Link>
            </div>
            <div className="flex items-center justify-center bg-white p-4 rounded-lg">
              <Link href='/supportedbrand/aquafine.js'>
                <img
                  src="Brand-Aquafine.jpg"
                  alt="Aquafine"
                  className="h-16 w-auto object-contain"
                />
              </Link>
            </div>
            <div className="flex items-center justify-center bg-white p-4 rounded-lg">
              <Link href='/supportedbrand'>
                <img
                  src="Brand-Calgon.jpg"
                  alt="Calgon"
                  className="h-16 w-auto object-contain"
                />
              </Link>
            </div>
            <div className="flex items-center justify-center bg-white p-4 rounded-lg">
              <Link href='/supportedbrand/ecell.js'>
                <img
                  src="Brand-ecellGE3.jpg"
                  alt="ecellGE3"
                  className="h-16 w-auto object-contain"
                />
              </Link>
            </div>
            <div className="flex items-center justify-center bg-white p-4 rounded-lg">
              <Link href='/supportedbrand/gemu.js'>
                <img
                  src="Brand-gemu.jpg"
                  alt="gemu"
                  className="h-16 w-auto object-contain"
                />
              </Link>
            </div>
            <div className="flex items-center justify-center bg-white p-4 rounded-lg">
              <Link href='/supportedbrand/ionpure.js'>
                <img
                  src="Brand-ionpure.jpg"
                  alt="ionpure"
                  className="h-16 w-auto object-contain"
                />
              </Link>
            </div>
            <div className="flex items-center justify-center bg-white p-4 rounded-lg">
              <Link href='/supportedbrand'>
                <img
                  src="Brand-Overton.jpg"
                  alt="Overton"
                  className="h-16 w-auto object-contain"
                />
              </Link>
            </div>
            <div className="flex items-center justify-center bg-white p-4 rounded-lg">
              <Link href='/supportedbrand/ozonia.js'>
                <img
                  src="Brand-ozonia.jpg"
                  alt="ozonia"
                  className="h-16 w-auto object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
