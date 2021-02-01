import React from "react";
import ListItem from "./ListItem/ListItem";

export default function ListGroup(props) {
  console.log(props);
  return (
    <ul className="list-group">
      {props.items.map((p) => {
        return <ListItem title={p} key={p} />;
      })}
    </ul>
  );
}
