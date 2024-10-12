import { Button, Header } from "../shared";
//
import styles from "./styles.module.css";
//
import Phone from "../../assets/images/phone-save.webp";
export const Save = () => {
  return (
    <section id="save">
      <div className={styles.section}>
        <div>
          <div className={styles.phone}>
            <img alt="phone-app" src={Phone} width="500" />
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.title}>The Rise App</p>
          <Header>
            Save for your <span className={styles.future}>future</span>
          </Header>
          <p className={styles.writes}>
            With Rise, you achieve your financial goals faster. Save for school,
            your home, vacations, your children’s future and more.
          </p>
          <Button className={styles.button}>start saving</Button>
        </div>
      </div>
    </section>
  );
};
