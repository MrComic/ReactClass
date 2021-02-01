import React from "react";

export default function Category(props) {
  return (
    <button
      className="btn btn-outline-dark"
      onClick={() => props.onChange(props.name)}
    >
      {props.name == "" ? "Remove Filter" : props.name}
    </button>
  );
}
