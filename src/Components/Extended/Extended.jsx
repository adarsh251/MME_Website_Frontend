import React from 'react'
import './Extended.css'
import provide1 from '../../assets/IC.jpg'
import provide2 from '../../assets/Inhouse.jpg'
import provide3 from '../../assets/Workshop.jpg'
import log1 from '../../assets/log1.png'
import log2 from '../../assets/log2.png'
import log3 from '../../assets/log3.png'

import { Link } from 'react-router-dom'



const Extended = () => {
  return (
    <div className='programs'>


<div className="program">
         
         <Link to="training">
         <img src={provide2} alt="" />
        <div className="caption">
            <img src={log2} alt="" />
            <p>In-House Training Program:</p>
         </div>
         </Link>
        
       
        
       

        </div>

        <div className="program">
         
         <Link to="/industry-consultancy">
         <img src={provide1} alt="" />
         
         <div className="caption">
            <img src={log1} alt="" />
            <p>Industrial Consultancy</p>
         </div>
       
         </Link>
        

        </div>
        
        <div className="program">
         
         <Link to="workshop">
         <img src={provide3} alt="" />
        <div className="caption">
            <img src={log3} alt="" />
            <p>Dedicated Workshop </p>
         </div>
       
         </Link>
       
        
       

        </div>
        
      
    </div>
  )
}

export default Extended
