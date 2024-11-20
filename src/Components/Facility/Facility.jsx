import React from 'react'
import './Facility.css'
import fl1 from '../../assets/fl1.jpg'
import fl2 from '../../assets/fl2.jpg'
import fl3 from '../../assets/fl3.jpg'
import fl4 from '../../assets/fl4.png'
import fl5 from '../../assets/fl5.jpg'
import fl6 from '../../assets/fl6.png'
import fl7 from '../../assets/fl7.png'
import fl8 from '../../assets/fl8.jpg'
import Title from '../Title/Title'
import { Link } from 'react-router-dom'
 

const Facility = () => {
  return (
    <>
    <Title   title='LAB FACILITIES'/>
    <div className='outerFacility'>
     <div className="Facilitycontainer">
      <Link to="/facility1">  <a href="/facility1" className="cardFacility">
      <h2>SMAW</h2>
      <img src={fl1} alt=""/>
     </a></Link>
   
    
    <a href=" /facility2" className="cardFacility">
      <h2>SAW</h2>
      <img src={fl2} alt="" />
     </a>

    <a href="/facility3" className="cardFacility">
      <h2>GMAW or MIG</h2>
      <img src={fl3} alt="" />
     </a>

    <a href="/facility4" className="cardFacility">
      <h2>GTAW</h2>
      <img src={fl4} alt="" />
     </a>

    <a href="/facility5" className="cardFacility">
      <h2>Oxyfuel Welding</h2>
      <img src={fl5} alt="" />
     </a>

    <a href="/facility6" className="cardFacility">
      <h2>Robotic Welding</h2>
      <img src={fl6} alt="" />
     </a>
      
      <Link to="/facility7"> 
    <a href=" " className="cardFacility">
      <h2>Plasma Cutting</h2>
      <img src={fl7} alt="" />
     </a>
     </Link>

     <Link to="/facility8"> 
    <a href=" " className="cardFacility">
      <h2>Consumable Development</h2>
      <img src={fl8} alt="" />
     </a>
     </Link>
     
    
  </div>    
    
      
    </div>
    </>
  )
}

export default Facility
