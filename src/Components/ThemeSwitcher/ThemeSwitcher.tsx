import React from "react";

import {useTheme} from "../../Context/ThemeProvider";

import styles from "./ThemeSwitcher.module.scss";

const ThemeSwitcher: React.FC = () => {
  const {theme, toggleTheme} = useTheme();

  const handleTheme = () => {
    if (theme === "dark") {
      toggleTheme("light");
    } else if (theme === "light") {
      toggleTheme("dark");
    }
  };

  return (
    <div className={styles.container}>
      <button
        className={theme === "dark" ? styles.grayText : ""}
        onClick={() => toggleTheme("light")}
      >
        Light
      </button>
      <div>
        <button
          className={theme === "dark" ? styles.leftBtn : styles.rightBtn}
          onClick={handleTheme}
        />
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
