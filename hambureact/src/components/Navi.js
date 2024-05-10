import React from "react";
import "./Navi.css";

const Navi = () => {
  return (
    <div id="menuToggle" className="menuToggle">
      <input type="checkbox" />
      <span style={{ background: "black" }}></span>
      <span style={{ background: "black" }}></span>
      <span style={{ background: "black" }}></span>
      <ul id="menu">
        <li>
          <a href="/" className="active">
            A-Z
          </a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navi;
