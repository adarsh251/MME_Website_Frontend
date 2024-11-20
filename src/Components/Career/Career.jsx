import React from 'react'
import './Career.css' 
import { Link } from 'react-router-dom'
import gallery1 from'../../assets/gallery1.png'
import car1 from'../../assets/car1.jpg'
import car2 from'../../assets/car2.jpg'
import car3 from'../../assets/car3.jpg'
import car4 from'../../assets/car4.jpg'
import car5 from'../../assets/car5.jpg'
import car6 from'../../assets/car6.jpg'
import car7 from'../../assets/car7.jpg'
import Title from '../Title/Title'

const Career = () => {
  return (
    
    <div className="outercareer">
      <Title subTitle='Career' title='What can You do'/>
    <div className="container10">
    <div className="card10">
      <div className="image10">
        <img src={car1} alt="Image 1"/>
      </div>
      <div className="description10">
        <h2>Welder/Fabricator:</h2>
        <p> This is the most common career path for individuals trained in welding. Welders use various welding techniques to join metal components or fabricate structures according to blueprints or specifications. They work in industries such as construction, manufacturing, shipbuilding, and automotive.</p>
  
      </div>
    </div>
    </div>

    <div className="container10">
    <div className="card10">
      <div className="image10">
        <img src={car2} alt="Image 1"/>
      </div>
      <div className="description10">
        <h2>Welding Inspector:</h2>
        <p>Welding inspectors ensure that welded structures and components meet quality and safety standards. They inspect welds visually and using non-destructive testing methods such as ultrasonic testing (UT), radiographic testing (RT), magnetic particle testing (MT), and dye penetrant testing (PT).</p>
        
      </div>
    </div>
    </div>

    <div className="container10">
    <div className="card10">
      <div className="image10">
        <img src={car3} alt="Image 1"/>
      </div>
      <div className="description10">
        <h2>Pipe Welder:</h2>
        <p>Pipe welders specialize in welding pipes and pipelines used in industries such as oil and gas, water treatment, and plumbing. They must be proficient in welding techniques such as TIG (GTAW), stick (SMAW), and sometimes specialized processes like orbital welding.</p>
       
      </div>
    </div>
    </div>

    <div className="container10">
    <div className="card10">
      <div className="image10">
        <img src={car4} alt="Image 1"/>
      </div>
      <div className="description10">
        <h2>Welding Engineer:</h2>
        <p>Welding engineers design welding procedures, develop welding processes, and oversee welding operations in industries such as aerospace, automotive, and manufacturing. They also conduct research and development to improve welding techniques and materials.</p>
        
      </div>
    </div>
    </div>

    <div className="container10">
    <div className="card10">
      <div className="image10">
        <img src={car5} alt="Image 1"/>
      </div>
      <div className="description10">
        <h2>Robotics Technician:</h2>
        <p>Robotics technicians maintain and program robotic welding systems used in automated manufacturing processes. They troubleshoot technical issues, perform preventive maintenance, and optimize robot performance to ensure efficient and reliable operation.</p>
        
      </div>
    </div>
    </div>

    <div className="container10">
    <div className="card10">
      <div className="image10">
        <img src={car6} alt="Image 1"/>
      </div>
      <div className="description10">
        <h2>Welding Instructor/Trainer:</h2>
        <p>Welding instructors teach welding techniques, safety procedures, and related skills at vocational schools, community colleges, and trade schools. They may also provide on-the-job training for apprentices and entry-level welders.</p>
        
      </div>
    </div>
    </div>

    <div className="container10">
    <div className="card10">
      <div className="image10">
        <img src={car7} alt="Image 1"/>
      </div>
      <div className="description10">
        <h2>Welding Sales Representative:</h2>
        <p>Welding sales representatives work for welding equipment manufacturers or suppliers, selling welding machines, consumables, and related products to industrial customers. They provide product demonstrations, technical support, and assistance with equipment selection.</p>
        
      </div>
    </div>
    </div>




    </div>

  )
}

export default Career
