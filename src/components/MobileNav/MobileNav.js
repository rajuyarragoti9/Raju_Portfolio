import React, { useState, useEffect } from "react";
import { Link, scroller } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import "./MobileNav.css";

const menuItems = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "work", label: "Work Experience" },
  { to: "techstack", label: "Tech Stack" },
  { to: "education", label: "Education" },
  { to: "projects", label: "Projects" },
  { to: "contact", label: "Contact" },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const toggleMenu = () => setOpen(!open);
  const handleSetActive = (to) => {
    setActive(to);
    setOpen(false);
  };

  return (
    <div className="mobile-nav-wrapper">
      <div className="mobile-nav-header">
        <div className="mobile-nav-title">Raju Yarragoti</div>
        <div className="mobile-nav-icon" onClick={toggleMenu}>
          {open ? <AiOutlineClose size={30} /> : <GiHamburgerMenu size={30} />}
        </div>
      </div>

      <div className={`mobile-nav-menu ${open ? "open" : ""}`}>
        <ul>
          {menuItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => handleSetActive(item.to)}
                className={active === item.to ? "active" : ""}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
