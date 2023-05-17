import React from "react";
import HeroSection from "./components/HeroSection";

const About = () => {
  const data = {
    name: "Gurjant Singh",
    image: "./images/about.webp",
  };
  return <HeroSection {...data} />;
};
// dsdsds
export default About;
