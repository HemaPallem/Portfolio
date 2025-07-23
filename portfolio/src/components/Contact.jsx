import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Contact.css";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useRef } from "react";

const Contact = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const msgRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();

    if (
      !nameRef.current.value.trim() ||
      !emailRef.current.value.trim() ||
      !msgRef.current.value.trim()
    ) {
      alert("Please enter all details");
      return;
    }

    const formData = new FormData(event.target);
    formData.append("access_key", "cc24eac3-b648-41b2-86bd-963f46481bd7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Mail sent successfully!", {
        position: "bottom-right",
        autoClose: 3000,
      });
      event.target.reset(); // Clears the form
    }
  };

  return (
    <>
      <h2 className="pb-2 border-bottom text-align-left action-title contact">
        Contact
      </h2>
      <div
        id="Contact"
        className="contact d-flex align-items-center justify-content-center flex-column"
      >
        <div className="contact-section d-flex align-items-center justify-content-center">
          <div className="contact-left d-flex flex-column">
            <h1>Lets Talk</h1>
            <p>
              Lets talk about projects, new technologies, internships, and
              Leetcode problem solving. Peer learning helps us gain more
              knowledge and improve problem-solving skills.
            </p>
            <div className="contact-details d-flex flex-column">
              <div className="contact-detail">
                <p>
                  <FaEnvelope className="m-2" />
                  <a
                    href="mailto:n200762@rguktn.ac.in"
                    className="text-decoration-none text-white"
                  >
                    n200762@rguktn.ac.in
                  </a>
                </p>
              </div>
              <div className="contact-detail">
                <p>
                  <FaPhone className="m-2" /> 0000000000
                </p>
              </div>
              <div className="contact-detail">
                <p>
                  <FaMapMarkerAlt className="m-2" /> Nuzvid
                </p>
              </div>
            </div>
          </div>
          <form
            className="contact-right d-flex flex-column flex-start"
            onSubmit={onSubmit}
          >
            <h1 className="contact-title">Contact Form</h1>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              placeholder="Enter your Name"
              id="name"
              ref={nameRef}
              required
            />
            <label htmlFor="email">Your Mail</label>
            <input
              type="email"
              placeholder="Enter your email address"
              id="email"
              ref={emailRef}
              required
            />
            <label htmlFor="msg">Write Your Message</label>
            <textarea
              name="msg"
              id="msg"
              rows="4"
              placeholder="Enter your message"
              ref={msgRef}
              required
            ></textarea>
            <button type="submit" className="form-submit">
              Submit
            </button>

            <ToastContainer />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
