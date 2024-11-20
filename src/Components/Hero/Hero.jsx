import React,{useEffect} from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import Extended from '../Extended/Extended'
import Title from '../Title/Title'
import Photos from '../Photos/Photos'
import Testimonials from '../Testimonials/Testimonials'
 
 
 

const Hero = () => { 


  useEffect(() => {
    animateText(); // Trigger animation on component mount
  }, []);

  function animateText() {
    document.getElementById('highlightText').classList.add('animate');
  
  }

  

  return (
    <>
     <div className='hero container'>
     
       <div className="hero-text">
          <div className="heading">
          <h1 >Department of </h1>
           <h1> Mechanical-Mechatronics Engineering</h1> 
          </div>
        <h1 id="highlightText">Welding Research </h1>
        <p className='typing-container'> "Forging Innovation, Igniting Progress: Explore the Frontier of Welding Research. Uncover Cutting-Edge Techniques, Materials, and Technologies Shaping Tomorrow's Welding Industry."</p>
        
         <a href="#move" className='btn'>Explore more <img src={dark_arrow} alt="" /></a> 
        
          
         
        </div>

         
    </div>
       
     <div className="container">
      <Title     title='What We Provide'/>
     <Extended/>

     <Title subTitle='Gallery' title='Lab Photos'/>
     <Photos/>
     <Title subTitle='TESTIMONIALS' title='What Students Say'/>
     <Testimonials/>


     </div>
  
    </>
   


  )
}

export default Hero
