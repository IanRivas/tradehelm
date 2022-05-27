import React, {useState} from "react";

import Header from "../Components/Header";
import Button from "../Components/Button";
import Modal from "../Components/Modal";
import Item from "../Components/Item";
import {useList} from "../Context/ListProvider";

import styles from "./App.module.scss";

const App: React.FC = () => {
  const {state} = useList();
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div>
            <h1>Supermarket list</h1>
            <p>{state ? state.length : 0} item(s)</p>
          </div>
          <div>{state && state.map((value) => <Item key={value.id} listItem={value} />)}</div>
          <Button text="Add" type="primary" onClick={() => setVisible(!visible)} />
          <Modal show={() => setVisible(!visible)} visible={visible} />
        </div>
      </main>
    </>
  );
};

export default App;
