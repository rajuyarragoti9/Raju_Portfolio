import React from "react";
import { Link } from "react-scroll";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";

import { useTheme } from "../../context/ThemeContext";
import "./Navbar.css";

// Desktop navbar; on screens <= 768px MobileNav is shown instead
const Navbar = () => {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-container">
        <div className="navbar-logo">Raju Yarragoti <FaCode /> </div>

        <ul className="navbar-menu">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link to={item.to} spy smooth offset={-100} duration={500}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {theme === "light" ? (
              <BsFillMoonStarsFill size={20} />
            ) : (
              <BsFillSunFill size={20} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

// Same order as the sections appear on the page
const menuItems = [
  { id: 1, to: "home", label: "Home" },
  { id: 2, to: "about", label: "About" },
  { id: 3, to: "work", label: "Work Experience" },
  { id: 4, to: "techstack", label: "Tech Stack" },
  { id: 5, to: "projects", label: "Projects" },
  { id: 6, to: "education", label: "Education" },
  { id: 7, to: "contact", label: "Contact" },
];

export default Navbar;
