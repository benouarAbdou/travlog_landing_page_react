import React from "react";
import styles from "../styles";
import { clients } from "../constants";

const Companies = () => (
  <section className={`flex md:flex-row flex-wrap  ${styles.paddingX}`}>
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
