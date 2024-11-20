import React from 'react'
import './Page4.css'
import res4 from'../../assets/4new.jpg'
const Page4 = () => {
  return (
    <div>
    <div class="container1">
    <img className="fotu" src={res4} alt="Description Image"/>
    <div class="description1">
      <h2><u>Experimental investigation and optimization of weld bead characteristics during submerged arc welding of AISI 1023 steel</u>
</h2>
      <p><h3>Description:</h3>Submerged arc welding (SAW), owing to its high deposition rate and high welding quality, is widely used in the fabrication of pressure vessel, marine vessel, pipelines and offshore structures. However, selection of an optimum combination of welding parameters is critical in achieving high weld quality and productivity. In this work, initially, the SAW experiments were performed using fractional factorial design to analyze the effect of direct and indirect input parameters, namely, welding voltage, wire feed rate, welding speed, nozzle to plate distance, flux condition, and plate thickness on weld bead geometrical responses viz. bead width, reinforcement, and penetration. The bead on plate technique was used to deposit weld metal on AISI 1023 steel plates. The effect of SAW input parameters on response variables were analyzed using main and interaction effects. The linear regression was used to develop the mathematical models for the response variable. Then, the multi-objective optimization of input parameters was carried out using desirability approach, genetic algorithm and Jaya algorithm. The Jaya algorithm offered better optimization results as compared to desirability approach, genetic algorithm.
</p>
<br />
<p>Link to full research paper: <a target="_blank" style={{color:'#0716df'}} href="https://sci-hub.se/10.1016/j.dt.2018.08.004
">https://sci-hub.se/10.1016/j.dt.2018.08.004
</a></p>

    </div>
  </div>
      
    </div>
  )
}

export default Page4
