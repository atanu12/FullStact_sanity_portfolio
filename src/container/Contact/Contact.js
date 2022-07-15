import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

const Contact = () => {
  // set form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFromSubmited, setIsFromSubmited] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handelChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handelSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    // send form data to DB
    client.create(contact).then(() => {
      setLoading(false);
      setIsFromSubmited(true);
    });
    console.log(formData,'formData')
    // send email
    emailjs
      .send(
        "service_2tgcuea",
        "template_88hk4ij",
        formData,
        "US6BbtNFEJmC_NQIY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <h2 className="head-text">Take A Coffee & Chat With Me</h2>

      <div className="app__contact-cards">
        {/* email */}
        <div className="app__contact-card">
          <img src={images.email} alt="email" />
          <a href="mailto:atanumanal45@gmail.com" className="p-text">
            atanumandal45@gmail.com
          </a>
        </div>
        {/* phone no */}
        <div className="app__contact-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +91 9840200827" className="p-text">
            +91 9840200827
          </a>
        </div>
      </div>

      {/* form */}
      {!isFromSubmited ? (
        <div className="app__contact-form app__flex">
          {/* name */}
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={handelChangeInput}
            />
          </div>

          {/* Email */}
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Enter Your Email"
              name="email"
              value={email}
              onChange={handelChangeInput}
            />
          </div>

          {/* message */}
          <div className="">
            <textarea
              className="p-text"
              placeholder="Enter Your Message"
              name="message"
              value={message}
              onChange={handelChangeInput}
            />
          </div>

          {/* Submit Button */}

          <button type="button" className="p-text" onClick={handelSubmit}>
            {" "}
            {loading ? "Sending" : "Send Message"}{" "}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Contact, "app__contact"),
  "contact",
  "app__whitebg"
);
