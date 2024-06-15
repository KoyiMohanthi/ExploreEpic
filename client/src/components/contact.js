import React from 'react';
import './contact.css';
const Contact = () => {
  return (
    <div className="container_contact">
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62039.89194452979!2d79.38725228781477!3d13.62773296561731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b08f9e26b19%3A0x95af7fa0239cf91d!2sTirupati+Tirumala+Tours+and+Travels!5e0!3m2!1sen!2sin!4v1450258626729"
          width="750"
          height="600"
          frameBorder="0"
          style={{ border: '0' }}
          allowFullScreen=""
          title="Google Maps"
        ></iframe>
      </div>
      <div className="form">
        <form>
          <div>
            <h2 align="center">Contact Us</h2>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" placeholder="Enter Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Enter Email Address" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone&nbsp;<span>Number:</span></label>
              <input type="tel" id="phone" placeholder="Phone Number" required />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location:</label>
              <input type="text" id="location" placeholder="Location" required />
            </div>
          </div>
          <div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input type="text" id="subject" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" placeholder="Message" name="message" rows="6" required></textarea>
            </div>
            <div className="form-group">
              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
      {/* <p className="logo_body">
        <img src="https://cdn.glitch.global/74966f89-6b4a-4631-ad79-95f11a65e0dd/logo11.jpg?v=1697535569992" alt="Company Logo" />
      </p> */}
    </div>
  );
};

export default Contact;
