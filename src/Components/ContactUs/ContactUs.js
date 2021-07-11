import React, { useState } from "react";
import Navbar from "../Home/Navbar/Navbar";
import images01 from "../../images/undraw_message_sent_1030.svg";
import "./ContactUs.css";


const ContactUs = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
  const handleChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value);
    } else if (event.target.name === "email") {
      setEmail(event.target.value);
    } else {
      setMessage(event.target.value);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
    const data = res.json();
    console.log("data", data);
    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      window.alert("Successfully Send Message");
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="contact1">
        <div className="container-contact1">
          <div id="contactid" className="contact1-pic js-tilt" data-tilt>
            <img className="animated" src={images01} alt="" />
          </div>

          <form
            onSubmit={handleSubmit}
            method="POST"
            className="contact1-form validate-form"
          >
            <span className="contact1-form-title">Contact Us</span>

            <div className="wrap-input1 validate-input">
              <input
                className="input1"
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={handleChange}
              />
              <span className="shadow-input1"></span>
            </div>

            <div className="wrap-input1 validate-input">
              <input
                className="input1"
                type="text"
                name="email"
                placeholder="Email"
				value={email}
				onChange={handleChange}
              />
              <span className="shadow-input1"></span>
            </div>

            <div className="wrap-input1 validate-input">
              <textarea
                className="input1"
                name="message"
                placeholder="Message"
				value={message}
				onChange={handleChange}
              ></textarea>
              <span className="shadow-input1"></span>
            </div>

            <div className="container-contact1-form-btn">
              <button className="contact1-form-btn">
                <span>
                  Send
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
