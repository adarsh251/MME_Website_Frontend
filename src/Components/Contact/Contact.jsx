import React, { useRef,useState } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
import messg from '../../assets/msg-icon.png'
import mail from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import loc from '../../assets/location-icon.png'
import warrow from '../../assets/white-arrow.png'
import Title from '../Title/Title'
import { Link, NavLink } from 'react-router-dom';
 


const Contact = () => {

  const [result,setResult]=React.useState("");
   
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setResult("Sending....")

    emailjs
      .sendForm('service_v1mgcp8', 'template_q3tmk3t', form.current, {
        publicKey: 'FiTXJkluYvjent7Ls',
      })
      .then(
        (result) => {
          console.log(result.text);
          setResult("Message sent Successfully");
          setTimeout(() => {
            
            setResult(null)
          }, 1000);
           
          e.target.reset();
          
          // alert("message sent successfully");
        },
        (error) => {
          console.log('FAILED...', error.text);
          setResult("Message not sent")
         
        },
      );
  };


  return (
    <>
     
    <div className="allcontainer">
    <div className="contact-up">
     <Title subTitle='Contact Us' title='Get in Touch'/>
     </div>
    <div className="contact">
    
        <div className="contact-col">
            <h3>
                Send us a message
                <picture>
                    <img src={messg} alt="hero img"/>
                </picture>
            </h3>
            <p>
                Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
            </p>
            <ul>
                <li><picture>
                    <img src={mail} alt="hero img"/>
                </picture><a href="mailto:nfo.lnmiit@lnmiit.ac.in" target="_blank">info.lnmiit@lnmiit.ac.in</a></li>
                <li><picture>
                    <img src={phone} alt="hero img"/>
                </picture>0141 268 8090</li>
                <li> <a href="https://maps.app.goo.gl/rs7qNeq3RgKqnqxQ7"target="_blank"><picture>
                    <img src={loc} alt="hero img"/>
                </picture></a>
                <a href="https://maps.app.goo.gl/rs7qNeq3RgKqnqxQ7" target="_blank">Rupa ki Nagal, Post-Sumel, Via - Jamdoli, Jaipur, Rajasthan 302031</a>
                
                </li>
            </ul>
        </div>
        <div className="contact-col">
            <form ref ={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text"  name='user_name' placeholder='Enter Your Name' required/>
                <label>Email</label>
                <input type="email"  name='user_email' placeholder='Enter Email' required/>
                {/* <label>Phone Number</label>
                <input type="tel" name='phone' placeholder="Enter Your Number" required/> */}
                <label>Write Your message here</label>
                <textarea name="message"  rows="6" placeholder="Enter Your message here" required></textarea>
                <button type="submit" className="btn dark-btn">
                <div>Submit</div>
                
                <picture>
                    <img className='arrow' src={warrow} alt="hero img"/>
                </picture></button>
            </form>
            <span>{result}</span>
        </div>

    </div>
    </div>
     
  
   </>
  )
}



export default Contact
