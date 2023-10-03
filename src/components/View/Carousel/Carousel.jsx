import React, { useState } from "react";
import "./Carousel.css";

/**
 * Carousel component for displaying a slideshow of items.
 *
 * @component
 * @param {object} props - The component's props.
 * @param {Array} props.items - An array of items to display in the carousel.
 * @param {number} props.slidesToShow - The number of slides to show at a time.
 * @returns {JSX.Element} The Carousel component JSX.
 */

const Carousel = ({ items, slidesToShow }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * Function to navigate to a specific slide.
   *
   * @param {number} index - The index of the target slide.
   */

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
          }}
        >
          {items.map((item) => (
            <img
              alt={`Image ${item.id}`}
              key={item.id}
              src={item.url}
              className={`carousel-slide ${
                item.id >= currentIndex && item.id < currentIndex + slidesToShow
                  ? "active"
                  : ""
              }`}
            />
          ))}
        </div>
      </div>
      <div className="carousel-dots">
        {items.map((item) => (
          <span
            key={item.id}
            data-testId={`dot ${item.id}`}
            className={`dot ${item.id === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(item.id)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
