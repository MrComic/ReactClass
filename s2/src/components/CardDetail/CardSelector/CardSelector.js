import React from "react";

export function Cardselector(props) {
  let cardTypes = ["Paypal", "visa"];
  return (
    <div className="row">
      {cardTypes.map((item) => (
        <div className="col" key={item}>
          <img
            alt={item}
            key={item}
            className="img-fluid"
            src={item + ".png"}
          />
        </div>
      ))}
    </div>
  );
}
