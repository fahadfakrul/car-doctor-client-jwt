import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://car-doctor-server-roan-psi.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-20">
      <div className="text-center space-y-5">
        <h3 className="text-[#FF3811] font-bold text-xl">Services</h3>
        <h2 className="text-black text-5xl font-bold">Our Service Area</h2>
        <p className="text-[#737373] ">
          Our service area boasts top-notch expertise, ensuring reliable car
          care <br /> and customer satisfaction every time.
        </p>
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)}
      </div>
    </div>
  );
};

export default Services;
