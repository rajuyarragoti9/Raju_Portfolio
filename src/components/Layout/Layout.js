import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../../pages/Home/Home";

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
