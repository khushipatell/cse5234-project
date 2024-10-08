import React, { useState } from 'react';
import Header from "./header";
import Footer from "./footer";
import "../css/site.css";
import "../css/contactUs.css"; 
import homeImage from '../assets/contactUs.png'; 

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.name) {
      formErrors.name = "Name is required";
    }
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
    }
    if (!formData.comment) {
      formErrors.comment = "Message is required";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setFormSubmitted(true);
    }
  };

  const handleNewForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      comment: ''
    });
    setFormSubmitted(false);
    setErrors({}); 
  };

  return (
    <div className="body container-fluid">
      <Header />
      <div className="contact-container">
        
        {formSubmitted ? (
          <div className="form-submitted-message">
            <h2>Thank you for contacting us.</h2>
            <br />
            <h2>We will get back to you soon.</h2>
            <button onClick={handleNewForm}>Submit Another Form</button>
          </div>
          ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Contact Us</h2>

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <input
              type="text"
              name="phone"
              placeholder="Phone number (optional)"
              value={formData.phone}
              onChange={handleChange}
            />

            <textarea
              name="comment"
              placeholder="Message"
              value={formData.comment}
              onChange={handleChange}
            />
            {errors.comment && <span className="error">{errors.comment}</span>}

            <button type="submit">Send Message</button>
          </form>
        )}

        <div className="contact-image">
          <img src={homeImage} alt="Contact Us" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;