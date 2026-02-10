import React from "react";
import Hero from "../Components/home/Hero";
import Services from "./Services";
import Footer from "../Components/Layout/Footer";
import About from "../Components/home/About";
import SplashCursor from "../Components/SplashCursor";
const Home = () => {
  return (
    <>
      <SplashCursor />
      <Hero />
      <Services />
      <About />
      <Footer />
    </>
  );
};

export default Home;
