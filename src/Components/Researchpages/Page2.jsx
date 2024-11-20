import React from 'react'
import './Page2.css'
import res2 from'../../assets/2new.jpg'
const Page2 = () => {
  return (
    <div>
    <div class="container1">
    <img className="fotu" src={res2} alt="Description Image"/>
    <div class="description1">
      <h2><u>Experimental analysis of dissimilar metal weld joint: Ferritic to austenitic stainless steel</u></h2>

      <p> <h3>Description:</h3>The dissimilar metal weld (DMW) joint between SA508Gr.3Cl.1 ferritic steel and SS304LN using Inconel 82/182 consumables was required in the nuclear power plants. The joint integrity assessment of these welds requires mechanical and metallurgical properties evaluation in weldment regions. The joint was subjected to 100% radiography test and bend test and transverse tensile test. Welding and testing were carried out as per the requirements of ASME Sec-IX and acceptance criteria as per ASME Sec-III. The transverse tensile test results indicated the failure from the weld metal although it satisfies the minimum strength requirement of the ASME requirements; therefore, the DMW joint was analyzed in detail. Straight bead deposition technique, fine slag inclusion, less reliable radiograph technique, plastic instability stress, yield strength ratio and metallurgical deteriorations have been contributed to failure of the DMW joint from the weld region. In the present work, the factors contributing to the fracture from weld metal have been discussed and analyzed.
</p>

<br />
<p>Link to full research paper: <a target="_blank" style={{color:'#0716df'}} href="https://sci-hub.se/10.1016/j.msea.2015.05.011
">https://sci-hub.se/10.1016/j.msea.2015.05.011
</a></p>

    </div>
  </div>
      
    </div>
  )
}

export default Page2
