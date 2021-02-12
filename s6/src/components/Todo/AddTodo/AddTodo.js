import React, { useRef } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

function AddTodo(props) {
  const text = useRef();
  return (
    <InputGroup className="mt-3">
      <FormControl
        ref={text}
        placeholder="Add Item"
        aria-label="add item"
        aria-describedby="basic-addon1"
      />
      <InputGroup.Append>
        <Button
          variant="outline-secondary"
          onClick={() =>
            props.itemAdded({
              id: props.id,
              title: text.current.value,
              completed: false,
              userId: 1,
            })
          }
        >
          add!
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

export default AddTodo;
