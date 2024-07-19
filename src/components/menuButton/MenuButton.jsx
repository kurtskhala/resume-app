import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./MenuButtonStyles.css";

const MenuButton = ({ setMenuButtonToggle, menuButtonToggle }) => {
  return (
    <button
      onClick={() => setMenuButtonToggle((prev) => !prev)}
      className={`app-resume-menu-button ${!menuButtonToggle && "app-resume-menu-button-clicked"}`}
    >
      <FontAwesomeIcon icon={faBars} />
    </button>
  );
};

export default MenuButton;
