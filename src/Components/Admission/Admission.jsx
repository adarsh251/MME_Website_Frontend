import React from 'react'
import './Admission.css'
import asme from '../../assets/asme.png'
import sae from '../../assets/sae.jpg'
const Admission = () => {
  return (
    <div className='admission-container'>
      <h1 className="admission-title">Under Graduate</h1>
      <div className="admission-line"></div>

      <div className="admission-modes-section">
        <h3 className="admission-subtitle" style={{ fontSize: '24px' }}>Modes Of Admission</h3>
         
        <a className="admission-link" target="_blank" href="https://lnmiit.ac.in/admissions/ug/regular-mode/">Regular Mode</a>
        <p className="admission-text">For Indian Nationals through JEE (Main) Exam</p>

        <a className="admission-link" target="_blank" href="https://lnmiit.ac.in/admissions/ug/dasa-mode/">DASA Mode</a>
        <p className="admission-text">Direct Admissions of Student Abroad (For FN/OCI/CIWG)</p>

        <a className="admission-link" target="_blank" href="https://lnmiit.ac.in/admissions/ug/board-toppers/">Board Toppers</a>
        <p className="admission-text">Direct Admission for board toppers</p>

        <a className="admission-link" target="_blank" href="https://lnmiit.ac.in/admissions/ug/lateral-entry/">Lateral Entry</a>
        <p className="admission-text">Admission in 2nd and 3rd semester</p>
      </div>

<br />



<p className="admission-description">The Department of Mechanical-Mechatronics Engineering was established in 2013. The Department is ably supported by a team of faculty members having degrees from reputed institutes and excellent research credentials.</p>
      <br />
      <h3 className="admission-program-title">The Department currently offers the following Undergraduate Programmes:</h3>
      
      <ul className="admission-program-list">
        <div className="admission-list-container">
          <li>B. Tech. in Mechanical Engineering</li>
          <li>B. Tech. (Honours) in Mechanical Engineering with specialization in Robotics and Automation</li>
          <li>Minor in Robotics and Automation for B.Tech (ECE/CSE and CCE)</li>
        </div>
      </ul>

      <br />
      


      <h2 className="admission-section-title">Curriculum:</h2>

      <div className="admission-curriculum-links">
        <a className="admission-curriculum-link" target="_blank" href="https://lnmiit.ac.in/uploaded_files/Y23_BTech_ME.pdf" download="">
          B.Tech. in Mechanical Engineering (2023 onwards)
        </a>

        <a className="admission-curriculum-link" target="_blank" href="https://lnmiit.ac.in/uploaded_files/Y23_BTech_ME.pdf" download="">
          B.Tech. in Mechanical Engineering (2027-2022)
        </a>
      </div>
       
        
       <br /> 
       <p className="admission-curriculum-text">The strength of each of its programmes lies in its progressive curriculum that offers flexibility to students to carefully select a set of program/other electives to earn specialized knowledge in areas of their choice. We emphasize on hands-on based learning to bridge the gap between academia and industry. Projects are encouraged to deal with real-world problems using emerging technologies. To enhance student learning, the Department regularly organizes workshops and lectures by experts from renowned institutions and organizations.</p>
      
       <br />
      
       <h1 className="admission-title">Ph.D Programme</h1>
      <div className="admission-line"></div>

      <h2 className="admission-credit-title">Credit Requirement</h2>

      <table className="admission-table">
        <tbody>
        <tr className="admission-table-header">
            <td><h2>Programme</h2></td>
            <td><h2>Minimum Total Credits</h2></td>
            <td><h2>Credits through Courses</h2></td>
            <td><h2>Credits through Research</h2></td>
            <td><h2>Expected Duration</h2></td>
            <td><h2>Maximum Duration</h2></td>
          </tr>
        <tr>
            <td>  Ph.D students with B. Tech.</td>
            <td>108	</td>
            <td>24-30 (1st Year) + 12-16 (2nd Year) To be decided by the DRC</td>
            <td>72</td>
            <td>8 Sem</td>
            <td>7 Years</td>

        </tr>
        <tr>
            <td>Ph.D students with M. Tech.</td>
            <td>84</td>
            <td>12-16</td>
            <td>72</td>
            <td>5 Sem</td>
            <td>6 Years</td>

        </tr>
        </tbody>
      </table>
       
       
      
        
      <h2 className="admission-research-title">Broad Areas for Research</h2>

      <ul className="admission-research-list">
        <div className="admission-research-container"> <li>Welding Consumables</li>
        <p>
(Welding consumables research focuses on developing materials used in welding processes, including electrodes, filler metals, fluxes, and gases. This area aims to enhance efficiency, durability, and performance in various welding applications.) </p>
<br />
        <li>Welding Fluxes</li>
        <p>
(Welding fluxes research delves into optimizing compositions and properties of flux materials used in welding processes. It aims to improve weld quality, control spatter, and minimize defects for enhanced performance and efficiency.)</p>
<br/>
        <li>Filler Wires in Welding</li>
        <p>
(Research in welding filler wires explores the development of materials used to join metals during welding. It focuses on optimizing composition, diameter, and surface characteristics to ensure strong, reliable welds in various applications, enhancing efficiency and performance.)</p>
<br/>
        <li>Developing new welding processes</li>
        <p>
(Innovative research in welding processes focuses on creating novel techniques to join materials effectively. This entails exploring advanced methodologies, such as friction stir welding or laser welding, to improve efficiency, precision, and adaptability across diverse industrial applications.)</p>
<br/>
        <li>Mettalurgical Investigations</li>
        <p>
(Metallurgical investigations involve analyzing the microstructure, properties, and performance of metals. Research in this area aims to understand material behavior under different conditions, enabling the development of optimized alloys, heat treatments, and processing techniques for enhanced mechanical, thermal, and corrosion resistance properties.)</p>
<br/>
        <li>Welding of Dissimilar Materials</li>
        <p>
(Welding of dissimilar materials research explores techniques to join different metals, alloys, or composites. It aims to overcome challenges such as varying melting points and thermal expansion coefficients, ensuring strong, durable bonds for applications ranging from automotive to aerospace, advancing innovation in multi-material designs.)</p>
<br/>


<li>Wet Underwater Welding</li>
 <p>
(Wet underwater welding involves welding directly in water, using specialized electrodes and techniques. Skilled welders navigate challenges such as visibility and buoyancy, ensuring structural integrity and safety in submerged environments.)</p>
<br/>

        </div>
       </ul>      


       <h1 className="admission-title">Student Chapters</h1>
      <div className="admission-line"></div>
      
      <h2 className="admission-chapter-title">ASME</h2>
      <img className="admission-chapter-image" src={asme} alt="asme" />
      <p className="admission-chapter-text">The American Society of Mechanical Engineers (ASME) is a global professional organization that, according to its mission, "advances the art, science, and practice of engineering and allied disciplines" through "ongoing education, training, professional development, standards, research, conferences, publications, government relations, and other outreach efforts." ASME serves as an engineering society, standards body, research and development entity, advocacy group, education provider, and non-profit organization. Originally focused on mechanical engineering in North America, ASME has since become multidisciplinary and global in scope</p>
      <p className="admission-chapter-text">The ASME student chapter at LNMIIT is a student-driven community, designed by and for students. Its main goal is to prepare students with the skills and knowledge necessary to navigate the competitive challenges of the industrial and corporate sectors. ASME, LNMIIT supports this diverse technical community through high-quality programs in continuing education, standards, conferences, publications, and research.</p>
      <h2 className="admission-chapter-title">SAE</h2>
      <img className="admission-chapter-image" src={sae} alt="sae" />
      <p className="admission-chapter-text">The Society of Automotive Engineers (SAE) chapter at LNMIIT Jaipur, established in October 2015, was founded through the collaborative efforts of a group of students eager to complement the theoretical knowledge learned in classrooms with practical engineering experience. Their vision of cultivating an automotive culture transformed the institute, with SAE LNMIIT Jaipur starting with over 50 student members and 6 faculty members. One of the chapter’s key strengths is its diversity, with students from nearly every department of the institute.</p>
      <p className="admission-chapter-text">We firmly believe that any passionate student at the institute can become an active member of this chapter. It offers a platform for students to expand their engineering knowledge through enhanced interaction at all levels, facilitated by group activities, lectures, workshops, brainstorming sessions, and various institute-wide competitions. We envision SAE LNMIIT Jaipur as a strong unifying force connecting the industry, the institute, and most importantly, the students.</p>
    </div>
  )
}

export default Admission
