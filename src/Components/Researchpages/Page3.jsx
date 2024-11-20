import React from 'react'
import './Page3.css'
import res3 from'../../assets/3new.jpg'
const Page3 = () => {
  return (
    <div>
    <div class="container1">
    <img className="fotu" src={res3} alt="Description Image"/>
    <div class="description1">
      <h2><u>Effect of process parameters on friction stir welding of aluminum alloy 2219-T87</u></h2>
      <p><h3>Description:</h3> In this work, successful friction stir welding of aluminum alloy 2219 using an adapted milling machine is reported. The downward or forging force was found to be dependent upon shoulder diameter and rotational speed whereas longitudinal or welding force on welding speed and pin diameter. Tensile strength of welds was significantly affected by welding speed and shoulder diameter whereas welding speed strongly affected percentage elongation. Metallographic studies revealed fine equiaxed grains in weld nugget and microstructural changes in thermo-mechanically affected zone were found to be the result of combined and interactive influences of frictional heat and deformation. A maximum joining efficiency of 75% was obtained for welds with reasonably good percentage elongation. TEM studies indicated coarsening and/or dissolving of precipitates in nugget. For the gas metal arc weld, SEM investigations revealed segregation of copper at grain boundaries in partially melted zone.
</p>
<br />
<p>Link to full research paper: <a target="_blank" style={{color:'#0716df'}} href="https://sci-hub.se/10.1007/s00170-010-2560-3
">https://sci-hub.se/10.1007/s00170-010-2560-3
</a></p>

    </div>
  </div>
      
    </div>
  )
}

export default Page3
