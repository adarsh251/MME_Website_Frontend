import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { NavLink, useLocation } from 'react-router-dom';
import labsData from '../Labs/labs.json'
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [labsOpen, setLabsOpen] = useState(false); // State to manage Labs dropdown visibility
  const [mobileMenu, setMobileMenu] = useState(false);
  const [sticky, setSticky] = useState(false);
  const location = useLocation();

  // Toggle mobile menu
  const toggleMenu = () => setMobileMenu(!mobileMenu);

  // Toggle Labs dropdown menu visibility
  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);
  const openLabs = () => setLabsOpen(true);
  const closeLabs = () => setLabsOpen(false);

  // // Handle sticky navbar based on scroll
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setSticky(window.scrollY > 50);
  //   };
  //   if (location.pathname === '/') window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [location.pathname]);

  return (
    <>
      <nav className={`container dark-nav`}>
        <NavLink to="/">  
          <img src={logo} alt="Logo" className='logo' />
        </NavLink>
          
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/admission">Admission</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/career">Careers</NavLink></li>
          
          {/* Labs Dropdown */}
          <li className="labs-dropdown" onMouseEnter={openLabs} onMouseLeave={closeLabs}>
            <span>Labs</span>
            {labsOpen && (
              // <ul className="labs-dropdown-menu">
              //   <li><NavLink to="/labs/automotive-engineering">Automotive Engineering Lab</NavLink></li>
              //   <li><NavLink to="/labs/cad-cam">CAD – CAM Lab</NavLink></li>
              //   <li><NavLink to="/labs/cim">Computer Integrated Manufacturing(CIM) Lab</NavLink></li>
              //   <li><NavLink to="/labs/hydraulics">Fluid Mechanics & Machinery(Hydraulics) Lab</NavLink></li>
              //   <li><NavLink to="/labs/heat-transfer">Heat Transfer Lab</NavLink></li>
              //   <li><NavLink to="/labs/internal-combustion">Internal Combustion Engine Lab</NavLink></li>
              //   <li><NavLink to="/labs/kinematics-dynamics">Kinematics & Dynamics Lab</NavLink></li>
              //   <li><NavLink to="/labs/material-characterization">Material Characterization Lab</NavLink></li>
              //   <li><NavLink to="/labs/mechatronics">Mechatronics Lab</NavLink></li>
              //   <li><NavLink to="/labs/metic">Metrology, Instrumentation and Control (METIC) Lab</NavLink></li>
              //   <li><NavLink to="/labs/robotics-industrial">Robotics & Industrial Automation Lab</NavLink></li>
              //   <li><NavLink to="/labs/thermodynamics">Thermodynamics Lab</NavLink></li>
              //   <li><NavLink to="/labs/welding-foundry">Welding and Foundry Lab</NavLink></li>
              // </ul>
              <ul className="labs-dropdown-menu">
                {labsData.labs.map((lab) => (
                  <li key={lab.name}>
                    <NavLink to={`/${lab.name.replace(/\s+/g, '-').toLowerCase()}`}>
                      {lab.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
          {/* <li><NavLink to="/facility">Facility</NavLink></li>*/}
          <li><NavLink to="/research">Research</NavLink></li>  

          <li><NavLink to="/blog">Blogs</NavLink></li> 
          <li><NavLink to="/booking">Booking</NavLink></li>

          <li>
            <button className='btn'>
              <NavLink to="/contact">Contact</NavLink>
            </button>
          </li>
        </ul>
        
        <div className="dropdown">
          <div className="menubhai" onMouseEnter={openMenu} onMouseLeave={closeMenu}>
            <img src={menu_icon} alt="Menu" id='menuIcon' />
            {menuOpen && (
              <div className="dropdown-content" id="dropdownContent" onMouseEnter={openMenu} onMouseLeave={closeMenu}>
                <ul>
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/admission">Admission</NavLink></li>
                  <li><NavLink to="/faculty">Faculty &amp; Staff</NavLink></li>
                  <li><NavLink to="/research">Research</NavLink></li>
                  <li><NavLink to="/booking">Booking</NavLink></li>
                  <li><NavLink to="/blog">Blogs</NavLink></li>
                  <li><NavLink to="/wonder">Wonders of Welding</NavLink></li>
                  <li><NavLink to="/login">Admin</NavLink></li>
                  <li><NavLink to="/career">Careers</NavLink></li>
                  <li><NavLink to="/about">About Us</NavLink></li>
                  <li><NavLink to="/contact">Contact Us</NavLink></li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
