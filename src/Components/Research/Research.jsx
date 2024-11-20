import React from 'react'
import './Research.css'
import { Link } from 'react-router-dom'
import res1 from'../../assets/1new.jpg'
import res2 from'../../assets/2new.jpg'
import res3 from'../../assets/3new.jpg'
import res4 from'../../assets/4new.jpg'
import res5 from'../../assets/5new.png'
import Title from '../Title/Title'




const Research = () => {

  return (
    <div className="outerres">
     <Title subTitle='Research' title='Explore. Discover. Innovate.'/>
     <br />
     <br />
    <div className="container21">
    <div className="card21">
      <div className="image21">
        <img src={res1} alt="Image 1"/>
      </div>
      <div className="description21">
        <h3>Modelling of the effects of welding conditions on dilution of stainless steel claddings produced by gas metal arc welding procedures:</h3>
        
        <Link to="/page1">
        <button>See More</button>
        </Link>
      </div>
    </div>
    </div>

    <div className="container21">
    <div className="card21">
      <div className="image21">
        <img src={res2} alt="Image 1"/>
      </div>
      <div className="description21">
      <h3>Experimental analysis of dissimilar metal weld joint: Ferritic to austenitic stainless steel</h3>
        <Link to="/page2">
        <button>See More</button>
        </Link>
      </div>
    </div>
    </div>

    <div className="container21">
    <div className="card21">
      <div className="image21">
        <img src={res3} alt="Image 1"/>
      </div>
      <div className="description21">
      <h3>Effect of process parameters on friction stir welding of aluminum alloy 2219-T87</h3>
        <Link to="/page3">
        <button>See More</button>
        </Link>
      </div>
    </div>
    </div>

    <div className="container21">
    <div className="card21">
      <div className="image21">
        <img style={{ width: '370px', height: '200px' }}src={res4} alt="Image 1"/>
      </div>
      <div className="description21">
      <h3>Experimental investigation and optimization of weld bead characteristics during submerged arc welding of AISI 1023 steel.
</h3>
        <Link to="/page4">
        <button>See More</button>
        </Link>
      </div>
    </div>
    </div>

    <div className="container21">
    <div className="card21">
      <div className="image21">
        <img src={res5} alt="Image 1"/>
      </div>
      <div className="description21">
      <h3>A robust Taguchi combined AHP approach for optimizing AISI 1023 low carbon steel weldments in the SAW process
</h3>
        <Link to="/page5">
        <button>See More</button>
        </Link>
      </div>
    </div>
    </div>

    <br />
    <br />
   


        

    </div>

     
    
  )
}

export default Research
