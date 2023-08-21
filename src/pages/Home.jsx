import React from "react";
import Navbar from "../components/Navbar";
import IntroInfo from "../components/IntroInfo";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="h-full w-screen">
      <Navbar />
      <IntroInfo />
      <Services />
    </div>
  );
};

export default Home;
