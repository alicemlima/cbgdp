'use client'
import React, { useEffect, useState } from 'react';

export default function Carousel({ children }) {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const goToNextItem = () => {
    setCurrentItemIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNextItem, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="animation-carousel" className="relative h-full w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {children.map((item, idx) => (
          <div
            key={idx}
            className={`duration-200 ease-linear ${
              idx === currentItemIndex ? '' : 'hidden'
            }`}
            data-carousel-item
          >
            <img
              src={item.url}
              className=" rounded-lg absolute coverblock w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={() =>
          setCurrentItemIndex((prevIndex) =>
            prevIndex === 0 ? children.length - 1 : prevIndex - 1
          )
        }
      >
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={goToNextItem}
      >
      </button>
    </div>
  );
}