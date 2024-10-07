import React, { useState, useEffect, useRef } from 'react';
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
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = () => {
    if (!isTransitioning) {
      const swipeDistance = touchStartX.current - touchEndX.current;
      const swipeThreshold = 50;

      if (swipeDistance > swipeThreshold) {
        nextSlide();
      } else if (swipeDistance < -swipeThreshold) {
        prevSlide();
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="bg-white py-8 sm:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 sm:mb-8 md:text-center text-left">News & Events</h2>
        <p className="text-black md:text-center text-left mb-8 sm:mb-12">Find out the latest information. Browse company news, industry updates, and more.</p>
        
        <div className="relative">
          <div 
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Left Arrow */}
            <button 
              onClick={prevSlide}
              className="hidden sm:block absolute -ml-16 left-0 top-1/2 -translate-y-1/2 z-20 p-2"
              disabled={isTransitioning}
            >
              <ChevronLeft className="h-8 w-8 text-black" />
            </button>
            
            {/* Slides Container */}
            <div className="relative h-[400px] sm:h-[300px]">
              {newsItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute top-0 w-full transition-transform duration-500 ease-in-out ${
                    index === currentIndex 
                      ? 'translate-x-0'
                      : index < currentIndex
                      ? '-translate-x-full'
                      : 'translate-x-full'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row h-full">
                    <div className="w-full sm:w-1/2 h-48 sm:h-full">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-full sm:w-1/2 p-4 sm:p-8 bg-white">
                      <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-4">
                        {item.title}
                      </h3>
                      <p className="text-black/90 mb-4 sm:mb-6">
                        {item.description}
                      </p>
                      <a 
                        href={item.link}
                        className="inline-block bg-buttonColor text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-buttonColorHover transition-colors"
                      >
                        Read More...
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button 
              onClick={nextSlide}
              className="hidden sm:block absolute -mr-16 right-0 top-1/2 -translate-y-1/2 z-20 p-2"
              disabled={isTransitioning}
            >
              <ChevronRight className="h-8 w-8 text-black" />
            </button>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
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