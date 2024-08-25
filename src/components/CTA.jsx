import React from "react";
import styles from "../styles";
import MainButton from "./MainButton";
import { mail } from "../assets";
const CTA = () => {
  return (
    <section
      className={`flex flex-col justify-center items-center rounded-[20px] ${styles.paddingY} ${styles.paddingX} ${styles.marginX} ${styles.marginY} bg-yellow-50`}
    >
      <h4 className="text-secondary font-poppins text-center uppercase font-semibold text-2xl mb-4">
        subscribe to our newsletter
      </h4>
      <h2 className=" font-bold font-poppins mb-8 max-w-[800px] text-center	text-[44px] leading-[50px]">
        Prepare yourself & let’s explore the beauty of the world
      </h2>

      <div className="flex items-center gap-4">
        <div className="relative flex items-center">
          <img
            src={mail} // Replace with your image path
            alt="Email Icon"
            className="absolute left-4 w-6 h-6 " // Adjust size and position as needed
          />
          <input
            type="email"
            placeholder="Your email"
            className="pl-14 pr-6 py-3 rounded-full border-none focus:outline-none"
          />
        </div>
        <MainButton text={"Subscribe"} />
      </div>
    </section>
  );
};

export default CTA;
