import React from "react";
import "./footer.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        SITI FZ
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.youtube.com/channel/UCTD_lnQKJSkjj8HgXfrUPZg">
          <FaYoutube />
        </a>
        <a href="https://www.youthttps://www.linkedin.com/in/siti-fz-b098231aa/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/yukidayo31">
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; SITI FZ. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
