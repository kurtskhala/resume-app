import React from "react";
import "./ResumeMainStyles.css";
import AboutMe from "../aboutMe/AboutMe";
import Education from "../education/Education";
import Experience from "../experience/Experience";
import Skills from "../skills/Skills";
import Portfolio from "../portfolio/Portfolio";
import Contacts from "../contacts/Contacts";

const ResumeMain = () => {
  return (
    <div className="app-resume-main">
      <AboutMe />
      <Education />
      <Experience />
      <Skills />
      <Portfolio />
      <Contacts />
    </div>
  );
};

export default ResumeMain;
