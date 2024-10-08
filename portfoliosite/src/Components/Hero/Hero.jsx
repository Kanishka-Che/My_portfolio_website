import React from 'react'
import "./Hero.css"
import photo1 from "../../assets/photo1.jpg";
import photo2 from "../../assets/photo2.png";
import photo3 from "../../assets/photo3.png";
import photo4 from "../../assets/photo4.png";
import photo5 from "../../assets/photo5.png";

const Hero = () => {
  return (
    <section className='hero-container'>

    <div className='hero-content'>
        <h2>HI There!</h2>
        <h2>I'M Kanishka Chethana</h2>
    
    <p>
    Passionate frontend developer with full-stack expertise, crafting seamless digital experiences from front to back. 
    </p>
    </div>

    
 <div className='hero-img'>
      <div className='tech-icon'>
        <img className='image1' src={photo1} alt="photo 1"/>
      
      <div>
      <img className='image2' src={photo3} alt="photo 2"/>
      </div>
      </div>

    <div>

      <div className='icon'>
      <img src={photo2} alt="photo 3"/>
      </div>
      <div>
      <img src={photo4} alt="photo 4"/>
      </div>
      <div>
      <img src={photo5} alt="photo 5"/>
      </div>
      
    </div>

  </div>

    </section>
  )
}

export default Hero
