// Background.jsx

import React, { useState } from 'react';

const Background = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeBackground = () => {
    const container = document.querySelector('.container');
  if (container) {
    container.style.backgroundImage = `url('${images[currentIndex]}')`;
    
  }
      
  }

  const nextBackground = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevBackground = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  // Change background image when page loads
  changeBackground();

  return (
    <div>
      <button className="prevButton" onClick={prevBackground}>Previous</button>
      <button className="nextButton" onClick={nextBackground}>Next</button>
    </div>
  );
};

export default Background;

