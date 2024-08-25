import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserGraduate,
  faPen,
  faGem,
  faSuitcase,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import "./MenuNavbarStyles.css";

const MenuNavbar = () => {
  const handleScroll = (event) => {
    event.preventDefault();
    const target = event.currentTarget;
    const id = target.getAttribute("href")?.replace("#", "");
    const element = document.getElementById(String(id));
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <ul className="app-resume-menu-navbar">
      <li>
        <a onClick={handleScroll} href="#aboutMe">
          <FontAwesomeIcon icon={faUser} />
          <h5>About me</h5>
        </a>
      </li>
      <li>
        <a onClick={handleScroll} href="#education">
          <FontAwesomeIcon icon={faUserGraduate} />
          <h5>Education</h5>
        </a>
      </li>
      <li>
        <a onClick={handleScroll} href="#experience">
          <FontAwesomeIcon icon={faPen} />
          <h5>Experience</h5>
        </a>
      </li>
      <li>
        <a onClick={handleScroll} href="#skills">
          <FontAwesomeIcon icon={faGem} />
          <h5>Skills</h5>
        </a>
      </li>
      <li>
        <a onClick={handleScroll} href="#portfolio">
          <FontAwesomeIcon icon={faSuitcase} />
          <h5>Portfolio</h5>
        </a>
      </li>
      <li>
        <a onClick={handleScroll} href="#contacts">
          <FontAwesomeIcon icon={faLocationArrow} />
          <h5>Contacts</h5>
        </a>
      </li>
    </ul>
  );
};

export default MenuNavbar;
