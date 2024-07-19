import React from "react";
import "./EducationStyles.css";
import Header from "../header/Header";

const data = [
  {
    year: 2017,
    name: "Free University of Tbilisi",
    info: " Bachelor of Business Administration (ESM). Relevant coursework in Computer Programming: 1. Programming Methodologies 2. Web Development JavaScript 3. Working with Databases SQL",
  },
  {
    year: 2022,
    name: "Udemy",
    info: "The Web Developer Bootcamp 2022 Modern React with Redux",
  },
  {
    year: 2022,
    name: "Linkedin Learning Courses",
    info: "React.js Essential Training (2020) , Building Modern Projects with React , TypeScript Essential Training , JavaScript: Ajax and Fetch , Learning Git and GitHub , Vanilla JavaScript: Web Performance Optimization APIs , JavaScript: Client-Side Data Storage , ESLint: Integrating with Your Workflow",
  },
  {
    year: 2022,
    name: "Epam Systems - Front-End Development",
    info: "The course covered the basics of web development with HTML5, as well as CSS fundamentals and principles of responsive design. In the JavaScript Introduction section, the course focused on the basics of development in the most popular language for front-end development. After that, the CSS Advanced section covered tools for flexible placement of elements on the page. In JavaScript Advanced, the course continued with principles of OOP, along with an introduction to jQuery, JavaScript patterns, and MVC. Code organization and testing were studied in the JS Modules and JavaScript unit testing sections.",
  },
  {
    year: 2023,
    name: "Academy of Digital Industries",
    info: "web programming course - html css",
  },
  {
    year: 2023,
    name: "Academy of Digital Industries",
    info: "web programming course - Javascript",
  },
  {
    year: 2024,
    name: "Academy of Digital Industries",
    info: "web programming course - React",
  },
];

const Education = () => {
  return (
    <div id="education" className="app-resume-education">
      <Header header="Education" />
      <div className="app-resume-education-timeline">
        {data.map((edu) => (
          <div key={edu.name} className="app-resume-education-timeline-card">
            <div className="app-resume-education-timeline-card-year">
              {edu.year}
            </div>
            <div className="app-resume-education-timeline-card-content">
              <h3>{edu.name}</h3>
              <p>{edu.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
