import React from "react";
import styles from "../styles";
import { travel_point } from "../assets";
import StatBox from "./StatBox";

const TravelPoint = () => (
  <section
    id="special deals"
    className={`flex md:flex-row flex-col ${styles.paddingY} ${styles.paddingX}`}
  >
    <div className="flex-1 flex">
      <img
        src={travel_point}
        alt="travel_point"
        className="w-[100%] h-[100%] relative z-[5]"
      />
    </div>

    <div className="flex flex-1 flex-col justify-center items-start mb-5">
      <h4 className="text-secondary font-poppins uppercase font-semibold	text-2xl">
        Travel point
      </h4>
      <h2 className=" font-bold font-poppins mb-5	text-[44px] leading-[50px]">
        We helping you find <br /> your dream location
      </h2>
      <p className={`${styles.paragraph} mb-10`}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC.
      </p>

      <div className="grid grid-cols-2 gap-x-6 gap-y-6 ">
        <StatBox number={"500+"} text={"Holiday Package"} />
        <StatBox number={"100"} text={"Luxury Hotel"} />
        <StatBox number={"7"} text={"Premium Airlines"} />
        <StatBox number={"2K+"} text={"Happy Customer"} />
      </div>
    </div>
  </section>
);

export default TravelPoint;
