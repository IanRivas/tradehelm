import * as React from "react";

import Header from "../Components/Header";
import Button from "../Components/Button";
import {useList} from "../Context/ListProvider";

import styles from "./App.module.scss";

const App: React.FC = () => {
  const {addItem, deleteItem, updateItem} = useList();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div>
            <h1>Supermarket list</h1>
            <p>0 item(s)</p>
          </div>
          <Button text="Add" type="primary" onClick={() => addItem("helado")} />
          <Button text="delete" type="secundary" onClick={() => deleteItem("dlkjlfa1")} />
          <Button
            text="edit"
            type="primary"
            onClick={() => updateItem("lfajldjf12", "pastelitos")}
          />
        </div>
      </main>
    </>
  );
};

export default App;
