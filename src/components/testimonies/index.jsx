/* eslint-disable react/prop-types */

import { Header } from "../shared";
//
import Jesse from "../../assets/images/jesse.webp";
import Raye from "../../assets/images/raye.webp";
//
import styles from "./styles.module.css";

export const Testimonials = () => {
  function TestimonyCard({ para, img, name }) {
    return (
      <div className={styles.testimonyCard}>
        <p className={styles.para}>{para}</p>
        <div className={styles.customer}>
          <img alt={name} src={img} width="40" />{" "}
          <p className={styles.customerName}>{name}</p>
        </div>
      </div>
    );
  }
  const TESTIMONIES = [
    {
      para: " I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria.",
      img: Jesse,
      name: "Jesse",
    },
    {
      para: "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
      img: Raye,
      name: "Raye",
    },
    {
      para: " I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment from being depleted by devaluation and inflation that’s at an all-time high in Nigeria.",
      img: Jesse,
      name: "MALIK",
    },
    {
      para: " I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment.",
      img: Raye,
      name: "OJO",
    },
    {
      para: " I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment.",
      img: Raye,
      name: "GRACE",
    },
    {
      para: " I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment.",
      img: Raye,
      name: "KLA",
    },
    {
      para: " I chose Rise because of its leadership, wealth of knowledge and the people who support them. I invest with Rise in order to protect my savings and investment.",
      img: Raye,
      name: "SHADE",
    },
  ];
  return (
    <section id="testimonies" style={{ marginBottom: "100px" }}>
      <div className={styles.headerContent}>
        <Header className={styles.header}>From The People Who Use Rise</Header>
        <p className={styles.para}>
          Our mission at Risevest is to empower more people just like you to{" "}
          <br />
          achieve your personal financial goals.
        </p>
      </div>
      <div className={styles.testimonyContainer}>
        {TESTIMONIES.map(({ para, img, name }) => (
          <TestimonyCard key={name} para={para} img={img} name={name} />
        ))}
      </div>
    </section>
  );
};
