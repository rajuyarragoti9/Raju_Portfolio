import React from "react";
import "./About.css";
import profile from "../../assets/Raju.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="about"
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="row">
        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
          <img src={profile} alt="Profile_Pic" />
        </div>
        <div className="col-md-6 about-content">
          <h1>About Me</h1>
          <p>
            My name is Raju Yarragoti. I am a professional and enthusiastic
            programmer in my daily life. I am a quick learner with a
            self-learning attitude. I love to learn and explore new technologies
            and am passionate about problem-solving. I love almost all the
            stacks of web application development and love to make the web more
            open to the world. My core skill is based on JavaScript and I love
            to do most of the things using JavaScript. I am available for any
            kind of job opportunity that suits my skills and interests.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
