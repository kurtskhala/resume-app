import React from "react";
import "./ExperienceStyles.css";
import Header from "../header/Header";
import { experience as data } from "../../constants/data";

const Experience = () => {
  return (
    <div id="experience" className="app-resume-experience">
      <Header header="Experience" />
      <div className="app-resume-experience-container">
        {data.map((job) => (
          <div key={job.company} className="app-resume-experience-card">
            <div className="app-resume-experience-companyPeriod">
              <div className="app-resume-experience-company">{job.company}</div>
              <div className="app-resume-experience-period">{job.period}</div>
            </div>
            <div className="app-resume-experience-position-description">
              <div className="app-resume-experience-position">
                {job.position}
              </div>
              <ol className="app-resume-experience-position-description">
                {job.describtion.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
