import React, { useState } from 'react';
import './Skills.css';
import SkillCard from './SkillCard/SkillCard';
import { SKILLS } from 'C:/Users/Chethana/Desktop/portfoliyo site/My_portfolio_website01/portfoliosite/src/Data/data.jsx'; 

const Skills = () => { 

  const {selectedSkill,setSelectedSkill} =useState(SKILLS[0]);

const handleSelectSkill = (data)=>{setSelectedSkill(data);};


  return (
    <section className='skills-container'>
      <h2>Technical Proficiency</h2>
      <div className='skills-content'>
        <div className='skills'>
          {SKILLS.map((item) => (
            <div >
              <SkillCard
                key={item.title}
                iconUrl={item.icon}
                title={item.title}
                isActive={selectedSkill.title===item.title}onClick={()=>{
                  handleSelectSkill(item);
                }
                }
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
        <div className='skills-info'>
            <SkillsInfoCade
               heading={selectedSkill.title}
               skills={selectedSkill.skills}
               />
        </div>
      </div>
    </section>
  );
};

export default Skills;
