import HeroSection from "./components/HeroSection";

const Home = () => {
  const data = {
    name: "Web Technical",
    image: "./images/hero.png",
  };
  return <HeroSection {...data} />;
};

export default Home;
