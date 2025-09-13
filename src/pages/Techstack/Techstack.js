import React from "react";
import "./Techstack.css";
import { motion } from "framer-motion";
import { TechStackList } from "../../utils/Techstack";

const Techstack = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="container techstack" id="techstack">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="header"
      >
        <h2 className="col-12-mt-3 mb-1 text-center text-uppercase">
          Technologies Stack
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 Including Programming Languages, Frameworks, Databases, Front-end
          and Back-end Tools, Operating Systems, and APIs
        </p>
      </motion.div>

      <motion.div
        className="row"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {TechStackList.map((tech) => (
          <motion.div
            key={tech._id}
            className="col-md-3"
            variants={itemVariants}
          >
            <div className="card m-2">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex justify-content-center">
                    <div className="align-self-center">
                      <tech.icon className="tech-icon" />
                    </div>
                    <div className="media-body">
                      <h5>{tech.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Techstack;
