import React from "react";
import Navbar from "../components/Navbar";
import IntroInfo from "../components/IntroInfo";
import Services from "../components/Services";
import Blog from "../components/Blog";
import Pricing from "../components/Pricing";
import Comments from "../components/Comments";

const Home = () => {
  return (
    <div className="h-full w-screen">
      <Navbar />
      <IntroInfo />
      <Services />
      <Blog />
      <Pricing />

      <div className="bg-C_DullWhite my-8 p-4 flex flex-col justify-center items-center gap-1">
        <img
          className="w-1/2"
          src="../../public/undraw_artificial_intelligence_re_enpp.svg"
          alt="research"
        />

        <div>
          <h1 className="text-xl font-bold">
            Create Content with Proven Popularity
          </h1>
          <div className="h-1 w-[90%] my-1 bg-C_Green rounded-xl"></div>
          <p className="text-sm text-C_TextBlack  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            sint debitis cupiditate sed est ullam expedita ratione libero,
            eveniet recusandae vitae.
          </p>
        </div>
      </div>

      <Comments />
    </div>
  );
};

export default Home;
