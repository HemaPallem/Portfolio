import 'bootstrap/dist/css/bootstrap.min.css';

import './Contact.css';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaPhone } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
  const[alertVisible, setAlertVisible]=useState(false)
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "cc24eac3-b648-41b2-86bd-963f46481bd7");

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
      setAlertVisible(true)
    }
  };
  const handleCloseAlert = () => {
    setAlertVisible(false)

  }
  return (
    <>
    <h2  className="pb-2 border-bottom text-align-left action-title contact">Contact</h2>
    <div id="Contact"className="contact d-flex align-items-center justify-content-center flex-column">
      
      <div className="contact-section d-flex align-items-center justify-content-center">
        <div className="contact-left d-flex flex-column ">
          <h1>Let's Talk</h1>
          <p>Lets talk about the projects, new technologies, internships, leetcode problme solving. Peer learning helps us to get more knowledge and problem solving skills will improve</p>
          <div className="contact-details d-flex flex-column ">
            <div className="contact-detail">
              <FaEnvelope/> <p><a href="mailto:n200762@rguktn.ac.in" className="text-decoration-none text-white">n200762@rguktn.ac.in</a></p> 
            </div>
            <div className="contact-detail">
              <FaPhone/> <p>0000000000</p>
            </div>
            <div className="contact-detail">
              <FaMapMarkerAlt/> <p>Nuzvid</p>
            </div>
          </div>
        </div>
        <form className="contact-right d-flex flex-column flex-start" onSubmit={onSubmit}>
          <h1 className="contact-title">Contact Form</h1>
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter your Name" id="name"/>
          <label htmlFor="email">Your Mail</label>
          <input type="email" placeholder="Enter your email address" id="email" />
          <label htmlFor="msg">Write Your Message</label>
          <textarea name="msg" id="msg" rows="8" placeholder="Enter your message"></textarea>
          <button type="submit" className="form-submit">submit</button>
          <div className={`alert alert-success alert-dismissible fade  ${alertVisible?"show":"d-none"}`} role="alert">
            <strong>Mail sent successfully!</strong> 
            <button type="button" className="close alert-button" data-dismiss="alert" aria-label="Close" onClick={handleCloseAlert}>
              <span aria-hidden="true">&times;</span>
            </button>
            
          </div>
          
        </form>
      </div>
    </div>
    </>
  )
}
export default Contact;