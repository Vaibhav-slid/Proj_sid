import React, { useEffect, useState } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ images, height, width }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  height = height || "300px";
  width = width || "100%";
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider" style={{ height, width }}>
      <div
        className="slider__images"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="slider__image" key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button
        className="slider__button slider__button--prev"
        onClick={handlePrev}
      >
        &#10094;
      </button>
      <button
        className="slider__button slider__button--next"
        onClick={handleNext}
      >
        &#10095;
      </button>
      <div className="slider__dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`slider__dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
