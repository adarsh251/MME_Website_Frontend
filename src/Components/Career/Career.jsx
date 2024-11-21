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
import Manufacture from '../../assets/Manufacturing Engineer.jpg'
import Aerospace from '../../assets/Aerospace Engineer.jpg'
import Automotive from '../../assets/Automotive Engineer.jpg'
import Design from '../../assets/Design Engineer.jpg'
import Marine from '../../assets/Marine Engineer.jpg'
import Energy from '../../assets/Energy Engineer.jpg'
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
    <div className="card10">
      <div className="image10">
        <img src={Manufacture} alt="Image 1"/>
      </div>
      <div className="description10">
        <h2>Manufacturing Engineer:</h2>
        <p>Manufacturing engineers focus on improving production processes, optimizing workflows, and ensuring the efficient use of resources. They work with automation, robotics, and machinery to increase the quality and speed of manufacturing operations, commonly found in industries such as automotive and electronics.
        </p>
        
      </div>
    </div>
    <div className="card10">
      <div className="image10">
        <img src={Aerospace} alt="Image 1"/>
      </div>
      <div className="description10">
        <h2>Aerospace Engineer:</h2>
        <p>Aerospace engineers design, develop, and test aircraft, spacecraft, and related systems. They work on propulsion systems, aerodynamics, and materials to ensure safety, efficiency, and performance. Careers in this field include roles in defense, commercial aviation, and space exploration.        </p>
        
      </div>
    </div>
    <div className="card10">
      <div className="image10">
        <img src={Automotive} alt="Image 1"/>
      </div>
      <div className="description10">
        <h2>Automotive Engineer:</h2>
        <p>Automotive engineers design and develop vehicles and vehicle components, focusing on performance, safety, and sustainability. They work on areas such as powertrain systems, vehicle dynamics, and electric vehicles, contributing to innovations in the automotive industry.</p>
        
      </div>
    </div>
    <div className="card10">
      <div className="image10">
        <img src={Design} alt="Image 1"/>
      </div>
      <div className="description10">
        <h2>Design Engineer:</h2>
        <p>Design engineers create and develop mechanical components, systems, and products. They use computer-aided design (CAD) software to draft and test their concepts, ensuring functionality, safety, and manufacturability, often working in industries like automotive, aerospace, and consumer electronics.</p>
        
      </div>
    </div>
    <div className="card10">
      <div className="image10">
        <img src={Energy} alt="Image 1"/>
      </div>
      <div className="description10">
        <h2>Energy Engineer
        :</h2>
        <p>Energy engineers focus on optimizing energy production, distribution, and consumption in sectors like renewable energy, oil, and gas. They design systems for efficient power generation, manage energy resources, and work on sustainable energy solutions such as solar, wind, and bioenergy.
        </p>
        
      </div>
    </div>
    <div className="card10">
      <div className="image10">
        <img src={Marine} alt="Image 1"/>
      </div>
      <div className="description10">
        <h2>Marine Engineer:</h2>
        <p>Marine engineers design, develop, and maintain ships, boats, and offshore structures. They work on propulsion systems, electrical systems, and other mechanical components critical for the safe and efficient operation of vessels. Marine engineers are employed in shipping, defense, and offshore oil and gas industries.</p>
        
      </div>
    </div>

    </div>




    </div>

  )
}

export default Career
