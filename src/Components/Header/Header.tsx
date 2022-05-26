import React from "react";

import ThemeSwitcher from "../ThemeSwitcher";

import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <div>
        <span>Tradehelm</span>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
