import React from "react";
import styles from "../styles";
import { clients } from "../constants";

const Companies = () => (
  <section className={`relative flex md:flex-row flex-wrap ${styles.paddingX}`}>
    <div className="absolute top-1/2 -right-48 w-[500px] h-[500px] transform -translate-y-1/2 rounded-full bg-gradient-radial from-tertiary opacity-30 to-transparent blur-[150px]" />
    {clients.map((client) => (
      <div
        key={client.id}
        className="flex-1 gap-4 flex justify-center items-center"
      >
        <img
          src={client.logo}
          alt={`logo of ${client.id}`}
          className="min-w-[150px] object-contain my-2 mx-2"
        />
      </div>
    ))}
  </section>
);

export default Companies;
