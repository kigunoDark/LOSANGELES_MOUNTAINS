import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ items, slidesToShow }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
              key={item.id}
              src={item.url}
              className={`carousel-slide ${item.id >= currentIndex &&
                item.id < currentIndex + slidesToShow
                ? 'active'
                : ''}`}
            />
         
          ))}
        </div>
      </div>
      <div className="carousel-dots">
        {items.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
