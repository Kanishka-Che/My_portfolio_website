import React from 'react';
import './SkillsinfoCard.css';

const SkillsinfoCard = ({ heading, skills }) => {
  return (
    <div className='skills-info-card'>
      <h6>{heading}</h6>

      <div className='skills-info-content'>
        {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>
            <div className='skill-info'>
              <p>{item.skill}</p>
              <p className='Percentage'>{item.Percentage}</p>
            </div>

            <div className='skill-progress-bg'>
              <div className='skill-progress' style={{ width: item.Percentage }} />
            </div> 
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SkillsinfoCard;
