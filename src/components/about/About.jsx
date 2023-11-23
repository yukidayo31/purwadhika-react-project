import React from "react";
import "./about.css";
import Me from "../../assets/profile-pic.jpeg";
import { FaAward } from "react-icons/fa6";
import { LuUsers2 } from "react-icons/lu";
import { MdOutlineFolderCopy } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <LuUsers2 className="about__icon" />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>

            <article className="about__card">
              <MdOutlineFolderCopy className="about__icon" />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
            reprehenderit quo, placeat sunt aliquid natus voluptas nobis
            molestiae a deserunt impedit, iure cum totam earum, necessitatibus
            repellat reiciendis maxime inventore?
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
