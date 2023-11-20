import React from "react";
import "./nav.css";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
  return (
    <nav>
      <a href="#" className="active">
        <IoHome />
      </a>
      <a href="#about">
        <FaUser />
      </a>
      <a href="#experience">
        <FaBook />
      </a>
      <a href="#services">
        <RiServiceLine />
      </a>
      <a href="#contact">
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
