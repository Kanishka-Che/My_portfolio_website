import React from 'react'
import "./ContactinfoCard.css"

const ContactinfoCard = ({iconUrl,text}) => {
  return (
    <div className='contact-details-card'>
      <div className='icon'>
        <img src={iconUrl} alt={text}/>
      </div>

      <p>{text}</p>
    </div>
  )
}

export default ContactinfoCard
