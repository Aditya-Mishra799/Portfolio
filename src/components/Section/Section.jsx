import React from "react";
import styles from "./Section.module.css";
const Section = ({ Icon, children, label = "" }) => {
  return (
    <section className={styles["cnt"]}>
      <div className={styles["top"]}>
        <span className={styles["label"]}>
          {<Icon className={`${styles["icon"]} float-animation`} />}
          <h3>{label}</h3>
        </span>
        <hr />
      </div>
      <div className={styles["body"]}>{children}</div>
    </section>
  );
};

export default Section;
