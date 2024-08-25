import React from "react";
import "./EducationStyles.css";
import Header from "../header/Header";
import { education as data } from "../../constants/data";

const Education = () => {
  return (
    <div id="education" className="app-resume-education">
      <Header header="Education" />
      <div className="app-resume-education-timeline">
        {data.map((edu) => (
          <div key={edu.name} className="app-resume-education-timeline-card">
            <div className="app-resume-education-timeline-card-year">
              {edu.year}
            </div>
            <div className="app-resume-education-timeline-card-content">
              <h3>{edu.name}</h3>
              <p>{edu.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
