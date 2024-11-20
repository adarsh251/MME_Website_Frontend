import React from 'react'
import './Faculty.css'
import hod from '../../assets/hod.png'
import fac1 from '../../assets/fac1.jpg'
import fac2 from '../../assets/fac2.jpg'
import fac3 from '../../assets/fac3.jpg'
import fac4 from '../../assets/fac4.jpg'
import fac5 from '../../assets/fac5.jpg'
import fac6 from '../../assets/fac6.png'
import fac7 from '../../assets/fac7.jpg'
import fac8 from '../../assets/fac8.jpg'
import fac9 from '../../assets/fac9.jpg'
import fac10 from '../../assets/fac10.jpg'
import fac11 from '../../assets/fac11.jpg'
import fac12 from '../../assets/fac12.jpg'

import sta1 from '../../assets/sta1.jpg'
import sta2 from '../../assets/sta2.jpg'
import sta3 from '../../assets/sta3.jpg'
import sta4 from '../../assets/sta4.jpg'
import sta5 from '../../assets/sta5.jpg'
import sta6 from '../../assets/sta6.jpg'




const Faculty = () => {
  return (
    <div className='facultyouter'>
        <div className="containerfac">
    {/* <h1>Head of Department</h1>
    <div className="line"></div> */}
    
    {/* <div className="head-of-department">
       
      <img src= {hod} alt="Head of Department"/>
      <h3>Dr.Mohit Makkar</h3>
      <p>Assistant Professor  

Mechanical-Mechatronics Engineering</p>
    </div> */}

    <h1>Regular Faculty</h1>
    <div className="line"></div>
    <div className="faculty">


    <div className="faculty-member">
        <img src={hod} alt="Faculty 1"/>
        <h3>Dr.Mohit Makkar</h3>
        <p>Head of Department <br />Assistant Professor

Mechanical-Mechatronics Engineering <br />
(Speciality in Robotics And Automation)</p>
 
      </div>



      <div className="faculty-member">
        <img src={fac1} alt="Faculty 1"/>
        <h3>Prof.Sunil Pandey</h3>
        <p> Distinguished Professor

        Mechanical-Mechatronics Engineering
        <br />
(Speciality in Manufacturing Technology )</p>
      </div>


      <div className="faculty-member">
        <img src={fac4} alt="Faculty 1"/>
        <h3>Dr.Manoj Kumar</h3>
        <p>Associate Professor

Mechanical-Mechatronics Engineering
<br />
(Speciality in Manufacturing Technology)</p>
      </div>



      <div className="faculty-member">
        <img src={fac5} alt="Faculty 1"/>
        <h3>Dr.Vikram Sharma</h3>
        <p>Associate Professor

Mechanical-Mechatronics Engineering

<br />
(Speciality in Industrial Management)</p>
      </div>


 
      <div className="faculty-member">
        <img src={fac2} alt="Faculty 1"/>
        <h3>Dr.Ashok Kumar Dargar</h3>
        <p>Associate Professor

Mechanical-Mechatronics Engineering

 </p>
      </div>

     
      <div className="faculty-member">
        <img src={fac3} alt="Faculty 1"/>
        <h3>Dr.Kamal Kishore Khatri</h3>
        <p>Associate Professor

Mechanical-Mechatronics Engineering

<br />
(Speciality in Alternate fuels and IC Engines)</p>
      </div>

     

      

      <div className="faculty-member">
        <img src={fac6} alt="Faculty 1"/>
        <h3>Dr.Deepak Rajendra Unune</h3>
        <p>Assistant Professor

Mechanical-Mechatronics Engineering

<br />
(Speciality in Material Science and Engineering)</p>
      </div>
      
      
      
      <div className="faculty-member">
        <img src={fac7} alt="Faculty 1"/>
        <h3>Dr.Servesh Kumar Agnihotri </h3>
        <p>Assistant Professor

Mechanical-Mechatronics Engineering
<br />
(Speciality in Solid Mechanics and Design)</p>
      </div>
      
      <div className="faculty-member">
        <img src={fac8} alt="Faculty 1"/>
        <h3>Dr.Vikas Sharma</h3>
        <p>Assistant Professor

Mechanical-Mechatronics Engineering</p>
      </div>
      
      <div className="faculty-member">
        <img src={fac9} alt="Faculty 1"/>
        <h3>Dr.Sandeep Singh Shekhawat</h3>
        <p>Assistant Professor

Mechanical-Mechatronics Engineering</p>
      </div>

      <div className="faculty-member">
        <img src={fac10} alt="Faculty 1"/>
        <h3>Dr.Atul Mishra</h3>
        <p>Assistant Professor

Mechanical-Mechatronics Engineering</p>
      </div>

      <div className="faculty-member">
        <img src={fac11} alt="Faculty 1"/>
        <h3>Dr.Praveen Kumar Sharma</h3>
        <p>Assistant Professor

Mechanical-Mechatronics Engineering</p>
      </div>
      
      <div className="faculty-member">
        <img src={fac12} alt="Faculty 1"/>
        <h3>Dr.Bharat Singh</h3>
        <p>Assistant Professor

Mechanical-Mechatronics Engineering</p>
      </div>
      
    </div>

    <h1>Staff Members</h1>
    <div className="line"></div>
    <div className="staff">
      <div className="staff-member">
        <img src={sta1} alt="Staff 1"/>
        <h3>Bhagwan Singh</h3>
        <p>Technical Superintendent</p>
      </div>
      {/* <!-- Repeat similar structure for other staff members --> */}

      <div className="staff-member">
        <img src={sta2} alt="Staff 1"/>
        <h3>Sandeep Kumar Saxena</h3>
        <p>Technical Superintendent</p>
      </div>

      <div className="staff-member">
        <img src={sta3} alt="Staff 1"/>
        <h3>Satyanarayan Prajapat</h3>
        <p>Technical Superintendent</p>
      </div>

      <div className="staff-member">
        <img src={sta4} alt="Staff 1"/>
        <h3>Udayveer Singh</h3>
        <p> Jr.Technical Superintendent</p>
      </div>

      <div className="staff-member">
        <img src={sta5} alt="Staff 1"/>
        <h3>Satish Yadav</h3>
        <p>Jr.Technical Superintendent</p>
      </div>

      <div className="staff-member">
        <img src={sta6} alt="Staff 1"/>
        <h3>Gajendra Kumawat</h3>
        <p>Jr.Technician</p>
      </div>

     
    </div>
    </div>
      
    </div>
  )
}

export default Faculty
