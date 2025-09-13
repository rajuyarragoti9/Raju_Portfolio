import React, { useState } from "react";
import { Link } from "react-scroll";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaCode } from "react-icons/fa6";

import { useTheme } from "../../context/ThemeContext";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const toggleMenu = () => setOpen(!open);

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-container">
        <div className="navbar-logo">Raju Yarragoti <FaCode /> </div>

        <ul className="navbar-menu">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.to}
                spy
                smooth
                offset={-100}
                duration={500}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <div className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? (
              <BsFillMoonStarsFill size={20} />
            ) : (
              <BsFillSunFill size={20} />
            )}
          </div>

          <div className="mobile-menu-icon" onClick={toggleMenu}>
            {open ? <AiOutlineClose size={25} /> : <GiHamburgerMenu size={25} />}
          </div>
        </div>
      </div>

      {open && (
        <ul className="mobile-menu">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.to}
                spy
                smooth
                offset={-100}
                duration={500}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

const menuItems = [
  { id: 1, to: "home", label: "Home" },
  { id: 2, to: "about", label: "About" },
  { id: 3, to: "techstack", label: "Tech Stack" },
  { id: 4, to: "work", label: "Work Experience" },
  { id: 5, to: "projects", label: "Projects" },
  { id: 6, to: "education", label: "Education" },
  { id: 7, to: "contact", label: "Contact" },
];

export default Navbar;
