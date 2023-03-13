import React, { useState } from 'react';

const images = [
  'https://i.postimg.cc/3ryH3QHW/waffles.png',
  'https://i.postimg.cc/vmj3zj2S/toast.png',
  'https://i.postimg.cc/kGwSjRXX/oatmeal.png',
  'https://i.postimg.cc/bwnJr2cD/fruit.png',
  'https://i.postimg.cc/k4Y9fnPP/eggs.png'

];



const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleImageClick = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  return (
    <div className="carousel">
      <img className="carousel__image" src={images[currentImage]} alt="carousel" onClick={handleImageClick} />
    </div>
  );
};

export default Carousel;
