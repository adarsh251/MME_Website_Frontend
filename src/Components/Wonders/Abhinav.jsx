
// import React, { useEffect } from 'react'
// import program_1 from '../../assets/pro1.jpg'
// import program_2 from '../../assets/pro2.jpg'
// import program_3 from '../../assets/pro3.png'
// import program_4 from '../../assets/pro4.jpg'

// function Carousel() {
//     useEffect(() => {
//         let slider = document.querySelector('.slider .list');
//         let items = document.querySelectorAll('.slider .list .item');
//         let next = document.getElementById('next');
//         let prev = document.getElementById('prev');
//         let dots = document.querySelectorAll('.slider .dots li');

//         let lengthItems = items.length - 1;
//         let active = 0;

//         function reloadSlider() {
//             slider.style.left = -items[active].offsetLeft + 'px';

//             let last_active_dot = document.querySelector('.slider .dots li.active');
//             last_active_dot.classList.remove('active');
//             dots[active].classList.add('active');
//         }

//         next.onclick = function () {
//             active = active + 1 <= lengthItems ? active + 1 : 0;
//             reloadSlider();
//         }

//         prev.onclick = function () {
//             active = active - 1 >= 0 ? active - 1 : lengthItems;
//             reloadSlider();
//         }

//         dots.forEach((li, key) => {
//             li.addEventListener('click', () => {
//                 active = key;
//                 reloadSlider();
//             })
//         })

//         window.onresize = function (event) {
//             reloadSlider();
//         };

//         // No refresh interval

//     }, []) // Empty dependency array ensures this effect only runs once on mount




 
//   return (
//     <div className="slider">
//     <div className="list">
//         <div className="item">
//         <div className="item-left">
//          <img src={program_1} alt="" className='about-img' />
//        </div>

//        <div className="item-right">
//         <h3>ABOUT UNIVERSITY</h3>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas reprehenderit totam enim eos consequuntur vero tempora nobis laudantium ipsum iste! Totam deserunt nemo sint laboriosam porro laudantium aut cumque magni!</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas reprehenderit totam enim eos consequuntur vero tempora nobis laudantium ipsum iste! Totam deserunt nemo sint laboriosam porro laudantium aut cumque magni!</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas reprehenderit totam enim eos consequuntur vero tempora nobis laudantium ipsum iste! Totam deserunt nemo sint laboriosam porro laudantium aut cumque magni!</p>

//        </div>
//             {/* <img src={program_1} alt=""/> */}
//         </div>
//         <div className="item">
//             <img src={program_2} alt=""/>
//         </div>
//         <div className="item">
//             <img src={program_3} alt=""/>
//         </div>
//         <div className="item">
//             <img src={program_4} alt=""/>
//         </div>
//         <div className="item">
//             <img src={program_1} alt=""/>
//         </div>
//     </div>
//     <div className="buttons">
//         <button id="prev"> &lt;</button>
//         <button id="next">  &gt;</button>
//     </div>
//     <ul className="dots">
//         <li className="active"></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//     </ul>
// </div>
//   );

// }


// export default Carousel






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
        let totalslides = carRef.current.querySelectorAll(".wrapper .left > div").length - 1;

        carRef.current.querySelector(".controls .up").addEventListener("click", function () {
            if (carslide === 0) return;
            carslide--;
            carRef.current.querySelector(".wrapper .left div").style.marginTop = `${carslide * -100}vh`;
            carRef.current.querySelector(".wrapper .right div").style.marginTop = `${(totalslides - carslide) * -100}vh`;
        });

        carRef.current.querySelector(".controls .down").addEventListener("click", function () {
            if (carslide === totalslides) return;
            carslide++;
            carRef.current.querySelector(".wrapper .left div").style.marginTop = `${carslide * -100}vh`;
            carRef.current.querySelector(".wrapper .right div").style.marginTop = `${(totalslides - carslide) * -100}vh`;
        });
        
        // Cleanup: remove event listeners when component unmounts
        return () => {
            carRef.current.querySelector(".controls .up").removeEventListener("click",function(){});
            carRef.current.querySelector(".controls .down").removeEventListener("click",function(){});
        };
    }, []); // Empty dependency array ensures effect runs only once on mount






  return (
    <div className='car' ref={carRef}>
        <div className="controls">
        <div className="up">
         <i className='fa fa-chevron-up'>   &#9650; </i> 
         </div>

         <div className="down">
             
         <i className='fa fa-chevron-down'> &#9660;</i> 


            
            </div>   
        </div>

            <div className="wrapper">
             <div className="left">
                
            <div><h2> Welding in Space</h2>   
             <p> 
             
Welding in space presents formidable challenges due to microgravity and vacuum conditions. Innovative techniques like electron beam and friction stir welding are developed to overcome these hurdles. Precise control is essential as welding behavior differs in zero gravity. Material selection and shielding strategies are crucial to maintain structural integrity. Successful space welding is pivotal for constructing and repairing spacecraft and habitats, ensuring the safety and longevity of missions beyond Earth's atmosphere.</p>

                </div>   
                <div><h2>Welding in Nuclear Reactors </h2>
                <p>Welding in nuclear reactors demands stringent precision and durability to prevent radioactive leaks and ensure structural integrity. Advanced methods like automated orbital and laser welding are utilized alongside materials resistant to corrosion and radiation. Stringent quality control measures are imperative. Welding serves a critical role in constructing and maintaining nuclear reactors, vital for safe and efficient power generation.</p>
                </div>

                <div>
               <h2>Welding of Non Metals</h2>
               <p>
               Welding of non-metals like ceramics, glass, and plastics involves innovative processes tailored to their unique properties. Techniques such as laser welding, ultrasonic welding, and adhesive bonding are utilized to create strong, precise bonds. These methods often require specialized equipment and careful control of temperature and pressure to avoid material degradation. Welding non-metals enables the fabrication of complex structures in diverse industries, from electronics to biomedical devices, advancing innovation in materials engineering and manufacturing.</p>


                </div>

                <div>
               <h2>Offshore Structure Welding</h2>
               <p>Welding is extensively used in shipbuilding, enabling the construction of massive vessels like cargo ships, cruise liners, and naval vessels. The welding of steel plates forms the hull and various compartments of ships, making them seaworthy.</p>


                </div>

                <div>
               <h2>Underwater Welding</h2>
               <p>Underwater welding requires specialized techniques to overcome the challenges of working in a submerged environment. Two primary methods, wet and dry welding, are employed. Wet welding involves welding directly in the water with the use of special electrodes, while dry welding utilizes hyperbaric chambers to create a dry environment around the weld area. Both techniques demand skilled welders and rigorous safety protocols to ensure structural integrity and personnel safety in underwater construction and repair projects..</p>


                </div>
               </div>


                   
             <div className="right">
                   
                    
                   
                   
                    <div>
                    <img src={underwater} alt="" />
                    
                    </div> 

                    <div>
                    <img src={offshore} alt="" />
                    
                    </div> 
                      
                    <div>
                    <img src={plastic} alt="" />
                    
                    </div> 
                   
                    <div>
                    <img src={nuclear} alt="" />
                    
                    </div> 
                
                    <div>
                    <img src={space} alt="" />
                    
                    </div> 


             </div>

            </div>
          
      
    </div>
  )
}

export default Abhinav










