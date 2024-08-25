import React from "react";
import { travlog } from "../assets"; // Make sure the path is correct
import { navLinks } from "../constants";
import styles from "../styles";

const Navbar = () => {
  return (
    <nav
      className={`flex justify-between items-center navbar py-6 ${styles.paddingX} ${styles.flexCenter} `}
    >
      <img src={travlog} alt="Travlog" className="w-[124px] h-[32px]" />
      <div>
        <ul className="list-none sm:flex gap-4 hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer text-[16px]  ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4 items-center">
        <a href="#" className="font-poppins font-bold">
          Login
        </a>
        <button
          type="button"
          className="px-6 py-3 bg-primary font-poppins  font-medium  text-white outline-none rounded-[30px]"
        >
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
