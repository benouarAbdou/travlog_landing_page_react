import React from "react";

const StatBox = ({ number, text }) => {
  return (
    <div className="flex flex-col  justify-center items-center border-2 max-w-[200px] rounded-[20px] px-8 py-6 ">
      <h1 className="font-bold text-tertiary text-2xl">{number}</h1>
      <p>{text}</p>
    </div>
  );
};

export default StatBox;
