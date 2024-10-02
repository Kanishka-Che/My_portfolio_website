import React from 'react'
import "./ContactMe.css"
import ContactinfoCard from './ContactinfoCard/ContactinfoCard'
import ContactForm from './ContactForm/ContactForm'
import emailIcon from 'C:/Users/Chethana/Desktop/portfoliyo site/My_portfolio_website01/portfoliosite/src/assets/email.png';
import githubIcon from 'C:/Users/Chethana/Desktop/portfoliyo site/My_portfolio_website01/portfoliosite/src/assets/github.png';

const ContactMe = () => {
  return (
    <section className='contact-container'>
        <h5>Contact Me</h5> 
 

        <div className='contact-content'>
        <div style={{flex:1}}>
            <ContactinfoCard
            iconUrl={emailIcon}
            text="kanishkachethana123@gmail.com"
            />
             <ContactinfoCard
            iconUrl={githubIcon}
            text="https://github.com/Kanishka-Che"
            />
            
        </div>
        
        <div style={{flex:1}}>
        <ContactForm />
        </div>
        </div>
    </section>
  )
}

export default ContactMe
