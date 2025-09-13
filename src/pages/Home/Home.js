import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./Home.css";
import Resume from "../../assets/docs/Raju_ Yarragoti_ Resume.pdf";
import { BsFillMoonStarsFill, BsFillSunFill, BsWhatsapp } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Home = () => {
  const [theme, setTheme] = useTheme();
  const handleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <div className={`home-container ${theme}`} id="home">
      <div className="theme-btn" onClick={handleTheme}>
        {theme === "light" ? (
          <BsFillMoonStarsFill size={30} />
        ) : (
          <BsFillSunFill size={30} />
        )}
      </div>

      <div className="home-content">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Hi 👋 I'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Software Developer!",
                  "Full Stack Developer!",
                  "MERN Stack Developer!",
                  "ReactJS Developer!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="home-buttons"
        >
          <a
            className="btn btn-hire"
            href="https://api.whatsapp.com/send?phone=+917730879986"
            target="_blank"
            rel="noreferrer"
          >
            Hire Me <BsWhatsapp style={{ marginLeft: "8px" }} />
          </a>
          <a
            className="btn btn-cv"
            href={Resume}
            download="Raju_Yarragoti_Resume.pdf"
          >
            My Resume <FaDownload style={{ marginLeft: "8px" }} />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
