import React from "react";

const FeatureCard = ({ feature }) => {
  return (
    <div className="flex gap-10 items-center">
      <div
        className={`${feature.color} p-6 rounded-[15px] flex justify-center items-center`}
      >
        <img
          src={feature.icon}
          alt={`${feature.title} icon`}
          className="w-[32px] h-[32px]"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold text-2xl font-poppins">{feature.title}</h1>
        <p className="text-sm font-poppins">{feature.content}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
