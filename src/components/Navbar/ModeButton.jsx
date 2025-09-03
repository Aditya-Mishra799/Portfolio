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
  const toggleMode = () => setMode((prev) => (prev + 1) % modes.length);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", modes[mode]);
  }, [mode]);
  return (
    <button {...props} onClick={toggleMode} className={styles["mode-btn"]}>
      {modeIcon[modes[mode]]}
    </button>
  );
};

export default ModeButton;
