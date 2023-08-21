import React from "react";

const IntroInfo = () => {
  return (
    <div className="h-2/3 flex flex-col gap-2 items-center justify-center">
      <img
        className="mt-6 w-[70%]"
        src="../../public/undraw_code_thinking_re_gka2.svg"
        alt="focusing"
      />
      <div className="p-3">
        <h2 className="text-gray-800 text-2xl font-bold mt-4 leading-tight">
          Your customixed Token For Globally Complient Distribution Events
        </h2>
        <p className="my-6 text-sm text-C_TextBlack">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
        </p>
        <button className=" text-C_White bg-C_Green px-3 py-2 outline-none rounded-3xl ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default IntroInfo;
