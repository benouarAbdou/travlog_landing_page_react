import React from "react";

const MainButton = ({ text }) => {
  return (
    <button
      type="button"
      className="px-6 py-3 bg-primary font-poppins  font-medium  text-white outline-none rounded-[30px]"
    >
      {text}
    </button>
  );
};

export default MainButton;
