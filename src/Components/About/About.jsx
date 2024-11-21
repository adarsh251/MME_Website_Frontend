import React from 'react'
import './About.css'
// import aboutimg from'../../assets/pro6.png'
import aboutimg from'../../assets/gal2.jpeg'

const About = () => {
  return (
    <div className='about'>
       
       <div className="about-left">
         <img src={aboutimg} alt="" className='about-img' style={{height:'450px'}}/>
       </div>

       <div className="about-right">
        <h3>About MME Department at LNMIIT</h3>
       





        <p>Welcome to the Department of Mechanical-Mechatronics Engineering (MME) at LNMIIT! Our department offers a broad understanding of mechanical engineering while focusing on advanced fields like mechatronics, automotive engineering, nanotechnology, and more. We aim to equip students with the knowledge and practical skills necessary to thrive in diverse industries such as aerospace, automotive, biomedical engineering, and energy.</p>

        <p>We offer B.Tech and Ph.D. programs, with future plans for expansion. Our dedicated faculty, with strong academic and industrial backgrounds, ensures a rigorous and flexible curriculum that prepares students for successful careers and research opportunities globally.</p>

        <p>At MME, we are committed to nurturing the next generation of engineers, researchers, and entrepreneurs, fostering innovation, leadership, and excellence in engineering education.</p>
       </div>
              
      
    </div>
  )
}

export default About
