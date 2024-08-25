import React, { useState } from "react";
import "./MenuStyles.css";
import user from "../../assets/user.jpg";
import MenuNavbar from "../menuNavbar/MenuNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import MenuButton from "../menuButton/MenuButton";
import { Link } from "react-router-dom";
import routes from "../../constants/routes";

const Menu = () => {
  const [menuButtonToggle, setMenuButtonToggle] = useState(true);
  return (
    <div
      className={`app-resume-menu-containers ${!menuButtonToggle && "app-resume-menu-containers-clicked"}`}
    >
      <div
        className={`app-resume-menu ${!menuButtonToggle && "app-resume-menu-clicked"}`}
      >
        <div className="app-resume-menu-container">
          <div className="app-resume-menu-mainInfo">
            <img className="app-mainInfo-user" alt="user" src={user} />
            <h2 className="app-mainInfo-name">Nika Kurtskhalia</h2>
          </div>
          <MenuNavbar menuButtonToggle={menuButtonToggle} />
        </div>
        <Link to={routes.home}>
          <div className="app-resume-manu-button">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>go back</span>
          </div>
        </Link>
      </div>
      <MenuButton
        menuButtonToggle={menuButtonToggle}
        setMenuButtonToggle={setMenuButtonToggle}
      />
    </div>
  );
};

export default Menu;
