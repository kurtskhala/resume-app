import React, { useState } from "react";
import "./SkillsStyles.css";
import Header from "../header/Header";
import SkillForm from "../skillForm/SkillForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const data = [
  { name: "HTML", level: 100 },
  { name: "CSS", level: 100 },
  { name: "JavaScript", level: 100 },
  { name: "React", level: 100 },
  { name: "TypeScript", level: 70 },
  { name: "PHP", level: 30 },
  { name: "Java", level: 30 },
  { name: "Oracle SQL", level: 60 },
  { name: "MySQL", level: 60 },
  { name: "GIT", level: 100 },
  { name: "Semantic UI", level: 80 },
  { name: "Visual Studio", level: 100 },
  { name: "Redux", level: 70 },
];

const Skills = () => {
  const [skills, setSkills] = useState([...data]);
  const [toggleSkillModal, setToggleSkillModal] = useState(false);
  return (
    <div id="skills" className="app-resume-skills">
      <button
        className="app-resume-skills-openEdit"
        onClick={() => setToggleSkillModal((prev) => !prev)}
      >
        <FontAwesomeIcon icon={faPenToSquare} />
        Open edit
      </button>
      <Header header="Skills" />
      <div className="app-resume-skills-container">
        {skills.map((skill) => (
          <div key={skill.name} className="app-resume-skill">
            <div className="app-resume-skill-bar">
              <div
                className="app-resume-skill-level"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <div className="app-resume-skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
      <div className="app-resume-skill-scale">
        <span className="app-resume-skill-scale-beginner">Beginner</span>
        <span className="app-resume-skill-scale-proficient">Proficient</span>
        <span className="app-resume-skill-scale-expert">Expert</span>
        <span className="app-resume-skill-scale-master">Master</span>
      </div>

      {toggleSkillModal && (
        <SkillForm
          setSkills={setSkills}
          setToggleSkillModal={setToggleSkillModal}
        />
      )}
    </div>
  );
};

export default Skills;
