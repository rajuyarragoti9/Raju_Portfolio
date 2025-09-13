import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "./Education.css";

const educationData = [
  {
    date: "2019 - 2023",
    title: "Bachelor Of Technology (B.Tech)",
    subtitle: "Computer Science Engineering (CSE)",
    institution: "IIIT, Rajiv Gandhi University Of Knowledge Technologies",
  },
  {
    date: "2017 - 2019",
    title: "CLASS XII",
    subtitle: "Pre University Course (PUC)",
    institution: "IIIT, Rajiv Gandhi University Of Knowledge Technologies",
  },
  {
    date: "2016 - 2017",
    title: "CLASS X",
    subtitle: "Secondary School Education (SSC)",
    institution: "ZPHS, Andhra Pradesh",
  },
];

const Education = () => {
  return (
    <div className="education" id="education">
      <h2 className="text-center text-uppercase mt-3 mb-1">Education Details</h2>
      <hr />

      <VerticalTimeline>
        {educationData.map((edu, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--education"
            contentStyle={{ background: "white", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date={edu.date}
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">{edu.title}</h3>
            <h4 className="vertical-timeline-element-subtitle2">{edu.subtitle}</h4>
            <h4 className="vertical-timeline-element-subtitle1">{edu.institution}</h4>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
