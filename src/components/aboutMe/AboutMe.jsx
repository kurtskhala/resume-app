import React from "react";
import Header from "../header/Header";
import "./AboutMeStyles.css";

const AboutMe = () => {
  return (
    <div id="aboutMe" className="app-resume-aboutMe">
      <Header header="About Me" />
      <p className="app-resume-aboutMe-text">
        I am a dedicated and enthusiastic front-end developer with a strong
        focus on React and modern web technologies. I began my programming
        journey in university and have since expanded my skills through various
        online platforms such as Udemy, YouTube, and LinkedIn Learning. My
        passion for continuous learning and my ability to adapt to new tools and
        frameworks drive me to create dynamic, user-friendly web applications.
      </p>
    </div>
  );
};

export default AboutMe;
