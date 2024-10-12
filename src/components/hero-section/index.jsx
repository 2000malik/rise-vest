/* eslint-disable react/prop-types */
import styles from "./styles.module.css";
//
import logo from "../../assets/images/logo.webp";
import PhoneTwo from "../../assets/images/phone-two.webp";
import PhoneSmall from "../../assets/images/phone-small.webp";
//
import { Button } from "../shared";
import {
  Bar,
  Apple,
  PlayStore,
  Circle,
  Circle2,
  Circle3,
  Circle4,
  Circle5,
} from "../../assets/svgs";

function StoreButton({ logo, store = "" }) {
  return (
    <Button className={styles.stores}>
      <div className={styles.storeContent}>
        <img alt="apple-logo" src={logo} />
        <div className={styles.howToDown}>
          <p className={styles.download}>Download on the</p>
          <span className={styles.downloadFrom}>{store}</span>
        </div>
      </div>
    </Button>
  );
}
export const Stores = () => {
  return (
    <div className={styles.storesContainer}>
      <StoreButton logo={Apple} store="APP Store" />
      <StoreButton logo={PlayStore} store="Google Play" />
    </div>
  );
};
export const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <header>
        <nav className={styles.nav}>
          <a href="/">
            <img src={logo} alt="logo" width="80" height="25" />
          </a>
          <button className={styles.menuBar} aria-label="bar">
            <img alt="bar" src={Bar} width="80" height="25" />
          </button>
          <ul className={styles.navList}>
            <li className={styles.menu}>
              <a href="#">Home</a>
            </li>
            <li className={styles.menu}>
              <a href="#">Product</a>
            </li>
            <li className={styles.menu}>
              <a href="#">Investment Club</a>
            </li>
            <li className={styles.menu}>
              <a href="#">Blog</a>
            </li>
            <li className={styles.menu}>
              <a href="#">About Us</a>
            </li>
            <li className={styles.menu}>
              <a href="#">FAQS</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className={styles.circle1}>
        <img alt="circle" src={Circle} />
      </div>
      <div className={styles.circle2}>
        <img alt="circle" src={Circle2} />
      </div>
      <div className={styles.heroContent}>
        <div className={styles.content}>
          <h1>
            Dollar investments <br />
            that help you grow
          </h1>
          <p>
            We put your money in high quality assets that help <br /> you build
            wealth and achieve your financial goals.
          </p>
          <p className={styles.smallDevice}>
            Your personal wealth manager. Get started with a minimum of $10 and
          </p>
          <Stores />
          <div className={styles.circle3}>
            <img alt="circle" src={Circle3} />
          </div>
        </div>
        <div className={styles.contentImg}>
          <img alt="phone" src={PhoneTwo} className={styles.phone} />
          <div className={styles.circle4}>
            <img alt="circle" src={Circle4} />
          </div>
        </div>
        <div className={styles.phoneSmall}>
          <img alt="phone" src={PhoneSmall} width="80%" />
        </div>
        <div className={styles.circle5}>
          <img alt="circle" src={Circle5} />
        </div>
      </div>
    </section>
  );
};
