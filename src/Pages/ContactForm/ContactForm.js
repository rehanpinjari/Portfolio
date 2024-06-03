import React, { useState } from "react";
import "/media/hp/107 GB Volume1/WebDev/30ProjectsToMasterWebDev/01__Portfolio/portfolio/src/Pages/ContactForm/ContactForm.css";


function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with formData
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-head">
        <h1 className="contact-form-title">Contact me today 🤙!</h1>
        <p className="contact-form-headline">
          You've got a problem – I've got the solution. How can I help?
        </p>
      </div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">What can i help you with?</label>
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">Let's have chat!</option>
          <option value="2">I want build landing page for my business</option>
          <option value="3">I want build entire website!</option>
          <option value="3">I want to redesign my website</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      {/* <button type="submit">Submit</button> */}
      <div class="wrap">
        <button class="button">Submit</button>
      </div>
    </form>
  );
}

export default ContactForm;
