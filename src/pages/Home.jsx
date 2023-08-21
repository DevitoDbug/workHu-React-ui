import React from "react";
import Navbar from "../components/Navbar";
import IntroInfo from "../components/IntroInfo";
import Services from "../components/Services";
import Blog from "../components/Blog";
import Pricing from "../components/Pricing";

const Home = () => {
  return (
    <div className="h-full w-screen">
      <Navbar />
      <IntroInfo />
      <Services />
      <Blog />
      <Pricing />
    </div>
  );
};

export default Home;
