import React  from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Hero from "./Components/Hero/Hero";
import Skills from './Components/Skills/Skills';
import ContactMe from './Components/ContactMe/ContactMe';

const App = () => {

  return (
  
      <>
      <Navbar/>
      <div className='Container'>
      <Hero/>
      <Skills/>
      <ContactMe/>
      <Mycv/>
      </div>
      </>
      
  );
};

export default App;
