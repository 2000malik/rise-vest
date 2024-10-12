import { Header } from "../shared";
import styles from "./styles.module.css";

export const Regulation = () => {
  return (
    <section id="regulation" className={styles.regulation}>
      <div className={styles.content}>
        <Header>How we are Regulated</Header>
        <p className={styles.para}>
          Rise is registered and regulated both in the US and in Nigeria. Our
          team is made up of US registered investment advisers, our Nigerian
          users are covered by our SEC licensed trustees, ARM Trustees and all
          our assets are held with regulated third parties, in all relevant
          jurisdictions
        </p>
      </div>
    </section>
  );
};
