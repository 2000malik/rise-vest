/* eslint-disable no-unused-vars */
//
import { Button, Header } from "../shared";
import Community from "../../assets/images/community.webp";
import styles from "./styles.module.css";
const a = "";
export const Join = () => {
  return (
    <section id="join">
      <div className={styles.container}>
        <div className={styles.sectionOne}>
          <div className={styles.sectionOneContent}>
            <Header> Join The Rise Community</Header>
            <p className={styles.para}>
              If you want to go far, go together. Our Telegram community
              surrounds you with others who can help you along your financial
              journey with tips, support, advice and learning. It&apos;s
              completely free and open to new and seasoned investors.
            </p>
            <Button className={styles.button}>Join Our community</Button>
          </div>
          <img alt="community-image" src={Community} width="600" />
        </div>
        <div className={styles.sectionTwo}></div>
      </div>
    </section>
  );
};
