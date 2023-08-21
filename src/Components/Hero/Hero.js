import React from "react";
import "/media/hp/107 GB Volume1/WebDev/Projects/portfolio/src/Components/Hero/Hero.css";
import PortfolioHero from "/media/hp/107 GB Volume1/WebDev/Projects/portfolio/src/Assests/PortfolioHero.png";

const Hero = () => {
  return (
    <>
    <div className="hero">
      <div className="hero_object">
        <img
          src={PortfolioHero}
          className="hero_illustration"
          alt="Bootstrap Themes"
          width={650}
          loading="lazy"
        />
      </div>
      <div className="hero_body">
        <h1 className="hero_heading">Hello!</h1>
        <p className="hero_subheading">
          {/* I'm Rehan, <br />a Passionate web developer <br />
          dedicated to crafting innovative digital solutions. */}
          I'm Rehan, <br /> a web developer <br /> who builds websites.{" "}
        </p>
      </div>
    </div>
    <hr />
    </>
  );
};

export default Hero;
