import React, { useState, useEffect } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/16/solid";
import styles from "../styles";
import DestinationCard from "./DestinationCard";
import { destinations } from "../constants";

const TopDestinations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // Adjust the number of visible cards based on screen width
  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setVisibleCards(3);
      } else if (width >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + visibleCards) % destinations.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - visibleCards + destinations.length) % destinations.length
    );
  };

  const visibleDestinations = destinations
    .slice(currentIndex, currentIndex + visibleCards)
    .concat(
      destinations.slice(
        0,
        Math.max(0, currentIndex + visibleCards - destinations.length)
      )
    );

  return (
    <section
      className={`flex flex-col gap-4 ${styles.paddingY} ${styles.paddingX}`}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col justify-start items-start">
          <h4 className="text-secondary font-poppins uppercase font-semibold text-2xl">
            Top Destination
          </h4>
          <h2 className="font-bold font-poppins mb-5 text-[44px] leading-[50px]">
            Explore top destination
          </h2>
        </div>

        <div className="flex flex-row justify-center items-center gap-4">
          <button
            onClick={handlePrev}
            className="cursor-pointer bg-white hover:shadow-md rounded-full p-4 z-10"
            aria-label="Previous Destination"
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="cursor-pointer bg-white hover:shadow-md rounded-full p-4 z-10"
            aria-label="Next Destination"
          >
            <ArrowRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 overflow-hidden">
        {visibleDestinations.map((destination, index) => (
          <div
            key={index}
            className="transition-transform duration-500"
            style={{ minWidth: "350px", maxWidth: "100%" }}
          >
            <DestinationCard destination={destination} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopDestinations;
