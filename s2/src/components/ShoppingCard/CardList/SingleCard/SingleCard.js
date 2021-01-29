import React from "react";
import MoneyDisplay from "../../../Shared/MoneyDisplay/MoneyDisplay";
import { Quantitycontrol } from "./QuantityControl/QuantityControl";

export function Singlecard(props) {
  let item = props.item;
  return (
    <div className="row pb-2 mb-1 border-bottom">
      <div className="col-3">
        <img
          src={item.image}
          alt={item.name}
          className="img-fluid img-thumbnail"
        />
      </div>
      <div className="col-5 my-auto font-Quicksand">{item.name}</div>
      <div className="col-2 my-auto">
        <Quantitycontrol q={item.q} />
      </div>
      <div className="col-1 my-auto font-Quicksand">
        <MoneyDisplay value={item.price} cur="dollar" />
      </div>
      <div className="col-1 my-auto">
        <i className="bi bi-x"></i>
      </div>
    </div>
  );
}
