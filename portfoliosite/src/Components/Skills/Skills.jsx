import React from 'react';
import './Skills.css';
import SkillCard from './SkillCard/SkillCard';
import { SKILLS } from 'C:/Users/Chethana/Desktop/portfoliyo site/My_portfolio_website01/portfoliosite/src/Data/data.jsx'; 

const SkillsSection = () => { 
  return (
    <section className='skills-container'>
      <h2>Technical Proficiency</h2>
      <div className='skills-content'>
        <div className='skills'>
          {SKILLS.map((category) => (
            <div key={category.title}>
              <SkillCard
                iconUrl={category.icon}
                title={category.title}
              />
              <ul>
                {category.Skills.map((skill, i) => (
                  <li key={i}>
                    {skill.skill}: {skill.Percentage}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='skills-info'></div>
      </div>
    </section>
  );
};

export default SkillsSection;
