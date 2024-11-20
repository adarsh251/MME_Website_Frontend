// import React, { useEffect } from 'react';
// import program_1 from '../../assets/pro1.jpg'
// import program_2 from '../../assets/pro2.jpg'
// import program_3 from '../../assets/pro3.png'
// import program_4 from '../../assets/pro4.jpg'

// function Carousel() {
//   useEffect(() => {
//     // Step 1: Get DOM
//     let nextDom = document.getElementById('next');
//     let prevDom = document.getElementById('prev');
//     let carouselDom = document.querySelector('.carousel');
//     let SliderDom = carouselDom.querySelector('.carousel .list');
//     let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
//     let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
//     let timeRunning = 3000;
//     let timeAutoNext = 7000;

//     thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

//     let runTimeOut;
//     let runNextAuto = setTimeout(() => {
//       next.click();
//     }, timeAutoNext);

//     nextDom.onclick = function() {
//       showSlider('next');
//     };

//     prevDom.onclick = function() {
//       showSlider('prev');
//     };

//     function showSlider(type) {
//       let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
//       let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

//       if (type === 'next') {
//         SliderDom.appendChild(SliderItemsDom[0]);
//         thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
//         carouselDom.classList.add('next');
//       } else {
//         SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
//         thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
//         carouselDom.classList.add('prev');
//       }
//       clearTimeout(runTimeOut);
//       runTimeOut = setTimeout(() => {
//         carouselDom.classList.remove('next');
//         carouselDom.classList.remove('prev');
//       }, timeRunning);

//       clearTimeout(runNextAuto);
//       runNextAuto = setTimeout(() => {
//         next.click();
//       }, timeAutoNext);
//     }
//   }, []); // Empty dependency array to run only once when component mounts

//   return (
//     <div className="carousel">
//        <div class="list">
//             <div class="item">
//                 <img src={program_1}/>
//                 <div class="content">
                    
//                     <div class="title">Ongoing Projects</div>
//                     <div class="topic">ANIMAL</div>
//                     <div class="des">
                        
//                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
//                     </div>
//                     <div class="buttons">
//                         <button>SEE MORE</button>
//                         <button>SUBSCRIBE</button>
//                     </div>
//                 </div>
//             </div>
//             <div class="item">
//                 <img src={program_2}/>
//                 <div class="content">
               
//                     <div class="title">Ongoing Projects</div>
//                     <div class="topic">ANIMAL</div>
//                     <div class="des">
//                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
//                     </div>
//                     <div class="buttons">
//                         <button>SEE MORE</button>
//                         <button>SUBSCRIBE</button>
//                     </div>
//                 </div>
//             </div>
//             <div class="item">
//                 <img src={program_3}/>
//                 <div class="content">
                 
//                     <div class="title">Ongoing Projects</div>
//                     <div class="topic">ANIMAL</div>
//                     <div class="des">
//                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
//                     </div>
//                     <div class="buttons">
//                         <button>SEE MORE</button>
//                         <button>SUBSCRIBE</button>
//                     </div>
//                 </div>
//             </div>
//             <div class="item">
//                 <img src={program_4}/>
//                 <div class="content">
//                     <div class="author">LUNDEV</div>
//                     <div class="title">Ongoing Projects</div>
//                     <div class="topic">ANIMAL</div>
//                     <div class="des">
//                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
//                     </div>
//                     <div class="buttons">
//                         <button>SEE MORE</button>
//                         <button>SUBSCRIBE</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
    
//         <div class="thumbnail">
//             <div class="item">
//                 <img src={program_1}/>
//                 <div class="content">
//                     <div class="title">
//                         Name Slider
//                     </div>
//                     <div class="description">
//                         Description
//                     </div>
//                 </div>
//             </div>
//             <div class="item">
//                 <img src={program_2}/>
//                 <div class="content">
//                     <div class="title">
//                         Name Slider
//                     </div>
//                     <div class="description">
//                         Description
//                     </div>
//                 </div>
//             </div>
//             <div class="item">
//                 <img src={program_3}/>
//                 <div class="content">
//                     <div class="title">
//                         Name Slider
//                     </div>
//                     <div class="description">
//                         Description
//                     </div>
//                 </div>
//             </div>
//             <div class="item">
//                 <img src={program_4}/>
//                 <div class="content">
//                     <div class="title">
//                         Name Slider
//                     </div>
//                     <div class="description">
//                         Description
//                     </div>
//                 </div>
//             </div>
//         </div>
    

//         <div class="arrows">
//             <button id="prev"></button>
//             <button id="next"></button>
//         </div>
        
//         <div class="time"></div>

//     </div>
//   );
// }

// export default Carousel;
