import React from "react";
import Service from "./Service";

//<a href="https://www.flaticon.com/free-icons/restaurant" title="restaurant icons">Restaurant icons created by Eucalyp - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/swimming" title="swimming icons">Swimming icons created by Chattapat - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/pay" title="pay icons">Pay icons created by amonrat rungreangfangsai - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/credit-card" title="credit card icons">Credit card icons created by Vectors Market - Flaticon</a>
//<a href="https://www.flaticon.com/free-icons/assistance" title="assistance icons">Assistance icons created by Flat Icons - Flaticon</a>
const Services = () => {
  const services = [
    {
      id: 1,
      logoURL: "../../public/online-payment.png",
      description: "Lorem, ipsum dolor sit amet consectetur elit.",
    },
    {
      id: 2,
      logoURL: "../../public/swimming.png",
      description: "Lorem, ipsum dolor sit amet consectetur elit.",
    },
    {
      id: 3,
      logoURL: "../../public/restaurant.png",
      description: "Lorem, ipsum dolor sit amet consectetur elit.",
    },
    {
      id: 4,
      logoURL: "../../public/online-payment.png",
      description: "Lorem, ipsum dolor sit amet consectetur elit.",
    },
    {
      id: 5,
      logoURL: "../../public/home.png",
      description: "Lorem, ipsum dolor sit amet consectetur elit.",
    },
    {
      id: 6,
      logoURL: "../../public/restaurant.png",
      description: "Lorem, ipsum dolor sit amet consectetur elit.",
    },
  ];

  return (
    <div className="text-center flex flex-col ">
      <h1 className="text-gray-800 text-xl p-4 font-bold leading-tight">
        What Services, we give
      </h1>
      <div className="flex flex-wrap gap-3 justify-center items-center p-2">
        {services.map((service) => (
          <Service service={service} key={service.id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
