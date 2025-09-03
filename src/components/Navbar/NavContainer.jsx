import React, { useState } from "react";
import ModeButton from "./ModeButton";
import styles from "./nav.module.css";
import NavButton from "./NavButton";
import NavLink from "./NavLink";
const links = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Education",
    href: "#education",
  },
  {
    label: "Achievements",
    href: "#achievements",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];
const NavContainer = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);
  return (
    <nav className={styles["nav-cnt"]}>
      <div className={styles["nav-main"]}>
        <div className={styles["nav-logo"]}>
          <ModeButton />
          <h2>Aditya Mishra</h2>
        </div>
        <NavButton open={open} toggle={toggle} />
      </div>
      <div className={`${styles["nav-links"]} ${open ? styles["nav-open"] : ""}`}>
        {links.map((link) => (
          <NavLink {...link} key = {link.href}/>
        ))}
      </div>
    </nav>
  );
};

export default NavContainer;
