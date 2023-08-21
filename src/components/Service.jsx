import React from "react";

const Service = ({ service }) => {
  return (
    <div className="bg-C_White flex flex-col text-center p-2 justify-center items-center w-40 shadow-md rounded-lg hover:shadow-sm hover:shadow-C_GreenSlit hover:scale-[1.05] transition duration-[0.12s] ease-in">
      <img src={service.logoURL} alt="logo" className="w-12 h-12" />
      <p className="text-sm text-C_TextBlack p-2">{service.description}</p>
    </div>
  );
};

export default Service;
