import React from 'react'
import "./ContactMe.css"
import ContactinfoCard from './ContactinfoCard/ContactinfoCard'
import ContactForm from './ContactForm/ContactForm'
import emailIcon from 'C:/Users/Chethana/Desktop/portfoliyo site/My_portfolio_website01/portfoliosite/src/assets/email.png';
import githubIcon from 'C:/Users/Chethana/Desktop/portfoliyo site/My_portfolio_website01/portfoliosite/src/assets/github.png';

const ContactMe = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "42565c78-214d-41d2-9f03-32a5ef4f4170");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  
  
  
  return (
    <section onSubmit={onSubmit}className='contact-container'>
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
