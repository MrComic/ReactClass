import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import styles from "./TodoItem.module.css";
function TodoItem(props) {
  const [completed, setcompleted] = useState(props.item.completed);

  const setCompleted = () => {
    setcompleted(!completed);
    props.ChangeTodoState(props.item.id, !completed);
  };

  return (
    <ListGroup.Item>
      <input
        type="checkbox"
        className="m-1"
        onChange={setCompleted}
        checked={completed}
      />
      <span className={completed ? styles.lineOn : ""}>{props.item.title}</span>
    </ListGroup.Item>
  );
}

export default TodoItem;
