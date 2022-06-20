import React from "react";
import { useMediaQuery } from "../../helpers/useMediaQuery";

interface NavbarProps{
  isBreakPoint: boolean
}

const Navbar = (props: NavbarProps) => {
  const {isBreakPoint} = props
  
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <i className="uil uil-user" /> Ghani
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  <span data-hover="About">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#above-project" className="nav-link">
                  <span data-hover="Projects">Projects</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#above-certificate" className="nav-link">
                  <span data-hover="Certificate">Certificate</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#above-resume" className="nav-link">
                  <span data-hover="Resume">Resume</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  <span data-hover="Contact">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
