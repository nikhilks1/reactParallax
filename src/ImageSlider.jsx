// ImageSlider.jsx
import React, { useState } from 'react';
import './ImageSlider.css'; // Import your CSS for styling

// Import your images
import card1 from './images/card1.jpg';
import card2 from './images/card2.jpg';
import card3 from './images/card3.jpg';
import card4 from './images/card4.jpg';
import card5 from './images/card5.jpg';

const images = [card1, card2, card3, card4, card5];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slider">
      <button onClick={prevSlide} className="slider-button prev">❮</button>
      <img src={images[currentIndex]} alt="Slide" className="slider-image" />
      <button onClick={nextSlide} className="slider-button next">❯</button>
    </div>
  );
}

export default ImageSlider;
