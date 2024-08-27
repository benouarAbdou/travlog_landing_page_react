import React, { useState } from "react";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  StarIcon
} from "@heroicons/react/16/solid";
import { feedback } from "../constants";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedback.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + feedback.length) % feedback.length
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-center text-pink-500 font-bold text-2xl mb-2 uppercase">
        Testimonials
      </h2>
      <h3 className="font-bold font-poppins mb-5 text-center text-[44px] leading-[50px]">
        Trust our clients
      </h3>

      <div className="relative">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white hover:shadow-md rounded-full  md:p-4 p-2"
          aria-label="Previous Testimonial"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>

        <div className="text-center px-12">
          <div className="mb-8">
            <img
              src={feedback[currentIndex].img}
              alt={feedback[currentIndex].name}
              className="w-24 h-24 rounded-full mx-auto"
            />
          </div>
          <h4 className="text-2xl font-bold text-tertiary mb-2">
            {feedback[currentIndex].name}{" "}
            <span className="text-gray-600 font-normal">
              / {feedback[currentIndex].title}
            </span>
          </h4>
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-6 h-6 text-yellow-400 " />
            ))}
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {feedback[currentIndex].content}
          </p>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary hover:shadow-md rounded-full md:p-4 p-2"
          aria-label="Next Testimonial"
        >
          <ArrowRightIcon className="w-6 h-6 text-white" />
        </button>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {feedback.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-secondary" : "bg-gray-300"}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
