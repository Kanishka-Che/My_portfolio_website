import React, { useState, useRef } from 'react';
import './Navbar.css';
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(); 

  const toggleMenu = () => {
    if (menuOpen) {
      menuRef.current.style.right = "-350px";  
    } else {
      menuRef.current.style.right = "0";  
    }
    setMenuOpen(!menuOpen); 
  };

  return (
    <nav className="Nav-wrapper">
      <div className="Nav-content">
        <a className="page">Time to Cording</a>
        
       
        <IoMdMenu onClick={toggleMenu} className={`menu_open ${menuOpen ? 'hidden' : ''}`} />

        <MdClose onClick={toggleMenu} className={`menu_close ${menuOpen ? '' : 'hidden'}`} />

       
        <ul ref={menuRef} className="navbar">
          <li><a className="item">Home</a></li>
          <li><a className="item">Skills</a></li>
          <li><a className="item">Work Experience</a></li>
          <li><a className="item">Contact Me</a></li>
          <button className="contact-btn">
            Hire Me
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
