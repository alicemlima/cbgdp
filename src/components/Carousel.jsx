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
    <div id="animation-carousel" className="relative h-full w-full my-5" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {children.map((item, idx) => (
          <div
            key={idx}
            className={`duration-200 ease-linear  ${
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
      <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-pallete-white/30  group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
      <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
      <span class="sr-only">Previous</span>
  </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={goToNextItem}
      >
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-pallete-white/30 d group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}