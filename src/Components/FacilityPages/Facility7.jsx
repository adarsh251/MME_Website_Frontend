import React from 'react'
import './Facility1.css'
import fl7 from '../../assets/fl7.png'

const Facility7 = () => {
  return (
    <div className='facilityouter'>
    <div className="container123">
    <div className="fotu123"><img src={fl7} alt="Description Image" /></div>
    <div className="description123">
      <h2>Plasma Cutting</h2>
      <p> 
Plasma cutting is a thermal cutting process that uses a high-velocity jet of ionized gas, known as plasma, to melt and sever through electrically conductive materials. 
Here's an overview of the plasma cutting process:
	Equipment: The primary equipment for plasma cutting includes a plasma cutting power source, a plasma torch, and a gas supply system. The power source generates the electrical arc that ionizes the gas to create plasma. The plasma torch directs the plasma jet onto the workpiece, and the gas supply system provides the plasma gas and, if needed, additional shielding gas.
	Plasma Generation: In plasma cutting, the plasma is created by passing an electric arc through a gas, typically compressed air, nitrogen, or oxygen. The gas is forced through a narrow nozzle at high speed, where it becomes ionized and forms a plasma arc. The intense heat of the plasma arc melts the material being cut, while the high-velocity plasma jet blows away the molten metal, creating a clean and precise cut.
	Cutting Process: To perform plasma cutting, the plasma torch is positioned over the workpiece, and the cutting arc is initiated by pressing a trigger or activating a control switch. The plasma jet is directed onto the material, penetrating through the surface and creating a kerf or cut groove. The speed of the cutting process and the thickness of the material being cut determine the depth and quality of the cut.
	Gas Selection: The choice of plasma gas depends on the material being cut and the desired cutting characteristics. Compressed air is commonly used for cutting mild steel and stainless steel, while nitrogen is preferred for cutting aluminum and other non-ferrous metals. Oxygen is sometimes used as a secondary gas for cutting thicker materials or improving cutting speed.
	Applications: Plasma cutting is used in various industries for cutting a wide range of electrically conductive materials, including steel, stainless steel, aluminum, copper, and brass. It is commonly used in metal fabrication shops, automotive manufacturing, shipbuilding, construction, and industrial maintenance and repair.
	Advantages: Plasma cutting offers several advantages over other cutting processes, including high cutting speeds, excellent cutting precision, minimal heat-affected zone, and the ability to cut a wide range of materials and thicknesses. It is also relatively portable and can be used for both manual and automated cutting applications.
	Limitations: While plasma cutting is versatile and efficient, it may not be suitable for cutting materials thicker than a certain limit, depending on the power of the plasma cutting system. Additionally, plasma cutting can produce a narrow heat-affected zone, which may affect the metallurgical properties of the cut edges in some applications.
.</p>
    </div>
  </div>
      
    </div>
  )
};

export default Facility7;