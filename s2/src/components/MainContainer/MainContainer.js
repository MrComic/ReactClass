import React from "react";

import CardDetail from "../CardDetail/CardDetail";
import ShoppingCard from "../ShoppingCard/ShoppingCard";

export default function MainContainer() {
  return (
    <div className="d-flex flex-row align-items-center vh-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <ShoppingCard />
          </div>
          <div className="col-lg-4">
            <CardDetail />
          </div>
        </div>
      </div>
    </div>
  );
}
