import React, { useState } from "react";
import "./SkillFormStyles.css";
import Modal from "../modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const SkillForm = ({ setToggleSkillModal, setSkills }) => {
  const [skillName, setSkillName] = useState("");
  const [skillRange, setSkillRange] = useState("");
  const handleAddSkill = (e) => {
    e.preventDefault();
    setSkillName("");
    setSkillRange("");
  };

  const handleSubmit = () => {
    setSkills((prev) => [...prev, { name: skillName, level: skillRange }]);
    setToggleSkillModal((prev) => !prev);
  };

  return (
    <Modal>
      <div className="app-resume-skill-form-container">
        <button
          className="app-resume-skill-form-x"
          onClick={() => {
            setToggleSkillModal((prev) => !prev);
          }}
        >
          <FontAwesomeIcon icon={faX} />
        </button>
        <form className="app-resume-skill-form" onSubmit={handleAddSkill}>
          <div className="app-resume-skill-group">
            <label htmlFor="skillName">Skill name:</label>
            <input
              type="text"
              id="skillName"
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
              placeholder="Enter skill name"
              required
            />
          </div>
          <div className="app-resume-skill-group">
            <label htmlFor="skillRange">Skill range:</label>
            <input
              type="number"
              id="skillRange"
              value={skillRange}
              onChange={(e) => setSkillRange(e.target.value)}
              placeholder="Enter skill range"
              min="0"
              max="100"
              required
            />
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="app-resume-skill-button"
          >
            Add skill
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default SkillForm;
