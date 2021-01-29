import React from "react";
import { Singlecard } from "./SingleCard/SingleCard";

export function Cardlist(props) {
  return props.items.map((item) => {
    return <Singlecard key={item.id} item={item} />;
  });
}
