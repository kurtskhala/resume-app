import React from "react";
import user from "../../assets/user.jpg";
import "./MainInfoStyles.css";
import { Link } from "react-router-dom";
import routes from "../../constants/routes";

const MainInfo = () => {
  return (
    <div className="app-mainInfo">
      <img className="app-mainInfo-user" alt="user" src={user} />
      <h2 className="app-mainInfo-name">Nika Kurtskhalia</h2>
      <h4 className="app-mainInfo-job">Programmer</h4>
      <p className="app-mainInfo-jobInfo">
        I am a developer specialized in frontend technologies and React,
        dedicated to creating responsive and high-quality web applications.
      </p>
      <Link to={routes.resume}>
        <button className="app-mainInfo-button">Know more</button>
      </Link>
    </div>
  );
};

export default MainInfo;
