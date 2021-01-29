import React from "react";

export default function MoneyDisplay(props) {
  let moneysigns = [
    { alias: "dollar", sign: "$" },
    { alias: "rial", sign: "ریال" },
  ];
  let selectedsign = moneysigns.find((p) => p.alias == props.cur);
  return (
    <div>
      <span>{selectedsign.sign}</span>
      <span>{props.value}</span>
    </div>
  );
}
