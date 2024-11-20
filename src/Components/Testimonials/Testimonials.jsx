import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
 
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
 import Abhinav from '../../assets/Abhinav.jpg'
import chandan from '../../assets/chandan.jpeg'
import Devika from '../../assets/Devika.jpeg'

const Testimonials = () => {
    const slider= useRef();
    let tx=0;
    const slideForward= ()=>{
        if(tx > -50)
        {
            tx-=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;
    }
    const slideBackward= ()=>{
        if(tx < 0)
        {
            tx+=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;

    }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={chandan} alt="" />
                            <div>
                                <h3>Chandandeep Singh</h3>
                                <span>Lnmiit</span>
                            </div>
                        </div>
                        <p>
                        In essence, while my journey as a CSE student has been fulfilling, my passion for Mechanical Engineering ignites a sense of purpose and excitement that drives me to push the boundaries of innovation. I am eager to embark on a career that allows me to seamlessly integrate the best of both worlds and make meaningful contributions to the ever-evolving landscape of engineering.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={Abhinav} alt="" />
                            <div>
                                <h3>Abhinav Midha</h3>
                                <span>Lnmiit</span>
                            </div>
                        </div>
                        <p>
                        I am a student pursuing Computer Science and Engineering (CSE), but my fascination with the world of Mechanical Engineering has always been undeniable. While my academic focus lies in programming languages, algorithms, and software development, I find myself drawn to the intricate workings of machinery, engines, and mechanical systems.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={Devika} alt="" />
                            <div>
                                <h3>Devika Badhera</h3>
                                <span>Lnmiit</span>
                            </div>
                        </div>
                        <p>
                        Being a part of the mechanical department at Lnmiit has been inspiring. With state-of-the-art facilities and dedicated faculty, I've gained invaluable knowledge and hands-on experience, laying a solid foundation for being an industry ready engineer.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user2} alt="" />
                            <div>
                                <h3>Aditya Khandelwal</h3>
                                <span>Lnmiit</span>
                            </div>
                        </div>
                        <p>
                        Choosing Lnmiit's mechanical department was a game-changer. The comprehensive education and practical exposure provided by dedicated faculty have equipped me with the skills and confidence to excel in the dynamic field of mechanical engineering.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Testimonials
