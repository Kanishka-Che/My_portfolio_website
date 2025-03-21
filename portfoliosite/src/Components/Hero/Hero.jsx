import React from 'react';
import './Hero.css';
import photo1 from "../../assets/photo1.jpg";
import photo2 from "../../assets/photo2.png";
import photo3 from "../../assets/photo3.png";
import photo4 from "../../assets/photo4.png";
import photo5 from "../../assets/photo5.png";
import 'font-awesome/css/font-awesome.min.css';


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
      <div className='social-media'>
        <a href='#'><i class="facebook"></i></a>
        <a href='#'><i class="instagram"></i></a>
        <a href='#'><i class="linkedin"></i></a>
      </div>

      <div className='hero-img'>
        <div className='tech-icon'>
          <img className='image1' src={photo1} alt="photo 1" />

        </div>

      </div>
    </section>
  );
};

export default Hero;
