import React from 'react'
import './Contact.css'
import linkedin from '../assets/linkedin-icon.png'
import github from '../assets/github-icon.png'
import email from '../assets/email-icon.png'



function Contact() {
  return (
    <div id="div-contact">
      <div id="div-contact-title">
        <h2 id="h2-contact-title">Contact Me</h2>
        <h3 id="h3-contact-subtitle">Feel free to ask about my projects or anything else</h3>
      </div>
      <div id="div-contact-links">
        <div className="div-contact-individual">
          <input type="image" src={linkedin} alt="linkedin logo" className="input-contact-linkedin" />
          <a href="https://www.linkedin.com/in/jayden-banks" target="_blank" rel="noreferrer" className="a-contact-linkedin">Linkedin</a>
        </div>
        <div className="div-contact-individual">
        <input type="image" src={github} className="input-contact-linkedin" alt="github logo"/>
          <a href="https://github.com/Jayden-Banks" target="_blank" rel="noreferrer" className="a-contact-linkedin">Github</a>
        </div>
        <div className="div-contact-individual">
        <input type="image" src={email} className="input-contact-linkedin" alt="email logo"/>
          <p id="p-email">Jayden.Banks76 <br/> @gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
