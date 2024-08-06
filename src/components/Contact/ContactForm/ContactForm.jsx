import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Message envoyé avec succès");
        setMessageType('success');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          message: '',
        });
      } else {
        setMessage("Echec lors de l'envoie du message");
        setMessageType('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage("Une erreur s'est produite. Veuillez réessayer.");
      setMessageType('error');
    }
  };

  return (
    <div className="contact-form-content">
      {message && (
        <div className={`message ${messageType}`}>
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="name-container">
          <input
            type="text"
            name="firstname"
            placeholder="Firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastname"
            placeholder="Lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">SOUMETTRE</button>
      </form>
    </div>
  );
};

export default ContactForm;
