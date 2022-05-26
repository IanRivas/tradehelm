import React from "react";

import {useTheme} from "../../Context/ThemeProvider";

import styles from "./ThemeSwitcher.module.scss";

const ThemeSwitcher: React.FC = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={styles.container}>
      <button
        className={theme === "dark" ? styles.grayText : ""}
        onClick={() => toggleTheme("light")}
      >
        Light
      </button>
      <div>
        <div className={theme === "dark" ? styles.right : styles.left} />
      </div>
      <button
        className={theme === "dark" ? "" : styles.grayText}
        onClick={() => toggleTheme("dark")}
      >
        Dark
      </button>
    </div>
  );
};

export default ThemeSwitcher;
