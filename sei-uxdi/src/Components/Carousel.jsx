import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';

const images = [
  'https://i.postimg.cc/3ryH3QHW/waffles.png',
  'https://i.postimg.cc/vmj3zj2S/toast.png',
  'https://i.postimg.cc/kGwSjRXX/oatmeal.png',
  'https://i.postimg.cc/bwnJr2cD/fruit.png',
  'https://i.postimg.cc/k4Y9fnPP/eggs.png'

];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex, images]);

  const handleImageClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const currentSlide = (n) => {
    setCurrentImageIndex(n - 1);
  };

  return (
    <div className="carousel">
      <img
        className="carousel__image"
        src={images[currentImageIndex]}
        alt="carousel"
        onClick={handleImageClick}
      />
    </div>
  );
};

export default Carousel;