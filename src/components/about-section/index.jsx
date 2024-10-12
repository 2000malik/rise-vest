/* eslint-disable react/prop-types */
import styles from "./styles.module.css";
//
import partners from "../../assets/images/partners.webp";
import dollarInv from "../../assets/images/dollar-inv.webp";
import Best from "../../assets/images/what-is-best.webp";
import Goals from "../../assets/images/set-goal.webp";
import Reminder from "../../assets/images/reminder.webp";
//
import { Link } from "../shared";

function Feature({ img, title, content, link = "Start Investing Now", id }) {
  const isEven = id % 2 === 0;
  return (
    <div className={!isEven ? styles.featureCard2 : styles.featureCard}>
      <div>
        <h3
          className={
            isEven ? styles.featureCardTitle : styles.featureCardTitle2
          }
        >
          {title}
        </h3>
        <p
          className={
            isEven ? styles.featureCardContent : styles.featureCardContent2
          }
        >
          {content}
        </p>
        <Link link={link}/>
      </div>
      <div>
        <img alt={title} src={img} width="500" />
      </div>
    </div>
  );
}
const FEATURE_LIST = [
  {
    id: 0,
    img: dollarInv,
    title: "Invest your money in dollars",
    content:
      " By holding your investments in a stable currency, your money grows more over time and retains its value better.",
  },
  {
    id: 1,
    img: Best,
    title: "Choose what's best for you",
    content:
      "Unlike other platforms, Rise lets you pick between stocks, US real estate and fixed income, according to your risk appetite. That way you can spread your risk and tap into different investments all in one place. ",
  },
  {
    id: 2,
    img: Goals,
    title: "Set goals and reach them",
    content:
      "You can invest towards a goal on Rise--retirement, higher education, save for your home or travel budgets. Or create a goal of your own and invest periodically to achieve them. ",
  },
  {
    id: 3,
    img: Reminder,
    title: "We remember so you don't have to",
    content:
      "Our Auto-invest feature makes it easy to stay consistent, even when you forget. Set a funding amount, frequency and payment method and Rise will automatically fund your investment, on schedule. ",
  },
];
export const About = () => {
  return (
    <section id="about">
      <div className={styles.partners}>
        <img alt="partner-logo" src={partners} />
      </div>
      <div className={styles.aboutContents}>
        {FEATURE_LIST.map(({ img, title, content, id }) => (
          <Feature
            key={title}
            img={img}
            title={title}
            content={content}
            id={id}
          />
        ))}
      </div>
    </section>
  );
};
