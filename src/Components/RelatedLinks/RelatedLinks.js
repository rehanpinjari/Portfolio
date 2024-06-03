import React from "react";
import "/media/hp/107 GB Volume1/WebDev/30ProjectsToMasterWebDev/01__Portfolio/portfolio/src/Components/RelatedLinks/RelatedLinks.css";
// import Logo2 from "/media/hp/107 GB Volume/WebDev/Projects/portfolio/src/Assests/Logo2.png";
import PortfolioLogoShape from "/media/hp/107 GB Volume1/WebDev/30ProjectsToMasterWebDev/01__Portfolio/portfolio/src/Assests/PortfolioLogoShape.png";

const RelatedLinks = () => {
  return (
    <div className="links_container">
      <div className="links_title">
        <img cla src={PortfolioLogoShape} width={80} alt="" />{" "}
        <p className="footer_headline">Contact</p>
      </div>
      <div className="related_links">
        <ul class="nav justify-content-end">
        <li class="nav-item">
            <a class="nav-link" href="https://medium.com/@pinjarirehan">
              Medium
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://twitter.com/prmdev">
              Twitter
            </a>
          </li>
        <li class="nav-item">
            <a class="nav-link" href="https://www.linkedin.com/in/pinjari-rehan-a6aba1234/">
              Linkedin
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/rehanpinjari">
              Github
            </a>
          </li>
         </ul>
      </div>
    </div>
  );
};

export default RelatedLinks;
