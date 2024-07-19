import React, { useState } from "react";
import "./PortfolioStyles.css";
import Header from "../header/Header";
import Code from "../../assets/Code.jpg";
import Ui from "../../assets/Ui.jpg";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const items = [
    {
      id: 1,
      type: "code",
      img: Code,
      text: "This movie app, developed using React, HTML, and CSS, provides users with a top-rated movie experience. It features a user-friendly interface allowing users to sign up and sign in, with data seamlessly sent to the backend for a smooth and responsive user experience. The app showcases a dynamic list of movies.",
      link: "https://github.com/kurtskhala/react-movie-app-v2",
    },
    {
      id: 2,
      type: "ui",
      img: Ui,
      text: "This commercial website, developed using HTML, CSS, and a bit of JavaScript, showcases a modern and responsive design. It features a clean and intuitive layout that ensures a seamless user experience across various devices. The high-quality visuals and responsive elements enhance the overall aesthetic and functionality of the site.",
      link: "https://github.com/kurtskhala/final-project",
    },
    {
      id: 3,
      type: "code",
      img: Code,
      text: "This React-based movie app leverages the MovieDB API to provide users with an extensive database of top-rated movies. Featuring a sleek and responsive design, the app allows users to sign up and sign in, ensuring a personalized experience. The integration with the MovieDB API enables real-time updates and detailed movie information.",
      link: "https://github.com/kurtskhala/react-rmdb",
    },
    {
      id: 4,
      type: "code",
      img: Code,
      text: "This PHP-based application allows users to efficiently manage products, including adding and deleting items. Designed with a user-friendly interface, the app ensures seamless product management.",
      link: "https://github.com/kurtskhala/scandiweb_productcart_front",
    },
  ];

  const filteredItems =
    filter === "all" ? items : items.filter((item) => item.type === filter);

  return (
    <div id="portfolio" className="app-resume-portfolio">
      <Header header="Portfolio" />

      <div className="filters">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        /
        <button
          className={filter === "code" ? "active" : ""}
          onClick={() => setFilter("code")}
        >
          Code
        </button>
        /
        <button
          className={filter === "ui" ? "active" : ""}
          onClick={() => setFilter("ui")}
        >
          UI
        </button>
      </div>
      <div className="items">
        {filteredItems.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.img} alt={item.type} />
            <div className="overlay">
              <div className="text">
                <p>{item.text}</p>
                <a href={item.link} target="blank">
                  View resource
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
