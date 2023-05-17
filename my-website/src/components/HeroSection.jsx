import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const HeroSection = () => {
  const Wrapper = styled.section``;

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-heading">THIS IS ME</p>
          <h1 className="hero-heading">WEB TECHNICAL</h1>
          <p className="hero-para">
            I'm Gurjant singh.A Software Devloper and youtuber.A Software
            Devloper , youtuber and freelancer
          </p>
        </div>

        <button className="btn hireme-btn">
          <NavLink to="/contact">hire me</NavLink>
        </button>

        <div className="section-hero-image"></div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;
