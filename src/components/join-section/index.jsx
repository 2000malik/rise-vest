/* eslint-disable no-unused-vars */
//
import { Button, Header } from "../shared";
import Community from "../../assets/images/community.webp";
import Phone from "../../assets/images/phone.webp";
import styles from "./styles.module.css";
import { Stores } from "../hero-section";
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
        <div className={styles.sectionTwo}>
          <div className={styles.content}>
            <p className={styles.title}>Download The Rise App</p>
            <Header className={styles.header}>
              Join our 100,000 users investing <br/> and setting long term goals!
            </Header>
            <p className={styles.title2}>Dollar investments that help you grow.</p>
            <Stores />
          </div>
          <img alt="phone-app" src={Phone} width="210" className={styles.img} />
        </div>
      </div>
    </section>
  );
};
