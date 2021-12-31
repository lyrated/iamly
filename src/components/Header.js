import React from "react";

function Header() {
  return (
    <header>
      <h1>
        <a href="#home" className="heading"><span className="flip">IAM</span> LY</a>
      </h1>
      <span className="subtitle">Software &amp; Web Developer</span>

      <nav className="navbar navbar-expand-sm navbar-dark" id="main">
        <ul className="nav navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;