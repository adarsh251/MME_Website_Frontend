import React from 'react'
import'./Photos.css'
import gal1 from'../../assets/gal1.jpeg'
import gal2 from'../../assets/gal2.jpeg'
import gal3 from'../../assets/gal3.jpeg'
import gal4 from'../../assets/gal4.jpeg'
import gal5 from'../../assets/gal5.jpeg'
import gal6 from'../../assets/gal6.jpeg'
import gal7 from'../../assets/gal7.jpeg'

import white_arrow from'../../assets/white-arrow.png'



const Photos = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gal1} alt="" />
            <img src={gal4} alt="" />
            <img src={gal3} alt="" />
           
           
        </div>
        <div className="gallery">
        
            
            <img src={gal6} alt="" />
            <img src={gal2} alt="" />
            <img src={gal7} alt="" />
            
        </div>

        {/* <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button> */}

      
    </div>
  )
}

export default Photos
