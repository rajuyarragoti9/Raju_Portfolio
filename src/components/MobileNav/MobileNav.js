import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import "./MobileNav.css";

// Same order as the sections appear on the page
const menuItems = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "work", label: "Work Experience" },
  { to: "techstack", label: "Tech Stack" },
  { to: "projects", label: "Projects" },
  { to: "education", label: "Education" },
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
        <button
          type="button"
          className="mobile-nav-icon"
          onClick={toggleMenu}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <AiOutlineClose size={30} /> : <GiHamburgerMenu size={30} />}
        </button>
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
