import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "./BottomButtonStyles.css";

const BottomButton = () => {
  return (
    <button
      onClick={() => {
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="app-resume-bottombutton"
    >
      <FontAwesomeIcon icon={faAngleUp} />
    </button>
  );
};

export default BottomButton;
