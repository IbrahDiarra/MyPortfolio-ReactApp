import React from 'react';
import './Contact.css';
import ContactCard from './ContactCard/ContactCard';
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
  return (
    <section className="contact-container">
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div style={{flex:1}}>
                <ContactCard
                    iconUrl="./assets/images/email-icon.png"
                    text="ibrahdiarra40@gmail.com"
                />
                <ContactCard
                    iconUrl="./assets/images/github-icon.png"
                    text="https://github.com/IbrahDiarra"
                />
            </div>
            <div style={{flex:1}}>
                <ContactForm/>
            </div>
        </div>
    </section>
  )
}

export default Contact;