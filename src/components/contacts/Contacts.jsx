import React from "react";
import Header from "../header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./ContactsStyles.css";

const Contacts = () => {
  return (
    <div id="contacts" className="app-resume-contacts">
      <Header header="Contacts" />
      <div className="app-resume-contacts-container">
        <div className="app-resume-contact">
          <FontAwesomeIcon icon={faPhone} className="app-resume-contact-icon" />
          <a href="tel:+995551508596" className="app-resume-contact-text">
            +995551508596
          </a>
        </div>
        <div className="app-resume-contact">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="app-resume-contact-icon"
          />
          <a
            href="mailto:kurtskhalia99@gmail.com"
            className="app-resume-contact-text"
          >
            kurtskhalia99@gmail.com
          </a>
        </div>
        <div className="app-resume-contact">
          <FontAwesomeIcon
            icon={faGithub}
            className="app-resume-contact-icon"
          />
          <a
            href="https://github.com/kurtskhala"
            className="app-resume-contact-text"
          >
            GitHub
          </a>
        </div>
        <div className="app-resume-contact">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="app-resume-contact-icon"
          />
          <a
            href="https://www.linkedin.com/in/nika-kurtskhalia-718b3a202/"
            className="app-resume-contact-text"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
