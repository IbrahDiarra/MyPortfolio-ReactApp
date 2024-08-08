import React from 'react';
import './Contact.css';
import ContactCard from './ContactCard/ContactCard';
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
  return (
    <section id='contact' className="contact-container">
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div className='contact-content-card' style={{flex:2}}>
                <ContactCard
                    iconUrl="./assets/images/email-icon.png"
                    text="ibrahdiarra40@gmail.com"
                />
                <ContactCard
                    iconUrl="./assets/images/whatsapp.png"
                    text="(+225) 05 458 855 12"
                />
                <ContactCard
                    iconUrl="./assets/images/location.png"
                    text="INPHB-Centre Yamoussoukro"
                />
                <ContactCard
                    iconUrl="./assets/images/linkedin.png"
                    text="https://www.linkedin.com/in/ibrahim-diarrassouba-088528241/"
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