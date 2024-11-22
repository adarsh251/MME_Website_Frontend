import React, { useRef, useEffect } from 'react';
import space from '../../assets/space.jpg';
import nuclear from '../../assets/nuclear.jpg';
import plastic from '../../assets/plastic.jpg';
import offshore from '../../assets/offshore.jpg';
import underwater from '../../assets/underwater.jpg';

const Abhinav = () => {
  const carRef = useRef(null);

  useEffect(() => {
    if (!carRef.current) return;

    let carslide = 0;
    const leftItems = carRef.current.querySelectorAll(".wrapper .left > div");
    const rightItems = carRef.current.querySelectorAll(".wrapper .right > div");
    const totalSlides = leftItems.length - 1;

    const updateSlidePosition = () => {
      leftItems.forEach((item, index) => {
        item.style.transform = `translateY(${-carslide * 100}vh)`;
      });
      rightItems.forEach((item, index) => {
        item.style.transform = `translateY(${(totalSlides - carslide) * -100}vh)`;
      });
    };

    const handleUpClick = () => {
      if (carslide === 0) return;
      carslide--;
      updateSlidePosition();
    };

    const handleDownClick = () => {
      if (carslide === totalSlides) return;
      carslide++;
      updateSlidePosition();
    };

    const upButton = carRef.current.querySelector(".controls .up");
    const downButton = carRef.current.querySelector(".controls .down");

    upButton.addEventListener("click", handleUpClick);
    downButton.addEventListener("click", handleDownClick);

    // Cleanup function
    return () => {
      upButton.removeEventListener("click", handleUpClick);
      downButton.removeEventListener("click", handleDownClick);
    };
  }, []);

  return (
    <div className='car' ref={carRef}>
      <div className="controls">
        <div className="up">
          <i className='fa fa-chevron-up'> &#9650; </i>
        </div>
        <div className="down">
          <i className='fa fa-chevron-down'> &#9660;</i>
        </div>
      </div>

      <div className="wrapper">
        <div className="left">
          <div>
            <h2>Welding in Space</h2>
            <p>Welding in space presents formidable challenges due to microgravity...</p>
          </div>
          <div>
            <h2>Welding in Nuclear Reactors</h2>
            <p>Welding in nuclear reactors demands stringent precision...</p>
          </div>
          <div>
            <h2>Welding of Non-Metals</h2>
            <p>Welding of non-metals like ceramics, glass, and plastics involves...</p>
          </div>
          <div>
            <h2>Offshore Structure Welding</h2>
            <p>Welding is extensively used in shipbuilding...</p>
          </div>
          <div>
            <h2>Underwater Welding</h2>
            <p>Underwater welding requires specialized techniques to overcome...</p>
          </div>
        </div>

        <div className="right">
          <div>
            <img src={underwater} alt="Underwater Welding" />
          </div>
          <div>
            <img src={offshore} alt="Offshore Welding" />
          </div>
          <div>
            <img src={plastic} alt="Non-Metal Welding" />
          </div>
          <div>
            <img src={nuclear} alt="Nuclear Welding" />
          </div>
          <div>
            <img src={space} alt="Space Welding" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abhinav;
