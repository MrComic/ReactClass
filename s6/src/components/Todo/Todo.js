import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import AddTodo from "./AddTodo/AddTodo";
import TodoItem from "./TodoItem/TodoItem";
function Todo() {
  const [Todos, setTodos] = useState([]);
  const [MaxId, setMaxId] = useState(0);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((res) => {
        if (res && res.length > 0) {
          setTodos(res);
        }
      });
  }, []);

  useEffect(() => {
    setMaxId(Todos.reduce((max, item) => (item.id > max ? item.id : max), 0));
  }, [Todos]);

  const ChangeTodoState = (id, completed) => {
    let index = Todos.findIndex((item) => {
      return item.id === id;
    });
    if (index > -1) {
      Todo[index] = { ...Todo[index], completed: completed };
    }
    setTodos([...Todos]);
  };

  const itemAdded = (item) => {
    setTodos([item, ...Todos]);
    setMaxId(MaxId + 1);
  };

  return (
    <>
      <AddTodo itemAdded={itemAdded} id={MaxId + 1} />
      <ListGroup className="mt-3">
        {Todos.map((item, index) => {
          return (
            <TodoItem
              ChangeTodoState={ChangeTodoState}
              item={item}
              key={item.id}
            />
          );
        })}
      </ListGroup>
    </>
  );
}

export default Todo;
