"use client";

import React from 'react';

export default function ContactUs() {
  return (
    <div id='contact-us' className="bg-secondary py-24 flex flex-col items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        {/* Headline Title */}
        <h2 className="text-3xl font-bold text-black mb-6">Our Goal is to Solve Your Problem!</h2>

        {/* Description Text */}
        <p className="text-lg text-gray-700 mb-8">
          Once we understand your situation, we can provide the best solution to maintain your water quality.
          Our treatment is efficient and accurate, avoiding the wrong chemical use that could worsen the issue. 
          Our expert support team is more than happy to sit down with you and discuss the best solution for your problems.
        </p>

        {/* Contact Info Section */}
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-20 text-blue-900">

          {/* Call Us Section */}
          <div className="mb-8 md:mb-0">
            <p className="font-bold text-lg mb-2">call us here...</p>
            <p className="text-2xl font-bold text-red-600 mb-2">021-29405555</p>
            <p className="font-semibold">PT. Artha Inti Manunggal</p>
            <p>Jl. Tanjung Pura Raya No.3 Kalideres – Jakarta Barat</p>
            <p>Fax: +6221 5407613</p>
          </div>

          {/* Email Us Section */}
          <div className="text-center">
            <p className="font-bold text-lg mb-2">or, email us here...</p>
            <a
              href="mailto:support@artha-inti.com" // Update with actual email address
              className="bg-blue-200 text-blue-700 font-bold px-6 py-3 rounded hover:bg-blue-300 transition"
            >
              Yes, I need support!
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
