import React, { useRef, useEffect } from 'react';
import space from '../../assets/space.jpg';
import nuclear from '../../assets/nuclear.jpg';
import plastic from '../../assets/plastic.jpg';
import offshore from '../../assets/offshore.jpg';
import underwater from '../../assets/underwater.jpg';

const Abhinav = () => {
  const carRef = useRef(null); // Create a ref for the .car element

  useEffect(() => {
    // Define event listeners and logic for slider functionality
    let carslide = 0;
    const carElement = carRef.current;
    const totalSlides = carElement.querySelectorAll('.wrapper .left > div').length - 1;

    const upButton = carElement.querySelector('.controls .up');
    const downButton = carElement.querySelector('.controls .down');

    const updateSlides = () => {
      const leftDiv = carElement.querySelector('.wrapper .left div');
      const rightDiv = carElement.querySelector('.wrapper .right div');
      if (leftDiv && rightDiv) {
        leftDiv.style.marginTop = `${carslide * -100}vh`;
        rightDiv.style.marginTop = `${(totalSlides - carslide) * -100}vh`;
      }
    };

    const handleUpClick = () => {
      if (carslide === 0) return;
      carslide--;
      updateSlides();
    };

    const handleDownClick = () => {
      if (carslide === totalSlides) return;
      carslide++;
      updateSlides();
    };

    upButton.addEventListener('click', handleUpClick);
    downButton.addEventListener('click', handleDownClick);

    // Cleanup: remove event listeners when component unmounts
    return () => {
      upButton.removeEventListener('click', handleUpClick);
      downButton.removeEventListener('click', handleDownClick);
    };
  }, []); // Empty dependency array ensures effect runs only once on mount

  return (
    <div className="car" ref={carRef}>
      <div className="controls">
        <div className="up">
          <i className="fa fa-chevron-up">&#9650;</i>
        </div>
        <div className="down">
          <i className="fa fa-chevron-down">&#9660;</i>
        </div>
      </div>

      <div className="wrapper">
        <div className="left">
          <div>
            <h2>Welding in Space</h2>
            <p>
              Welding in space presents formidable challenges due to microgravity and vacuum conditions.
              Innovative techniques like electron beam and friction stir welding are developed to overcome
              these hurdles. Precise control is essential as welding behavior differs in zero gravity.
              Material selection and shielding strategies are crucial to maintain structural integrity.
              Successful space welding is pivotal for constructing and repairing spacecraft and habitats,
              ensuring the safety and longevity of missions beyond Earth's atmosphere.
            </p>
          </div>
          <div>
            <h2>Welding in Nuclear Reactors</h2>
            <p>
              Welding in nuclear reactors demands stringent precision and durability to prevent radioactive
              leaks and ensure structural integrity. Advanced methods like automated orbital and laser
              welding are utilized alongside materials resistant to corrosion and radiation. Stringent
              quality control measures are imperative. Welding serves a critical role in constructing and
              maintaining nuclear reactors, vital for safe and efficient power generation.
            </p>
          </div>
          <div>
            <h2>Welding of Non-Metals</h2>
            <p>
              Welding of non-metals like ceramics, glass, and plastics involves innovative processes
              tailored to their unique properties. Techniques such as laser welding, ultrasonic welding,
              and adhesive bonding are utilized to create strong, precise bonds. These methods often
              require specialized equipment and careful control of temperature and pressure to avoid
              material degradation. Welding non-metals enables the fabrication of complex structures in
              diverse industries, from electronics to biomedical devices, advancing innovation in
              materials engineering and manufacturing.
            </p>
          </div>
          <div>
            <h2>Offshore Structure Welding</h2>
            <p>
              Welding is extensively used in shipbuilding, enabling the construction of massive vessels like
              cargo ships, cruise liners, and naval vessels. The welding of steel plates forms the hull and
              various compartments of ships, making them seaworthy.
            </p>
          </div>
          <div>
            <h2>Underwater Welding</h2>
            <p>
              Underwater welding requires specialized techniques to overcome the challenges of working in a
              submerged environment. Two primary methods, wet and dry welding, are employed. Wet welding
              involves welding directly in the water with the use of special electrodes, while dry welding
              utilizes hyperbaric chambers to create a dry environment around the weld area. Both techniques
              demand skilled welders and rigorous safety protocols to ensure structural integrity and
              personnel safety in underwater construction and repair projects.
            </p>
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
