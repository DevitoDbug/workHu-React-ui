import React from "react";

const Footer = () => {
  return (
    <div className="bg-C_DullWhite max-w-[1240px] mx-auto py-4 px-2 flex flex-col justify-center items-center text-center text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-C_Green">REACT.</h1>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>

        <div className="text-[70%]">
          <a
            href="https://www.flaticon.com/free-icons/restaurant"
            title="restaurant icons"
          >
            Restaurant icons created by Eucalyp - Flaticon
          </a>
          <a
            href="https://www.flaticon.com/free-icons/swimming"
            title="swimming icons"
          >
            Swimming icons created by Chattapat - Flaticon
          </a>
          <a href="https://www.flaticon.com/free-icons/pay" title="pay icons">
            Pay icons created by amonrat rungreangfangsai - Flaticon
          </a>
          <a
            href="https://www.flaticon.com/free-icons/credit-card"
            title="credit card icons"
          >
            Credit card icons created by Vectors Market - Flaticon
          </a>
          <a
            href="https://www.flaticon.com/free-icons/assistance"
            title="assistance icons"
          >
            Assistance icons created by Flat Icons - Flaticon
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6"></div>
    </div>
  );
};

export default Footer;
