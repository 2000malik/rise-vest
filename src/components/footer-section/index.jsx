/* eslint-disable react/prop-types */

//
import logo from "../../assets/images/black-logo.webp";
import { ArrowUp } from "../../assets/svgs";
import styles from "./styles.module.css";

export const Footer = () => {
  function FooterHeader({ children }) {
    return <h6 className={styles.footerHeader}>{children}</h6>;
  }
  function LinkTag({ label = "", showIcon = false, link = "#" }) {
    return (
      <a href={link} className={styles.footerLink}>
        {label}
        {showIcon && (
          <img alt="arrow-up" style={{ marginLeft: 5 }} src={ArrowUp} />
        )}
      </a>
    );
  }
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.content}>
        <a href="/">
          <img src={logo} alt="logo" width="80" height="25" />
        </a>
        <LinkTag label="About Us" />
        <LinkTag label="Careers" />
        <LinkTag label="FAQS" />
        <LinkTag label="Contact Info" />
        <LinkTag label="Press" />
        <LinkTag label="Rise Impact" />
      </div>
      <div className={styles.content}>
        <FooterHeader>FooterHeader</FooterHeader>
        <LinkTag label="Investment Club" showIcon={true} />
        <LinkTag label="Blog" showIcon={true} />
      </div>
      <div className={styles.content}>
        <FooterHeader>FooterHeader</FooterHeader>
        <LinkTag label="Rise App" />
        <LinkTag label="Wallet" />
        <LinkTag label="Asset Classes" />
      </div>
      <div className={styles.content}>
        <FooterHeader>FooterHeader</FooterHeader>
        <LinkTag label="O8141258672" showIcon={true} />
        <LinkTag
          label="hello@rise.capital"
          link="mailto:kojomalik2000@gmail.com"
          showIcon={true}
        />
        <LinkTag label="Newsletter" showIcon={true} />
        <LinkTag label="Instagram" showIcon={true} />
        <LinkTag label="Twitter" showIcon={true} />
      </div>
    </footer>
  );
};
