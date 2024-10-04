import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    image: "Cooling-Tower-Water-Treatment-Indonesia.jpg",
    title: "Water Treatment Solutions",
    description: "Advanced water treatment technologies for industrial applications. Our solutions ensure optimal water quality for various processes while protecting your equipment and improving efficiency.",
    link: "#"
  },
  {
    id: 2,
    image: "Cooling-Tower-Water-Treatment-Indonesia.jpg",
    title: "Membrane Filtration Systems",
    description: "State-of-the-art membrane filtration systems designed for superior performance. Ideal for pharmaceutical, food & beverage, and other industries requiring high-purity water.",
    link: "#"
  },
  {
    id: 3,
    image: "Cooling-Tower-Water-Treatment-Indonesia.jpg",
    title: "Cooling Tower Solutions",
    description: "Comprehensive cooling tower treatment programs to maximize system efficiency, prevent corrosion, and control microbiological growth in your cooling water systems.",
    link: "#"
  }
];

export default function ScrollableSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? newsItems.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this with the CSS transition duration

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-black mb-8 text-center">News & Events</h2>
        <p className="text-black text-center mb-12">Find out the latest information. Browse company news, industry updates, and more.</p>
        
        <div className="relative overflow-hidden">
          <div className="flex items-center">
            <button 
              onClick={prevSlide}
              className="sm:block hidden left-0 z-10 p-6 bg-white"
              disabled={isTransitioning}
            >
              <ChevronLeft className="h-64 w-6 text-black" />
            </button>
            
            <div className="w-full">
              <div className="relative w-full h-[300px]">
                {newsItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`absolute top-0 w-full flex transition-transform duration-500 ease-in-out ${
                      index === currentIndex 
                        ? 'translate-x-0'
                        : index < currentIndex
                        ? '-translate-x-full'
                        : 'translate-x-full'
                    }`}
                  >
                    <div className="w-1/2">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-[300px] object-cover"
                      />
                    </div>
                    <div className="w-1/2 p-8">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        {item.title}
                      </h3>
                      <p className="text-black/90 mb-6">
                        {item.description}
                      </p>
                      <a 
                        href={item.link}
                        className="inline-block bg-buttonColor text-white px-6 py-2 rounded-lg hover:bg-buttonColorHover transition-colors"
                      >
                        Read More...
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={nextSlide}
              className="sm:block hidden right-0 z-10 p-6 bg-white"
              disabled={isTransitioning}
            >
              <ChevronRight className="h-64 w-6 text-black" />
            </button>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {newsItems.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? 'bg-primary' : 'bg-primary/50'
                }`}
                onClick={() => !isTransitioning && setCurrentIndex(index)}
                disabled={isTransitioning}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}