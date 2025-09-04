import { ArrowUpFromLine } from "lucide-react";
import React, { useEffect, useState } from "react";
import styles from "./ScrollTopBtn.module.css";
const ScrollTopBtn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    visible  && <div className={styles["scroll-top-btn"]}>
      <a href="#">
        <ArrowUpFromLine className={styles["icon"]}/>
      </a>
    </div>
  );
};

export default ScrollTopBtn;
