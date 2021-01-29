import React from "react";

export function Cardfooter(props) {
  let price = props.items.map((p) => p.q * p.price).reduce((p, c) => p + c);
  return (
    <div className="d-flex flex-row justify-content-between">
      <a href="/">
        <i className="bi bi-arrow-left text-dark"></i> Continue Shopping
      </a>
      <p>{price}</p>
    </div>
  );
}
