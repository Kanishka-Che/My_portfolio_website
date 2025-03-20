import React, { useState } from 'react';
import './Navbar.css';
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="Nav-wrapper">
      <div className="Nav-content">
        <a className="page">Time to Cording</a>
     
       

       
        <IoMdMenu className="item"/>
          <ul>
          <MdClose className="menu_close" />
            <li><a className="item">Home</a></li>
            <li><a className="item">Skills</a></li>
            <li><a className="item">Work Experience</a></li>
            <li><a className="item">Contact Me</a></li>
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
