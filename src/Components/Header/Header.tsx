import React from "react";

import ThemeSwitcher from "../ThemeSwitcher";
import {useTheme} from "../../Context/ThemeProvider";
import logo from "../../assets/tradehelmLogo.png";
import logoDark from "../../assets/tradehelmLogoDark.png";

import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const {theme} = useTheme();

  return (
    <header className={styles.container}>
      <div>
        <img alt="tradehelm logo" src={theme === "light" ? logoDark : logo} />
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
