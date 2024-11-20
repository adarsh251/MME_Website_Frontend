import React from 'react'
import './Facility1.css'
import fl2 from '../../assets/fl2.jpg'

const Facility2 = () => {
  return (
    <div className='facilityouter'>
    <div className="container123">
    <div className="fotu123"><img src={fl2} alt="Description Image" /></div>
    <div className="description123">
      <h2>SAW</h2>
      <p>SAW stands for Submerged Arc Welding. It is a high-productivity welding process that utilizes a continuous wire electrode and a granular flux that is fed automatically onto the welding area.
Here's an overview of the SAW process:
	Equipment: The primary equipment for SAW includes a welding power source, a wire feeder, a welding head or torch, a flux hopper, and a flux recovery system. The power source provides the electric current needed for welding, while the wire feeder continuously feeds the electrode wire into the weld zone. The welding head contains the electrode wire, and the flux hopper stores the granular flux, which is fed onto the weld area. The flux recovery system collects the unused flux for recycling.
	Operation: In SAW, the welding head is positioned over the joint to be welded. The flux is deposited around the welding area, completely covering the arc and the molten weld pool. The electrode wire is then continuously fed into the arc, where it melts and fuses with the base metal, forming the weld bead. The granular flux melts, providing a protective gas shield and slag cover, which prevents atmospheric contamination and helps shape the weld bead.
	Shielding and Flux: The submerged arc welding process is called "submerged" because the arc and the molten weld pool are completely covered by a layer of granular flux. This provides excellent protection against atmospheric contamination, allowing for high-quality welds to be produced consistently. The flux also helps control the weld bead profile and acts as a deoxidizer, removing impurities from the weld metal.
	Applications: SAW is commonly used in heavy fabrication industries such as shipbuilding, offshore structures, pressure vessel manufacturing, and structural steel construction. It is well-suited for welding thick sections of steel in the flat and horizontal positions, although it can also be used in vertical and overhead welding applications with proper equipment and techniques.
	Advantages: SAW offers several advantages, including high deposition rates, excellent weld quality and mechanical properties, minimal spatter, and good weld penetration. It is also a highly efficient process, making it suitable for high-volume production environments.
</p>
    </div>
  </div>
      
    </div>
  )
};

export default Facility2