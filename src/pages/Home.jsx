import React from "react";
import Navbar from "../components/Navbar";
import IntroInfo from "../components/IntroInfo";

const Home = () => {
  return (
    <div className="h-full w-screen">
      <Navbar />
      <IntroInfo />
    </div>
  );
};

export default Home;
