import React from "react";
import Menu from "../../components/menu/Menu";
import ResumeMain from "../../components/resumeMain/ResumeMain";
import "./ResumeStyles.css";
import BottomButton from "../../components/bottomButton/BottomButton";

const Resume = () => {
  return (
    <div className="app-resume">
      <Menu />
      <ResumeMain />
      <BottomButton />
    </div>
  );
};

export default Resume;
