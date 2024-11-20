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
        <h3>ABOUT WELDING RESEARCH AT LNMIIT</h3>
       





        <p> Welcome to the Welding Research at LNMIIT! We're a dedicated team of researchers and educators committed to advancing welding technology through innovative research and hands-on training.</p>

        <p>Our mission is to push the boundaries of traditional welding practices by exploring new techniques, materials, and processes. We collaborate with industry partners and fellow academics to solve real-world challenges and drive innovation in the field.</p>
        <p>Through our curriculum and workshops, we empower students with the skills and knowledge needed to excel in welding. We're passionate about nurturing the next generation of welders, engineers, and researchers.
Thank you for visiting our website. Join us in shaping the future of welding technology!
</p>

       </div>
              
      
    </div>
  )
}

export default About
