import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCardContext } from "../contexts/ShoppingCardContext";
import CardItem from "./CardItem/CardItem";
import { Breadcrumb } from "react-bootstrap";
function ShoppingCard() {
  const [cards, setCards] = useContext(ShoppingCardContext);
  console.log(cards);
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Products</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Shopping Card</Breadcrumb.Item>
      </Breadcrumb>
      {cards.map((product) => {
        return <CardItem item={product} descLength={40} key={product.id} />;
      })}
    </>
  );
}

export default ShoppingCard;
