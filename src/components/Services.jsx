import React from "react";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      id: 1,
      logoURL: "/../../public/online-payment.png",
      description: "Lorem, ipsum dolor sit amet consectetur elit.",
    },
    {
      id: 2,
      logoURL: "/../../public/swimming.png",
      description: "Lorem, ipsum dolor sit amet consectetur elit.",
    },
    {
      id: 3,
      logoURL: "../../public/restaurant.png",
      description: "Lorem, ipsum dolor sit amet consectetur elit.",
    },
    {
      id: 4,
      logoURL: "/../../public/online-payment.png",
      description: "Lorem, ipsum dolor sit amet consectetur elit.",
    },
    {
      id: 5,
      logoURL: "../../public/home.png",
      description: "Lorem, ipsum dolor sit amet consectetur elit.",
    },
    {
      id: 6,
      logoURL: "/../../public/restaurant.png",
      description: "Lorem, ipsum dolor sit amet consectetur elit.",
    },
  ];

  return (
    <div id="Services" className="text-center flex flex-col  pb-9 ">
      <h1 className="text-gray-800 text-xl p-4 font-bold leading-tight">
        What Services, we give
      </h1>
      <div className="flex flex-wrap gap-3 justify-center items-center p-3">
        {services.map((service) => (
          <Service service={service} key={service.id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
