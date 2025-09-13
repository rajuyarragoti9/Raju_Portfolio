import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./Contact.css";
import { motion } from "framer-motion";
import {
  BsEnvelopeAt,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTelegram,
} from "react-icons/bs";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  // handle submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please provide all fields");
        return;
      }

      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/sendEmail`,
        { name, email, msg }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="card card0 border-0">
        <div className="row">
          {/* Left Side - Image */}
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <div className="card1">
              <div className="row border-line">
                <motion.img
                  src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                  alt="contact"
                  className="image"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="col-lg-6 col-md-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="card2 d-flex card border-0 px-4 py-5"
            >
              <div className="row">
                <h6>
                  Contact With
                  <a
                    href="mailto:rajuyarragoti@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsEnvelopeAt color="red" size={30} className="ms-2" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/raju-yarragoti-4a655315a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsLinkedin color="blue" size={30} className="ms-2" />
                  </a>
                  <a
                    href="https://github.com/rajuyarragoti9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub color="black" size={30} className="ms-2" />
                  </a>
                  <a
                    href="https://www.instagram.com/raju.18_/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsInstagram color="blue" size={30} className="ms-2" />
                  </a>
                  <a
                    href="https://t.me/rajudev9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsTelegram color="blue" size={30} className="ms-2" />
                  </a>
                </h6>

                <div className="row px-3 mb-4">
                  <div className="line" />
                  <small className="or text-center">OR</small>
                  <div className="line" />
                </div>

                <div className="row px-3 mb-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="row px-3 mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="row px-3 mb-3">
                  <textarea
                    name="msg"
                    placeholder="Write your message"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                  />
                </div>

                <div className="row px-3">
                  <button className="button" onClick={handleSubmit}>
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
