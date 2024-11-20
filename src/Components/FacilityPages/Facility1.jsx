import React from 'react'
import './Facility1.css'
import fl1 from '../../assets/fl1.jpg'

const Facility1 = () => {
  return (
    
          <div className="facilityouter">
    <div className="container123">
  
    <div className="fotu123"><img src={fl1} alt="Description Image" /></div>
    <div className="description123">
      <h2>SMAW</h2>
      <p>SMAW stands for Shielded Metal Arc Welding,  one of the most widely used and versatile welding processes. In SMAW, an electric arc is established between a flux-coated electrode and the workpiece, creating the heat necessary to melt the base metal and the filler material. The flux coating on the electrode not only acts as a conductor for the electric current but also provides a shielding gas to protect the weld pool from atmospheric contamination.
Here's a breakdown of the SMAW process:
	Equipment: The primary equipment for SMAW includes a welding power source, electrode holder , welding cables, and electrodes. The power source generates the electric current necessary for welding.
	Electrodes: SMAW electrodes consist of a metal core wire that is coated with a flux material. The flux coating serves several purposes, including stabilizing the arc, providing a shielding gas, and adding alloying elements to the weld pool to improve its properties.
	Operation: To perform SMAW, the electrode is clamped into the electrode holder, and the arc is struck between the electrode and the workpiece by briefly touching the electrode to the metal and then pulling it away. This creates a stable arc, which generates the heat needed for welding.
	Shielding: As the electrode melts, the flux coating vaporizes, creating a gaseous shield around the weld pool. This shield protects the molten metal from atmospheric contamination, such as oxygen and nitrogen, which can cause defects in the weld.
	Welding Positions: SMAW can be performed in various welding positions, including flat, horizontal, vertical, overhead, and even in confined spaces.
	Applications: SMAW is widely used in construction, fabrication, maintenance, and repair work. It can be used to weld a variety of metals, including carbon steel, stainless steel, cast iron, and non-ferrous metals.</p>
    </div>
  </div>
  </div>
   
   
  )
};

export default Facility1;
