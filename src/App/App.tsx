import * as React from "react";

import Header from "../Components/Header";

import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <header className={styles.header}>
          <h1>
            <img alt="TradeHelm" src="/logo.svg" />
          </h1>
          <h3>Lets get this party started</h3>
        </header>
      </main>
    </>
  );
};

export default App;
