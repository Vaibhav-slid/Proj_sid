import React, { useEffect, useState } from "react";
import "./SliderComponent.css";

const SliderComponent = ({ images, height, width, transitionType }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  height = height || "250px";
  width = width || "100%";
  transitionType = transitionType || "fade";

  useEffect(() => {
    const interval = setInterval(() => {
      if (transitionType === "fade") {
        setFadeOut(true);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          setFadeOut(false);
        }, 250);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length, transitionType]);

  const handlePrev = () => {
    if (transitionType === "fade") {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
        setFadeOut(false);
      }, 250);
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (transitionType === "fade") {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeOut(false);
      }, 250);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const handleDotClick = (index) => {
    if (transitionType === "fade") {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setFadeOut(false);
      }, 250);
    } else {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="slider" style={{ height, width }}>
      {transitionType === "fade" && (
        <div className={`slider__image ${fadeOut ? "fade-out" : "fade-in"}`}>
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        </div>
      )}
      {transitionType === "slide" && (
        <div
          className="slider__images"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {images.map((image, index) => (
            <div className="slider__image" key={index}>
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      )}
      <button
        className="slider__button slider__button--prev"
        onClick={handlePrev}
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
      <button
        className="slider__button slider__button--next"
        onClick={handleNext}
        aria-label="Next Slide"
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

export default SliderComponent;
