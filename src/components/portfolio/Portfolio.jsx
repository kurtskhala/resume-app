import React, { useState } from "react";
import "./PortfolioStyles.css";
import Header from "../header/Header";
import { portfolio } from "../../constants/data";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all"
      ? portfolio
      : portfolio.filter((item) => item.type === filter);

  return (
    <div id="portfolio" className="app-resume-portfolio">
      <Header header="Portfolio" />

      <div className="app-resume-portfolio-filters">
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
      <div className="app-resume-portfolio-items">
        {filteredItems.map((item) => (
          <div className="app-resume-portfolio-item" key={item.id}>
            <img src={item.img} alt={item.type} />
            <div className="app-resume-portfolio-item-overlay">
              <div className="app-resume-portfolio-item-text">
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
