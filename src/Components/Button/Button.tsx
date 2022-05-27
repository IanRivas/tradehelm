import React from "react";

import styles from "./Button.module.scss";

type props = {
  text: string;
  type: string;
  onClick: () => void;
};

const Button: React.FC<props> = ({text, onClick, type}) => {
  return (
    <button className={type === "primary" ? styles.primary : styles.secundary} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
