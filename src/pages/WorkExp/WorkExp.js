import React from "react";
import { SiReact ,SiJirasoftware} from "react-icons/si";
import { MdDeveloperMode } from "react-icons/md";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="FEB 2024 - Present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiJirasoftware />
}
            >
              <h3 className="vertical-timeline-element-title">
                Technical Support Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Learnyst Insight Private Limited
              </h4>
              <p>
                Product Expert,Manual Testing ,API Testing ,Problem Solving ,Testing And DeBugging, etc
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="FEB 2023 - JUL 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<MdDeveloperMode />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Development Engineer Intern (SDE Intern)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Cortracker IT Pvt Limited
              </h4>
              <p>
                Project Development,Product Design ,Backend Development, DBMS ,
                Rest API Building ,Problem Solving ,Testing And DeBugging etc
              </p>
            </VerticalTimelineElement>
            
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
