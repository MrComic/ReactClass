import React from "react";
import Card from "../../Card/Card";
import ListGroup from "../../ListGroup/ListItem";

export default function Product(props) {
  return (
    <Card image={props.product.image} title={props.product.title}>
      <ListGroup
        items={[props.product.description, props.product.price + "$"]}
      />
    </Card>
  );
}
