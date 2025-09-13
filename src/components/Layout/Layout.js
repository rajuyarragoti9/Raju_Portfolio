import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Projects from "../../pages/Projects/Projects";
import Techstack from "../../pages/Techstack/Techstack";
import WorkExp from "../../pages/WorkExp/WorkExp";
import Education from "../../pages/Education/Education";
import Contact from "../../pages/Contact/Contact";

import "./Layout.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
      </div>
    </>
  );
};

export default Layout;
