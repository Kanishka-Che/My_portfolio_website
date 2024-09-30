import React  from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Hero from "./Components/Hero/Hero";
import Skills from './Components/Skills/Skills';

const App = () => {

  return (
  
      <>
      <Navbar/>
      <div className='Container'>
      <Hero/>
      <Skills/>
      </div>
      </>
      
  );
};

export default App;
