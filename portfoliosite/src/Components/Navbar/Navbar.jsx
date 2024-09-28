import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
    <nav className='Nav-wrapper'>
          <div className='Nav-content'>

            <a className='page'>Time to cording</a>
            <ul>
                <li>
                    <a className='item'>Home</a>
                </li>
                <li>
                    <a className='item'>Skills</a>
                </li>
                <li>
                    <a className='item'>Work Experience</a>
                </li>
                <li>
                    <a className='item'>Contact Me</a>
                </li>

                <button className='contact-btn'onClick={()=>{}}>
                    Hire Me
                </button>


            </ul>
          </div>

    </nav>
    
    </>
  )
}

export default Navbar
