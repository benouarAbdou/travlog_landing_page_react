import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="flex flex-col items-center h-[400px] min-w-[250px] bg-white z-10 rounded-[20px] justify-center   py-8 px-2">
      <img src={service.img} alt="" />
      <h1 className=" font-bold font-poppins my-8 text-center w-[200px]	text-[28px] leading-[30px]">
        {service.title}
      </h1>
      <p className="text-center w-[200px] font-poppins text-gray-600">
        {service.content}
      </p>
    </div>
  );
};

export default ServiceCard;
