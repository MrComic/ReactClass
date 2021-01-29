import React from "react";

export function Quantitycontrol(props) {
  return (
    <div className=" d-flex flex-row align-items-center">
      <span className="bi bi-plus pr-1"></span>
      <input
        type="text"
        defaultValue={props.q}
        className="form-control text-center"
      />
      <i className="bi bi-dash pl-1"></i>
    </div>
  );
}
