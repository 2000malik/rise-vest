/* eslint-disable react/prop-types */

import styles from "./styles.module.css";
import FixedIncome from "../../assets/images/fixed-income.webp";
import Stock from "../../assets/images/stock.webp";
import Estate from "../../assets/images/real-estate.webp";
// 
import { Header, Link } from "../shared";

export const Assets = () => {
  const AssetsCard = ({ linkTag, background, img, title, content }) => {
    return (
      <div className={styles.assetsCard}>
        <div style={{ background: background }} className={styles.cardHeader}>
          <div className={styles.FixedIncome}>
            <img alt={title} src={img} width="80" />
          </div>
        </div>
        <div className={styles.cardContent}>
          <h4>{title}</h4>
          <p>{content}</p>
          <p>
            <span className={styles.cardTag}>Historical returns: </span>14% per
            annum
          </p>
          <p>
            <span className={styles.cardTag}>Risk Level: </span> Medium
          </p>
        </div>
        <div className={styles.cardLink}>
          <Link link={linkTag} />
        </div>
      </div>
    );
  };
  const CARDS = [
    {
      background: "#FFF4F0",
      img: Stock,
      title: "Stock",
      content:
        " We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.",
      linkTag: "Learn how Stocks work",
    },
    {
      background: "#F6F2FF",
      img: Estate,
      title: "Real Estate",
      content:
        "Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.",
      linkTag: "Learn how Real Estate work",
    },
    {
      background: "#ECFEFE",
      img: FixedIncome,
      title: "Fixed Income",
      content:
        "A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money from inflation while earning steady returns.",
      linkTag: "Learn how Fixed Income work",
    },
  ];
  return (
    <section id="assets" className={styles.assets}>
      <div className={styles.header}>
        <Header>Asset Classes</Header>
        <p>It’s your money, choose where you invest it</p>
      </div>
      <div className={styles.aboutContents}>
        {CARDS.map(({ background, img, title, content, linkTag }) => (
          <AssetsCard
            key={linkTag}
            background={background}
            img={img}
            title={title}
            content={content}
            linkTag={linkTag}
          />
        ))}
      </div>
    </section>
  );
};
