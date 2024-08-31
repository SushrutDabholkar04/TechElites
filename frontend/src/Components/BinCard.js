import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const BinCard = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      top: 0,
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      top: 0,
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative bg-custom_gray w-full max-w-full overflow-x-hidden p-10">
      <button
        onClick={scrollLeft}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-teal-600 p-2 rounded-full shadow-md hover:bg-gray-400 focus:outline-none z-1"
      >
        &lt;
      </button>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scroll-smooth space-x-4 p-4 scrollbar-hide"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <Link
            key={index}
            to={`/bin/${index + 1}`} // Link to the detailed page for each bin
            className="flex-shrink-0 w-48 h-48 bg-gray-300 rounded-lg shadow-md"
          >
            <div className="flex items-center justify-center h-full">
              Bin {index + 1}
            </div>
          </Link>
        ))}
      </div>
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-teal-600 p-2 rounded-full shadow-md hover:bg-gray-400 focus:outline-none z-1"
      >
        &gt;
      </button>
    </div>
  );
};

export default BinCard;
