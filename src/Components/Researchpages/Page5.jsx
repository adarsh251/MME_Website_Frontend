import React from 'react'
import './Page5.css'
import res5 from'../../assets/5new.png'
const Page5 = () => {
  return (
    <div>
    <div class="container1">
    <img style={{ width: '370px', height: '250px' }} className="fotu" src={res5} alt="Description Image"/>
    <div class="description1">
      <h2><u>A robust Taguchi combined AHP approach for optimizing AISI 1023 low carbon steel weldments in the SAW process</u>
</h2>
      <p><h3>Description:</h3>In this work, the researcher used a robust Taguchi design coupled with the analytic hierarchy process (AHP) approach; the purpose is to obtain optimum welding conditions which can receive effective bead geometry for AISI 1023 low carbon steel weldments in the submerged arc welding (SAW) process. Input process parameters were chosen for welding condition voltage, welding speed, wire feed rate and nozzle to plate distance and experimentally planed with the help of Taguchi’s L16 array for investigation. Responses were chosen bead width, reinforcement, penetration, angle of entry, and angle of convexity. Very few researchers have selected the response parameters such as angle of entry and angle of convexity for bead geometry study to obtain optimum welding conditions using the Taguchi based AHP approach. Optimum welding condition was found as Voltage 44 V, welding speed (WS) 4 mm/s, Wire feed rate(WFR) 28 mm/s and nozzle to plate distance(NPD) 21 mm. Voltage was observed to be the most influenced parameter for penetration, and welding speed was observed to be the most affected parameter for the rest of the responses.</p>
      <br />
<p>Link to full research paper: <a target="_blank"style={{color:'#0716df'}} href="https://link.springer.com/article/10.1007/s12008-023-01307-7
">https://link.springer.com/article/10.1007/s12008-023-01307-7
</a></p>


    </div>
  </div>
      
    </div>
  )
}

export default Page5
