import React from "react";
import { Cardfooter } from "./CardFooter/CardFooter";
import { Cardlist } from "./CardList/CardList";

let ShoppingCard = () => {
  var card = [
    {
      id: "1",
      name: "Spaghetti Deluxe",
      image: "spaggeti.jpg",
      price: 6.99,
      q: 1,
    },
    {
      id: "2",
      name: "Nick's Hamburgers",
      image: "humberger.jpg",
      price: 5.55,
      q: 3,
    },
    {
      id: "4",
      name: "DIET PEPSI",
      image: "pepsi.webp",
      price: 1.0,
      q: 5,
    },
  ];

  return (
    <div className="p-4">
      <h4 className="font-Quicksand pb-2">shopping Card</h4>
      <Cardlist items={card} />
      <Cardfooter items={card} />
    </div>
  );
};

export default ShoppingCard;
