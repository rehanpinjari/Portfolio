import React from "react";
import { BsGithub, BsLinkedin, BsMedium } from "react-icons/bs";
import { Link } from "react-router-dom";
import PortfolioLogoShape from "/media/hp/107 GB Volume1/WebDev/Projects/portfolio/src/Assests/PortfolioLogoShape.png";
import "/media/hp/107 GB Volume1/WebDev/Projects/portfolio/src/Components/Navbar/Navbar.css"; // Assuming you have a separate CSS file for Navbar styles

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="">
            <img
              className="nav-logo d-inline-block align-text-top"
              src={PortfolioLogoShape}
              alt="Pinjari Rehan"
              width={80}
            />
            P. Rehan
          </a>
        </div>
        <div className="icon d-flex justify-content-end">
          <div className="github-icon">
          <a href="https://github.com/rehanpinjari">
            <BsGithub size={24} />
          </a>
          </div>
          <div className="linkedin-icon">
          <a href="https://www.linkedin.com/in/pinjari-rehan-a6aba1234/">
            <BsLinkedin size={24} />
            </a>
          </div>{" "}
          <div className="medium-icon">
          <a href="https://medium.com/@pinjarirehan">
            <BsMedium size={28} />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
