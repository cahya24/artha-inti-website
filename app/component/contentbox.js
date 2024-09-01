import React from 'react';
import Link from 'next/link';

// Example data for content boxes
const contentBoxes = [
  {
    id: 1,
    title: 'Feature 1',
    description: 'Learn more about Feature 1 and how it can benefit you.',
    image: 'feature1.jpg',
    link: '/feature1',
  },
  {
    id: 2,
    title: 'Feature 2',
    description: 'Discover the advantages of Feature 2 for your needs.',
    image: 'feature2.jpg',
    link: '/feature2',
  },
  {
    id: 3,
    title: 'Feature 3',
    description: 'Explore the unique qualities of Feature 3 and its uses.',
    image: 'feature3.jpg',
    link: '/feature3',
  },
  // Add more content boxes as needed
];

export default function ContentBoxSection() {
  return (
    <div className="py-8 bg-white w-full flex flex-col items-center">
      {/* Grid Container for Content Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {contentBoxes.map((box, index) => (
          <div
            key={box.id}
            className={`relative flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-${
              index === 0 ? '1' : index === 1 ? '3' : '2'
            } hover:scale-105 hover:shadow-xl`}
          >
            {/* Image Section */}
            <div className="w-full h-48 overflow-hidden rounded-md">
              <img
                src={box.image}
                alt={box.title}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Text Section */}
            <div className="mt-4 text-center">
              <h2 className="text-xl font-bold mb-2">{box.title}</h2>
              <p className="text-gray-700 mb-4">{box.description}</p>
              {/* Button for Redirection */}
              <Link href={box.link}>
                <button className="inline-block px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
