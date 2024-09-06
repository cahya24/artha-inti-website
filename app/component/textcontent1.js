"use client";

import React from 'react';

export default function TextContent1() {
  return (
    <div className="min-h-fit bg-secondary flex items-center justify-center p-16">
      <div className="flex max-w-3xl w-full bg-primary rounded-3xl shadow-lg">
        {/* Image Section */}
        <div className="w-1/2 p-4">
          <img
            src="Cooling-Tower-Water-Treatment-Indonesia.jpg" // Update with your image path
            alt="Water Treatment"
            className="w-full h-96 rounded-lg object-contain"
          />
          <img
            src="RO-Membrane-Cleaning-Indonesia.jpg" // Update with your image path
            alt="Water Treatment"
            className="w-full h-96 rounded-lg object-contain"
          />
        </div>
        {/* Text Section */}
        <div className="w-2/3 p-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Water Treatment Indonesia</h1>
          <p className="text-lg text-gray-700 mb-4">
            Water treatment in Indonesia has been one of the most critical parts in all industries. With several applications from bio-pharm, food and beverages, dairy, pharmaceutical, and oil & gas. 
            All those different applications, of course, need different types of water treatment. Basically, treatment for water could be categorized in two areas; utility and process water, and of course, different treatment is definitely required.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Indonesia, with its tropical climate and water content of high minerals, is very challenging for water treatment itself. It is absolutely important to protect all of your equipment as well as produce high-quality process water (especially for Pharmaceutical and F&B applications).
          </p>
          <p className="text-lg text-gray-700">
            In terms of protection for your equipment, from boiler, chiller, cooling tower, and even RO Membrane Cleaning and RO Treatment, PT. Artha Inti Manunggal provides you with various treatment chemicals and customized solutions. What we need to know are:
          </p>
        </div>
      </div>
    </div>
  );
}
