import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Booking.css';

const LabBookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    lab: '',
    date: '',
    startTime: '',
    endTime: '',
    selectedFaculty: [],
    equipment: []
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const labsData = {
    "Automotive Engineering Lab": ["Dr. Vikas Sharma", "Mr. Gajendra Kumawat"],
    "CAD - CAM Lab": ["Dr. Servesh kumar Agnihotri", "Mr. Satyanarayan Prajapat"],
    "Computer Integrated Manufacturing(CIM) Lab": ["Dr. Deepak Rajendra Unune", "Mr. Satish Yadav"],
    "Fluid Mechanics & Machinery(Hydraulics) Lab": ["Dr. Kamal Kishore Khatri", "Mr. Sandeep Saxena"],
    "Heat Transfer Lab": ["Dr. Praveen Kumar Sharma", "Mr. Sandeep Saxena"],
    "Internal Combustion Engine Lab": ["Prof. Kamal Kishore Khatri", "Mr. Sandeep Saxena"],
    "Kinematics & Dynamics Lab": ["Dr. Servesh Kumar Agnihotri", "Mr. Satyanarayan Prajapat"],
    "Material Characterization (Strength of Materials) Lab": ["Dr. Ashok Kumar Dargar", "Mr. Satyanarayan Prajapat"],
    "Mechatronics Lab": ["Dr. Mohit Makkar", "Mr. Udayveer Singh"],
    "Metrology, Instrumentation and Control (METIC) Lab": ["Prof. Vikram Sharma", "Mr. Udayveer Singh", "Mr. Bhagwan Singh"],
    "Robotics & Industrial Automation Lab": ["Dr. Atul Mishra", "Mr. Gajendra Kumawat"],
    "Thermodynamics Lab": ["Dr. Praveen Kumar Sharma", "Mr. Sandeep Saxena"],
    "Welding and Foundry Lab (Mechanical Workshop)": ["Prof. Sunil Pandey", "Dr. Manoj Kumar", "Mr. Satish Yadav", "Mr. Bhagwan Singh"]
};
  const equipmentsData = {
    "Automotive Engineering Lab": [
      "Flex ECU Application Software (Rate: INR 200/hr)",
      "Internal Combustion Engine Application (Rate: INR 200/hr)",
      "Flex ECU Based on the Gasoline ECU (Rate: INR 200/hr)",
      "Raspberry Pi-3 Model B/Arduino (Rate: INR 200/hr)",
      "ABS Simulator (Rate: INR 200/hr)",
      "ECU Simulator (Rate: INR 200/hr)",
      "Electronic Throttle Control with Accelerator Pedal Rig (Rate: INR 200/hr)",
      "Electric Van (Rate: INR 200/hr)",
      "2 DOF Vehicle Driving Simulator (Rate: INR 200/hr)",
      "Diffused Light Polariscope (Rate: INR 200/hr)",
      "Model of Steering System (Rate: INR 200/hr)",
      "Model of Passenger Car Electrical Wiring System (Rate: INR 200/hr)",
      "Cut Section Model of Disc Brake System (Rate: INR 200/hr)",
      "Cut Section Model of Drum Brake Unit (Rate: INR 200/hr)",
      "Cut Section Model of Power Windows with One Door (Rate: INR 300/hr)",
      "Demonstration Board of Electronic Ignition System of 4 Wheeler Automobile (Rate: INR 300/hr)",
      "Cut Section Model of Complete Both Side MacPherson Suspension Strut with Drive Shaft (Rate: INR 400/hr)",
      "Demonstration Board of Fuel Supply System of Diesel Engine (Working) (Rate: INR 400/hr)",
      "Subsonic Wind Tunnel (Rate: INR 800/hr)",
      "Multi-Tube Manometer (Rate: INR 200/hr)",
      "Cut Section Model of Complete Both Side Double Wishbone Suspension Strut with Drive Shaft (Rate: INR 400/hr)"
    ]
    ,  

    "CAD - CAM Lab": [
      "VI Rail Education License: ₹200",
      "SolidWorks Education Edition Network (2012-13): ₹100",
      "ANSYS Academic Research (Mechanical & CFD): ₹500",
      "AVL BOOST: ₹300",
      "AVL CRUISE: ₹300",
      "MATLAB (MathWorks): ₹300",
      "AutoCAD Education Version (2018): ₹100",
      "IPG CarMaker: ₹300",
      "TRNSYS: ₹200",
      "ETAS: ₹300",
      "VECTOR: ₹200",
      "ADAMS: ₹500"
  ],

    "Computer Integrated Manufacturing(CIM) Lab": [
      "3D Printer (Dual Extruder): ₹500",
      "3D Printer (Single Extruder): ₹300",
      "Vertical Machining Center (VMC): ₹1,500",
      "Electrical Discharge Machine (EDM): ₹1,000",
      "Micro Fog Oil Mist Lubrication System: ₹500"
  ],

    "Fluid Mechanics & Machinery(Hydraulics) Lab": [
      "Metacentric Height Apparatus: ₹100",
      "Bernoulli’s Theorem Apparatus: ₹150",
      "Flow Measuring Apparatus: ₹150",
      "Pipe Friction Loss Apparatus: ₹150",
      "Orifice Meter Apparatus: ₹100",
      "Centrifugal Pump Test Rig: ₹300",
      "Francis Turbine Test Rig: ₹300",
      "Kaplan Turbine Test Rig: ₹300",
      "Pelton Wheel Turbine Test Rig: ₹300",
      "Anemometer: ₹50",
      "Micro Processor-Based Turbidity & Temperature Meter: ₹200"
  ],

    "Heat Transfer Lab": [
      "Heat Transfer in Natural Convection Apparatus: ₹200",
      "Heat Transfer in Forced Convection Apparatus: ₹300",
      "Parallel Flow/Counter Flow Heat Exchanger: ₹300",
      "Stefan Boltzmann’s Apparatus: ₹200",
      "Emissivity Measurement Apparatus: ₹200",
      "Thermal Conductivity of Metal Rod Apparatus: ₹200",
      "Thermal Conductivity of Liquids Apparatus: ₹200",
      "Heat Pipe Demonstrator: ₹300",
      "Condensation in Drop Wise/Film Wise Apparatus: ₹300",
      "Test Rig to Check CHF (Critical Heat Flux): ₹400",
      "Two-Phase Heat Transfer Apparatus (Boiling Heat Transfer Unit): ₹500",
      "Data Acquisition System (16 Channel): ₹300",
      "Flow Metering System: ₹200",
      "Refrigeration Test Rig (Charged with Nano-Refrigerant): ₹500",
      "Test Rig on Boiling Heat Transfer: ₹500",
      "Jet Impingement Cooling Test Rig: ₹400",
      "Refrigerated/Heating Circulator: ₹300",
      "Ultrasonic Liquid Processor: ₹400",
      "Micro Pump: ₹100"
  ],

    "Internal Combustion Engine Lab": [
      "VCR Diesel Engine Test Rig: ₹500",
      "Double Stage Air Compressor Test Rig: ₹400",
      "Mini Oil Expeller: ₹200",
      "Cut Section Single Cylinder 4 Stroke Diesel Engine: ₹150",
      "Multi Cylinder 4 Stroke Petrol Engine: ₹300",
      "Single Cylinder Diesel Engine: ₹200",
      "Automatic Bomb Calorimeter with Built-in Printer: ₹400",
      "Electronic Balance, Capacity 220 gm: ₹50",
      "5 Gas Analyzer: ₹500",
      "Smoke Meter: ₹300",
      "Data Acquisition Switch Unit: ₹200",
      "Diesel Injector Tester: ₹200",
      "Portable Hand Held Biogas Analyzer: ₹200"
  ],

    "Kinematics & Dynamics Lab": [
      "Cam Analysis Apparatus (Rate: INR 200/hr)",
      "Moment of Inertia of Flywheel Apparatus (Wheel 20 cm diameter) (Rate: INR 200/hr)",
      "Static and Dynamic Balancing Apparatus (Rate: INR 200/hr)",
      "Motorised Gyroscope Apparatus (Rate: INR 300/hr)",
      "Slip and Creep measurement Apparatus (Rate: INR 200/hr)",
      "Universal Vibration Apparatus (Rate: INR 300/hr)",
      "Model Board for Generation of Gear Tooth Profile (Rate: INR 100/hr)",
      "Crank and Connecting Rod Model (Rate: INR 100/hr)",
      "Model of Crank & Slotted Lever Mechanism (Rate: INR 100/hr)",
      "Model of Four Bar Link Mechanism (Rate: INR 100/hr)",
      "Ellipse Tracer Model Model of Four Bar Link Mechanism (Rate: INR 200/hr)",
      "Model of Oscillating Cylinder Mechanism (Rate: INR 100/hr)",
      "Model of pantograph mechanism (Rate: INR 200/hr)",
      "Model of Pawl and Ratchet Motion (Rate: INR 100/hr)",
      "Model of Peucellier Mechanism (Rate: INR 100/hr)",
      "Model of Reciprocating Engine Mechanism (Rate: INR 100/hr)",
      "Model of scotch yoke mechanism (Rate: INR 200/hr)",
      "Model of watts mechanism (Rate: INR 200/hr)",
      "Model of Whitworth quick return mechanism (Rate: INR 100/hr)",
      "Digital Stroboscope (Rate: INR 300/hr)",
      "Model of Single Stage Spur Gears with Intermediate Gear (Rate: INR 200/hr)",
      "Model of Three Stage Spur Gears (Rate: INR 200/hr)",
      "Model of Double Stage Helical Gear (Herringbone Gear BIG) (Rate: INR 200/hr)",
      "Digital Tachometer (Rate: INR 200/hr)",
      "Gears (Rack and quadrant gear, Two stage spur gear, Bevel gear, Helical gear, Spiral gear, Spur gear, Worm gear, Epicycle gear(sun and planet type) (Demonstrative Models) (Rate: INR 100/hr)",
      "Air lift pump (Rate: INR 200/hr)",
      "Centrifugal pump (Rate: INR 200/hr)",
      "Gear pump (Rate: INR 200/hr)",
      "Reciprocating pump cut section (Rate: INR 200/hr)",
      "Clutch (Claw clutch, Conical friction clutch, Plate clutch, Centrifugal clutch) (Rate: INR 100/hr)",
      "Belt drive single speed (Rate: INR 200/hr)",
      "Model of belts pulley set4 (Rate: INR 200/hr)",
      "V-belt pulley (Rate: INR 200/hr)",
      "Belt drive two speed (Rate: INR 200/hr)",
      "Ball bearing set (Rate: INR 200/hr)",
      "Wall bracket (Rate: INR 200/hr)",
      "Racer stop watch (Rate: INR 200/hr)",
      "Inversion of four bar link mechanism (Rate: INR 200/hr)",
      "Feed check valve (Rate: INR 200/hr)",
      "Gib and cotter joint (Rate: INR 200/hr)",
      "Sleeve and cotter Joint (Rate: INR 200/hr)",
      "Hook coupling (Rate: INR 200/hr)",
      "Knuckle joint (Rate: INR 200/hr)",
      "Oldham coupling (Rate: INR 200/hr)",
      "Flanged coupling (Rate: INR 200/hr)",
      "Flexible coupling (Rate: INR 200/hr)",
      "Box and muff coupling (Rate: INR 200/hr)",
      "Differential gear (Rate: INR 200/hr)",
      "Slotted link mechanism (Rate: INR 200/hr)",
      "Ackerman steering mechanism (Rate: INR 200/hr)"
    ],

    "Material Characterization (Strength of Materials) Lab": [
    "Computerized Universal Testing Machine (Spec. 60T): ₹1,000",
    "Brinell Hardness Tester: ₹300",
    "Rockwell Hardness Tester: ₹300",
    "Digital Impact Testing Machine for Charpy & Izod Test (Toughness Test): ₹500",
    "Pin-On-Disc Wear Testing Machine: ₹500",
    "ERICHSEN Cupping Tester Model EC: ₹300",
    "Torsional Testing Machine: ₹500",
    "Digital Fatigue Testing Machine: ₹800"
],

    "Mechatronics Lab": [
      "Compact RIO Standard 8-Slot Chassis System Service (Rate: INR 500/hr)",
      "Autonomous Robotics System Design Platform (Rate: INR 400/hr)",
      "Embedded Control Platform (Rate: INR 300/hr)",
      "Mechatronics System Design Platform (Rate: INR 400/hr)",
      "Cathode Ray Oscilloscope (CRO) (Rate: INR 200/hr)",
      "Easyport Training Kit (Rate: INR 200/hr)",
      "Modular Production System – Distributing Station (Rate: INR 500/hr)",
      "LME EV3 Core Set (LEGO) (Rate: INR 200/hr)",
      "TETRIX Education Base Set (Rate: INR 300/hr)",
      "LME EV3 Expansion Set (Rate: INR 200/hr)",
      "TETRIX Resource Set (Rate: INR 200/hr)",
      "Multipurpose PC-Based Process Control System (SCADA Software) (Rate: INR 500/hr)",
      "IMAX B6 5A Multipurpose Battery Charger (Rate: INR 100/hr)",
      "Digital Storage Oscilloscope (DSO) (Rate: INR 300/hr)",
      "DC Regulated Power Supply (Rate: INR 200/hr)",
      "LabVIEW Academic Site License (Rate: INR 500/hr)",
      "Ciros Studio (Software) (Rate: INR 300/hr)",
      "LME EV3 Software Site License V24 (Rate: INR 200/hr)",
      "Multisim Education 10 User License (Rate: INR 300/hr)",
      "Ultiboard Education 10 User License (Rate: INR 300/hr)",
      "Step 7 Programming Software, Twelve License (Software) (Rate: INR 400/hr)",
      "WinCC Single License (Software) (Rate: INR 400/hr)",
      "Mechatronics Assistant Two License (Software) (Rate: INR 200/hr)",
      "Proteus 10 User License (Rate: INR 300/hr)"
    ]
    ,

    "Metrology, Instrumentation and Control (METIC) Lab": [
      "Surface Roughness Tester: ₹100",
      "Temperature Measuring Setup: ₹50",
      "Force Measuring Setup: ₹100",
      "Torque Measuring Setup: ₹100",
      "Linear Air Track Apparatus: ₹100",
      "Dial Gauge Calibration Setup: ₹100",
      "Height Gauge: ₹50",
      "Profile Projector: ₹150",
      "Floating Carriage Micrometer: ₹150",
      "Sine Bar 200mm: ₹100",
      "3-D Coordinate Measuring Machine (CMM): ₹500",
      "Gear Tooth Vernier: ₹100",
      "Slip Gauge: Free",
      "Straight Edge: Free",
      "Ring Gauge: ₹50",
      "Filler Gauge: Free",
      "Snap Gauge: ₹50",
      "V-Block: ₹50",
      "Pitch Gauge: ₹50",
      "Go & No-Go Gauge: ₹50",
      "Surface Plate: ₹100",
      "Micro Weight Balance: ₹50",
      "Micrometer: ₹50",
      "Vernier Caliper: Free",
      "Depth Gauge: ₹50",
      "Bevel Protector: Free",
      "Dial Gauge: ₹50"
  ],

    "Robotics & Industrial Automation Lab": [
      "OMIBO - Omni Wheel Operated Robot: ₹300",
      "Air Compressor Large: ₹200",
      "MARSian - Mars Rover Prototype: ₹350",
      "JCBian - Pneumatic Back Hoe Loader: ₹200",
      "Flexo - The Robot Hand: ₹150",
      "Mobilo - Mobile Operated Robot: ₹150",
      "SMC Training Kit: ₹100",
      "SMC Local Manufacturing: ₹150",
      "Electro Hydraulic Trainer with LG PLC: ₹300",
      "AUTOSIM-200 for 8 Education License: ₹400",
      "Basic Electro-Pneumatics Training Software: ₹50",
      "Basic Pneumatics Training Software: ₹50"
  ],

    "Thermodynamics Lab": [
      "Red Wood Oil Viscometer with Digital Temperature Indicator: ₹300",
      "Vapor Absorption Refrigeration Test Rig: ₹500",
      "Pycnometer: ₹50",
      "Transys Software: ₹100",
      "Solar Power Meter: ₹200",
      "Test Rig to Study Psychometric Properties: ₹400"
  ],

    "Welding and Foundry Lab (Mechanical Workshop)": [
      "SAW (Submerge Arc Welding) with CPRA 800 (s) + SAW Tractor (CPRA-S) (Rate: INR 800/hr)",
      "MIG Welding (0700301302 con set feed 402) (Rate: INR 500/hr)",
      "Capstan Lathe (Rate: INR 400/hr)",
      "Lathe Machine (Norton Gear) (Rate: INR 300/hr)",
      "Milling Machine (Rate: INR 400/hr)",
      "Shaper Machine (Rate: INR 300/hr)",
      "Surface Grinding Machine (Rate: INR 400/hr)",
      "Semi-Automatic Polishing Machine (Rate: INR 400/hr)",
      "Hydraulic Specimen Mounting Press (Rate: INR 300/hr)",
      "Metallurgical Microscope with Software (Rate: INR 500/hr)",
      "Robotic Arm (Rate: INR 800/hr)",
      "Plasma Cutting Machine (Rate: INR 500/hr)"
    ]    
  };

  const handleInputChange = (field, value) => {
    setError('');
    setSuccess('');
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (field === 'lab') {
      setFormData(prev => ({
        ...prev,
        selectedFaculty: [],
        equipment:[]
      }));
    }
  };

  const handleFacultyToggle = (facultyName) => {
    setFormData(prev => ({
      ...prev,
      selectedFaculty: prev.selectedFaculty.includes(facultyName)
        ? prev.selectedFaculty.filter(name => name !== facultyName)
        : [...prev.selectedFaculty, facultyName]
    }));
  };

  const handleEquipmentToggle = (equipmentName) => {
    setFormData(prev => ({
      ...prev,
      equipment: prev.equipment.includes(equipmentName)
        ? prev.equipment.filter(name => name !== equipmentName)
        : [...prev.equipment, equipmentName]
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      console.log("Called req");
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/bookings`, formData);
      console.log("resp");
      console.log(response.data); // Debugging line to verify response
      setSuccess('Booking request submitted successfully!');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Reset the form fields after a successful submission
      setFormData({
        name: '',
        email: '',
        lab: '',
        date: '',
        startTime: '',
        endTime: '',
        selectedFaculty: [],
        equipment: []
      });
    } catch (err) {
      console.error(err); // Debugging line to verify error
      setError(err.response?.data?.message || 'An error occurred while submitting the booking');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    // Only run when there's a new success or error message
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess('');
        setError('');
      }, 5000);

      // Cleanup timer on unmount or re-run
      return () => clearTimeout(timer);
    }
  }, [success, error]);
  return (
    <div className="booking-card">
      <div className="card-header">
        <h2 className="card-title">Lab Booking Form</h2>
        <br />
        <h5 style={{ color: 'red' }}>Note: Raw Materials will not be provided.</h5>
      </div>
      <div className="card-content">
        {error && <div className="message error-message">{error}</div>}
        {success && <div className="message success-message">{success}</div>}

        <form onSubmit={handleSubmit} className="booking-form">
          {/* Name Input */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              className="form-input"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
            />
          </div>

          {/* Email Input */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="form-input"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
            />
          </div>

          {/* Lab Selection */}
          <div className="form-group">
            <label htmlFor="lab">Select Lab</label>
            <select
              id="lab"
              className="form-select"
              onChange={(e) => handleInputChange('lab', e.target.value)}
              value={formData.lab}
              required
            >
              <option value="">Select a lab</option>
              {Object.keys(labsData).map((lab) => (
                <option key={lab} value={lab}>
                  {lab}
                </option>
              ))}
            </select>
          </div>

          {/* Faculty Selection */}
          {formData.lab && (
            <>
            <div className="form-group">
              <label>Select Faculty & Staff</label>
              <div className="faculty-list">
                {labsData[formData.lab].map((faculty) => (
                  <div key={faculty} className="faculty-item">
                    <input
                      type="checkbox"
                      id={faculty}
                      className="faculty-checkbox"
                      checked={formData.selectedFaculty.includes(faculty)}
                      onChange={() => handleFacultyToggle(faculty)}
                    />
                    <label htmlFor={faculty} className="faculty-label">
                      {faculty}
                    </label>
                  </div>
                ))}
              </div>
              </div>
              {/* Equipment Input */}
              <div className="form-group">
                <label>Equipment Required (Per Hour Rates)</label>
                <div className="faculty-list">
                {equipmentsData[formData.lab].map((equipment) => (
                  <div key={equipment} className="faculty-item">
                    <input
                      type="checkbox"
                      id={equipment}
                      className="faculty-checkbox"
                      checked={formData.equipment.includes(equipment)}
                      onChange={() => handleEquipmentToggle(equipment)}
                      />
                    <label htmlFor={equipment} className="faculty-label">
                      {equipment}
                    </label>
                  </div>
                ))}
              </div>
              </div>
            
              </>
          )}

          
          {/* Date Input */}
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              type="date"
              className="form-input"
              value={formData.date}
              onChange={(e) => handleInputChange('date', e.target.value)}
              required
            />
          </div>
          {/* Replace time with startTime and endTime */}
          <div className="form-group">
            <label htmlFor="startTime">Start Time</label>
            <input
              id="startTime"
              type="time"
              className="form-input"
              value={formData.startTime}
              onChange={(e) => handleInputChange('startTime', e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="endTime">End Time</label>
            <input
              id="endTime"
              type="time"
              className="form-input"
              value={formData.endTime}
              onChange={(e) => handleInputChange('endTime', e.target.value)}
              required
            />
          </div>

          {/* ... rest of the form remains same ... */}

          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Booking'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LabBookingForm;