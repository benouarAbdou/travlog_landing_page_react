import { useRef } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/16/solid";
import styles from "../styles";
import DestinationCard from "./DestinationCard";
import { destinations } from "../constants";
import Slider from "react-slick";
// Import CSS for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopDestinations = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true, // Center slides when less than max number shown
    centerPadding: "0px", // No padding around centered slides
    responsive: [
      {
        breakpoint: 1400, // Large screens
        settings: {
          slidesToShow: 2,
          centerMode: true
        }
      },
      {
        breakpoint: 768, // Medium screens
        settings: {
          slidesToShow: 1,
          centerMode: true
        }
      },
      {
        breakpoint: 480, // Small screens
        settings: {
          slidesToShow: 1,
          centerMode: true
        }
      }
    ]
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

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
      <div>
        <Slider ref={sliderRef} {...settings}>
          {destinations.map((destination) => (
            <div key={destination.id} className="px-8">
              <DestinationCard destination={destination} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TopDestinations;
