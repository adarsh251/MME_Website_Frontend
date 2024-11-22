import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import labsData from '../Labs/labs.json';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [labsOpen, setLabsOpen] = useState(false);
  const location = useLocation();

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (activeMobileDropdown) setActiveMobileDropdown(null);
  };

  // Toggle mobile dropdown
  const toggleMobileDropdown = (dropdownName) => {
    setActiveMobileDropdown(activeMobileDropdown === dropdownName ? null : dropdownName);
  };

  // Desktop dropdown handlers
  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      setLabsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setLabsOpen(false);
    }
  };

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  };

  return (
    <nav className="dark-nav">
      {/* Logo */}
      <NavLink to="/" onClick={handleLinkClick}>
        <img src={logo} alt="Logo" className="logo" />
      </NavLink>

      {/* Mobile Menu Icon */}
      <div 
        className={`menu-icon ${isMobileMenuOpen ? 'active' : ''}`} 
        onClick={toggleMobileMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={isMobileMenuOpen ? 'show' : ''}>
        {/* Regular Nav Items */}
        <li><NavLink to="/" onClick={handleLinkClick}>Home</NavLink></li>
        <li><NavLink to="/admission" onClick={handleLinkClick}>Admission</NavLink></li>
        <li><NavLink to="/faculty">Faculty &amp; Staff</NavLink></li>
        <li><NavLink to="/about" onClick={handleLinkClick}>About</NavLink></li>
        <li><NavLink to="/career" onClick={handleLinkClick}>Careers</NavLink></li>

        {/* Labs Dropdown */}
        <li 
          className={`labs-dropdown ${activeMobileDropdown === 'labs' ? 'active' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span 
            onClick={() => toggleMobileDropdown('labs')}
            className="labs-trigger"
          >
            Labs
          </span>
          
          <ul className={`labs-dropdown-menu ${labsOpen || activeMobileDropdown === 'labs' ? 'show' : ''}`}>
            {labsData.labs.map((lab) => (
              <li key={lab.name}>
                <NavLink 
                  to={`/labs/${lab.name.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={handleLinkClick}
                >
                  {lab.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>

        {/* Additional Nav Items */}
        <li><NavLink to="/research" onClick={handleLinkClick}>Research</NavLink></li>
        <li><NavLink to="/blog" onClick={handleLinkClick}>Blogs</NavLink></li>
        <li><NavLink to="/wonder">Wonders of Welding</NavLink></li>
                  
        <li><NavLink to="/booking" onClick={handleLinkClick}>Booking</NavLink></li>
        <li><NavLink to="/login">Admin</NavLink></li>
        {/* Contact Button */}
        <li className="contact-button">
          <NavLink 
            to="/contact" 
            className="btn"
            onClick={handleLinkClick}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;