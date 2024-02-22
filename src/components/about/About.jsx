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

            {/* <article className="about__card">
              <LuUsers2 className="about__icon" />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article> */}

            <article className="about__card">
              <MdOutlineFolderCopy className="about__icon" />
              <h5>Projects</h5>
              <small>3 Completed</small>
            </article>
          </div>
          <p>
            A GIS enthusiast, IPB graduate with a major of Land Resources
            Management who’s passionate and versatile with more than 3 years of
            experience in Remote Sensing and GIS Analysis and 2.5 years of
            related work experience. I’m currently into web development
            programming using JavaScript by learning and doing (building
            full-stack projects) and hopefully can implement it into my
            expertise as well.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let&apos;s Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
