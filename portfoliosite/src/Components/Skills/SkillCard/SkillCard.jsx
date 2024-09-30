import React from 'react'
import './SkillCard.css'

const SkillCard = ({title,iconUrl,onClick}) => {
  return (
    <div className='skills-card' onClick={onClick ? onClick : () => {}}
   >
     
     <div className='skill-icon'>
        <img src={iconUrl} alt={`${title}icon`}/>
     </div>

     <span>{title}</span>
    </div>
  )
}

export default SkillCard
