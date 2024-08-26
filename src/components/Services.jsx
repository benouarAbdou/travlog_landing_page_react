import React from "react";
import Slider from "react-slick";
import styles from "../styles";
import { services } from "../constants";
import ServiceCard from "./ServiceCard";

// Import CSS for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true
  };

  return (
    <section
      className={`${styles.paddingY} ${styles.paddingX} flex flex-col md:flex-row items-center`}
    >
      {/* Left side */}
      <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
        <h4 className="text-secondary font-poppins uppercase font-semibold text-2xl mb-4">
          Services
        </h4>
        <h2 className="font-bold font-poppins text-[44px] leading-[50px]">
          Our top value <br /> categories for you
        </h2>
      </div>

      {/* Right side - Carousel */}
      <div className="w-full md:w-1/2">
        <Slider {...settings}>
          {services.map((service) => (
            <div key={service.id} className="px-2">
              <ServiceCard service={service} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Services;
