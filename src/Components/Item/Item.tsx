import React, {useState} from "react";

import {useList} from "../../Context/ListProvider";
import {ModalEdit} from "../Modal";
import type {ListState} from "../../type";
import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/delete.svg";

import styles from "./Item.module.scss";

type props = {
  listItem: ListState;
};

const Item: React.FC<props> = ({listItem}) => {
  const {id, item} = listItem;
  const {deleteItem} = useList();
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <span>{item}</span>
        <div>
          <button onClick={() => setVisible(!visible)}>
            <img alt="edit icon" src={editIcon} />
          </button>
          <button onClick={() => deleteItem(id)}>
            <img alt="delete icon" src={deleteIcon} />
          </button>
        </div>
      </div>
      <ModalEdit id={id} item={item} show={() => setVisible(!visible)} visible={visible} />
    </>
  );
};

export default Item;
