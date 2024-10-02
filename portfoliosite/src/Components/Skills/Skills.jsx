import React, { useState } from 'react';
import './Skills.css';
import SkillCard from './SkillCard/SkillCard';
import SkillsinfoCard from './SkillsinfoCard/SkillsinfoCard';  
import { SKILLS } from 'C:/Users/Chethana/Desktop/portfoliyo site/My_portfolio_website01/portfoliosite/src/Data/data.jsx'; 

const Skills = () => { 
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);  

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section className='skills-container'>
      <h2>Technical Proficiency</h2>

      <div className='skills-content'>
        <div className='skills'>
          <div>
            {SKILLS.map((item) => (
              
                <SkillCard
                  key={item.title}
                  iconUrl={item.icon}
                  title={item.title}
                  isActive={selectedSkill.title === item.title}
                  onClick={() => {handleSelectSkill(item);}}
                />
              
            ))}
          </div>
        </div>
        <div className='skills-info'>
          <SkillsinfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.Skills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
