import React from 'react'
import './Page1.css'
import res1 from'../../assets/1new.jpg'
const Page1 = () => {
  return (
    <div>
    <div class="container1">
    <img className='fotu' src={res1} alt="Description Image"/>
    <div class="description1">
      <h2><u>Modelling of the effects of welding conditions on dilution of stainless steel claddings produced by gas metal arc welding procedures</u></h2>
      <p>  
<h3>Description :</h3> 


<ul>
  <li>This paper highlights an experimental study carried out to analyse the effects of various gas metal arc welding (GMAW) and universal gas metal arc welding (UGMAW) process parameters on dilution in single layer stainless steel cladding of low carbon structural steel plates.</li>
  <li>Four factors five levels central composite rotatable design was used to develop relationship for predicting dilution, which enables to quantify the direct and interactive effects of four numeric factors i.e. wire feed rate, open circuit voltage, welding speed and nozzle-to-plate distance and one categorical factor preheat current.</li>
  <li>This comparative study reveals that dilution obtained in UGMAW process is significantly lower than that with GMAW process due to external preheating of the filler wire in UGMAW process which results in greater contribution of arc energy by resistive heating and as a consequence, significant drop in the main welding current values in case of UGMAW process is observed.</li>
  <li>
   Mathematical models developed show that dilution increases with increase in wire feed rate, open circuit voltage and welding speed, whereas it decreases with increase in nozzle-to-plate distance and preheat current.</li>
  <li>Furthermore the optimization capabilities in design-expert software were used to numerically optimize the input parameters and the optimal solutions generated indicate that for same levels of dilution, higher deposition rates were achieved in UGMAW process thus establishing that UGMAW process can prove to be a good choice for low cost surfacing applications.</li>
  
</ul>


 </p>

<br />
<p>Link to full research paper: <a target="_blank" href="https://sci-hub.se/10.1016/j.jmatprotec.2007.05.060" style={{color:'#0716df'}}>https://sci-hub.se/10.1016/j.jmatprotec.2007.05.060</a></p>


    </div>
  </div>
      
    </div>
  )
}

export default Page1
