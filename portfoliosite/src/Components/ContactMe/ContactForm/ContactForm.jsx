import React from 'react'
import "./ContactForm.css"

const ContactForm = () => {
  return (
    <div className='contact-form-conten'>
      <form>
        <div className='name-container'>
          <input type="text" name="firstname" placeholder="First Name"/>
          <input type="text" name="lastname" placeholder="Last Name"/>
          </div>
          <input type="text" name="email" placeholder="Email"/>
          <textarea type="text" name="message" placeholder="Message" rows={3}/>
      
          <button>SEND</button>
      </form>
     
    </div>
  )
}

export default ContactForm
