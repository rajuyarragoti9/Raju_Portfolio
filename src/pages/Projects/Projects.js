import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import IMS from "../../assets/Ims.jpg";
import Contact from "../../assets/Contact.png";
import Multer from "../../assets/multer.png";
import Fashion from "../../assets/fashion.png";

const Projects = () => {
  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8 },
    }),
  };

  return (
    <div className="container project" id="projects">
      <h2 className="text-center text-uppercase mt-3 mb-1">Projects</h2>
      <hr />
      <p className="pb-3 text-center">
        A selection of my recent work, demonstrating skills in frontend,
        backend, and full-stack development.
      </p>

      <div className="row" id="ads">
        {/* Project 1 */}
        <motion.div
          className="col-md-4 mb-4"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={projectVariants}
        >
          <div className="card shadow-sm h-100">
            <img
              src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
              alt="Online Grocery Store"
              className="card-img-top"
            />
            <div className="card-body text-center">
              <h5 className="card-title text-uppercase">
                Online Grocery Store
              </h5>
              <p className="card-text">
                Developed a user-friendly online grocery store using React.js,
                HTML, CSS, and Bootstrap, featuring intuitive order management,
                dynamic menus, and seamless checkout processes.
              </p>
              <div className="d-flex justify-content-center gap-2">
                <a
                  className="ad-btn"
                  href="https://github.com/rajuyarragoti9/ReactJS-Online-Grocery-App-"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source <FaGithub />
                </a>
                <a
                  className="ad-btn"
                  href="https://react-js-online-grocery-app.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live <HiMiniRocketLaunch />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          className="col-md-4 mb-4"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={projectVariants}
        >
          <div className="card shadow-sm h-100">
            <img
              src="https://m-rides.com/ca/wp-content/uploads/2022/12/ride-share-app.jpg"
              alt="Ride-Share-App"
              className="card-img-top"
            />
            <div className="card-body text-center">
              <h5 className="card-title text-uppercase">Ride Sharing App</h5>
              <p className="card-text">
                Developed a web-based ride-sharing application with real-time
                notifications, route planning, calendar sync, and dynamic
                pricing.
              </p>
              <div className="d-flex justify-content-center">
                <a
                  className="ad-btn"
                  href="https://github.com/rajuyarragoti9/ride-sharing-app-in-react-node-mysql-express"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          className="col-md-4 mb-4"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={projectVariants}
        >
          <div className="card shadow-sm h-100">
            <img src={IMS} alt="IMS" className="card-img-top" />
            <div className="card-body text-center">
              <h5 className="card-title text-uppercase">
                Inventory Management System (IMS) - Internship
              </h5>
              <p className="card-text">
                IMS utilized across industries to streamline inventory tracking,
                orders, and stock management effectively.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Project 4 */}
        <motion.div
          className="col-md-4 mb-4"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={projectVariants}
        >
          <div className="card shadow-sm h-100">
            <img src={Contact} alt="Contact" className="card-img-top" />
            <div className="card-body text-center">
              <h5 className="card-title text-uppercase">
                ReactJs-Simple-Contact-app
              </h5>
              <p className="card-text">
                React-based Contact Manager application with component-based
                architecture.
              </p>
              <div className="d-flex justify-content-center">
                <a
                  className="ad-btn"
                  href="https://github.com/rajuyarragoti9/ReactJs-Simple-Contact-app-"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source <FaGithub />
                </a>
                <a
                  className="ad-btn"
                  href="https://react-js-simple-contact-app.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live <HiMiniRocketLaunch />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 5 */}
        <motion.div
          className="col-md-4 mb-4"
          custom={4}
          initial="hidden"
          animate="visible"
          variants={projectVariants}
        >
          <div className="card shadow-sm h-100">
            <img src={Multer} alt="Multer" className="card-img-top" />
            <div className="card-body text-center">
              <h5 className="card-title text-uppercase">
                Multer-FileUpload-Nodejs
              </h5>
              <p className="card-text">
                Demonstrates a file upload system using Multer, Express, and
                Bootstrap.
              </p>
              <div className="d-flex justify-content-center">
                <a
                  className="ad-btn"
                  href="https://github.com/rajuyarragoti9/Multer-FileUpload-Nodejs-Using-Nodejs-Multer-Expressjs-Cors-HTML-"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 6 */}
        <motion.div
          className="col-md-4 mb-4"
          custom={5}
          initial="hidden"
          animate="visible"
          variants={projectVariants}
        >
          <div className="card shadow-sm h-100">
            <img src={Fashion} alt="Fashion" className="card-img-top" />
            <div className="card-body text-center">
              <h5 className="card-title text-uppercase">
                Fashion-Shopping-Backend-App
              </h5>
              <p className="card-text">
                Backend solution with User Profile Logging, Product Search, and
                Product Recommendation APIs.
              </p>
              <div className="d-flex justify-content-center">
                <a
                  className="ad-btn"
                  href="https://github.com/rajuyarragoti9/Fashion-Shopping-Backend-App-With-User-Log-Product-Recommendation-Search-Node.js-Express-MongoDB-JWT"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
