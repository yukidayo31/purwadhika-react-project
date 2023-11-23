import React from "react";
import "./portfolio.css";
import Pic1 from "../../assets/p1.png";
import Pic2 from "../../assets/p2.png";
import Pic3 from "../../assets/p3.png";
import Pic4 from "../../assets/p4.png";
import Pic5 from "../../assets/p5.png";
import Pic6 from "../../assets/p6.png";

const data = [
  {
    id: 1,
    image: Pic1,
    title: "Web Dashboard & Visualization",
    github: "https://github.com/",
    demo: "https://dribbble.com/",
  },
  {
    id: 2,
    image: Pic2,
    title: "Charts Templates & Infographics  in Figma",
    github: "https://github.com/",
    demo: "https://dribbble.com/",
  },
  {
    id: 3,
    image: Pic3,
    title: "Dashboard UI Kit for Data Design Web Apps",
    github: "https://github.com/",
    demo: "https://dribbble.com/",
  },
  {
    id: 4,
    image: Pic4,
    title: "Maintaining Tasks and Tracking Progress",
    github: "https://github.com/",
    demo: "https://dribbble.com/",
  },
  {
    id: 5,
    image: Pic5,
    title: "Charts Templates & Infographics  in Figma",
    github: "https://github.com/",
    demo: "https://dribbble.com/",
  },
  {
    id: 6,
    image: Pic6,
    title: "Charts Templates & Infographics  in Figma",
    github: "https://github.com/",
    demo: "https://dribbble.com/",
  },
];

const Portfolio = () => {
  return (
    <div>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Github
                </a>
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
