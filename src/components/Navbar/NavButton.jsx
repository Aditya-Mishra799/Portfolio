import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import styles from "./nav.module.css";
const NavButton = ({ open, toggle, ...props }) => {
  
  return (
    <button className={styles["nav-btn"]} onClick={toggle} {...props}>
      {open ? <X className={styles["icon"]}/> : <Menu className={styles["icon"]}/>}
    </button>
  );
};

export default NavButton;
