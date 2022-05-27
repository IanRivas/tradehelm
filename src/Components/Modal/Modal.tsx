import React, {useState} from "react";

import Button from "../Button";
import {useList} from "../../Context/ListProvider";

import styles from "./Modal.module.scss";

type props = {
  visible: boolean;
  show: () => void;
};

const Modal: React.FC<props> = ({visible, show}) => {
  const [input, setInput] = useState("");
  const {addItem} = useList();

  const handleAdd = () => {
    addItem(input);
    show();
    setInput("");
  };

  return (
    <div className={visible ? styles.container : styles.hide}>
      <div>
        <h3>Add item</h3>
        <input autoFocus type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <div>
          <Button text="Close" type="secundary" onClick={show} />
          <Button text="Add" type="primary" onClick={handleAdd} />
        </div>
      </div>
      <div onClick={show} />
    </div>
  );
};

type propsEdit = {
  visible: boolean;
  id: string;
  item: string;
  show: () => void;
};

export const ModalEdit: React.FC<propsEdit> = ({visible, show, id, item}) => {
  const [input, setInput] = useState(item);
  const {editItem} = useList();

  const handleEdit = () => {
    editItem(id, input);
    show();
    setInput("");
  };

  return (
    <div className={visible ? styles.container : styles.hide}>
      <div>
        <h3>Edit item</h3>
        <input autoFocus type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <div>
          <Button text="Close" type="secundary" onClick={show} />
          <Button text="Edit" type="primary" onClick={handleEdit} />
        </div>
      </div>
      <div onClick={show} />
    </div>
  );
};

export default Modal;
