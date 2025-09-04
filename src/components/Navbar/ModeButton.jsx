import { MoonStar, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import styles from "./nav.module.css";
const modes = ["light", "dark"];
const modeIcon = {
  light: <MoonStar />,
  dark: <Sun />,
};
const ModeButton = ({ ...props }) => {
  const [mode, setMode] = useState(0);
  const toggleMode = () => {
    setMode((prev) => {
      const newMode = (prev + 1) % modes.length;
      localStorage.setItem("mode", String(newMode));
      return newMode;
    });
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", modes[mode]);
  }, [mode]);
  useEffect(() => {
    const storedMode = localStorage.getItem("mode");
    if (storedMode) {
      setMode(parseInt(storedMode));
    } else {
      if (window) {
        const systemPreference = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        setMode(systemPreference ? 1 : 0);
      }
    }
  }, []);
  return (
    <button {...props} onClick={toggleMode} className={styles["mode-btn"]}>
      {modeIcon[modes[mode]]}
    </button>
  );
};

export default ModeButton;
