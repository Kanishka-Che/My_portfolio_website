import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="Nav-wrapper">
      <div className="Nav-content">
        <a className="page">Time to Cording</a>
        <ul className={`Nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a className="item">Home</a></li>
          <li><a className="item">Skills</a></li>
          <li><a className="item">Work Experience</a></li>
          <li><a className="item">Contact Me</a></li>
          <button className="contact-btn" onClick={() => {}}>
            Hire Me
          </button>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
