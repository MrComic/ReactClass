import React from "react";
import { Cardselector } from "./CardSelector/CardSelector";

function CardDetail() {
  return (
    <div className="card bg-dark p-4">
      <div className="row">
        <div className="col-12">
          <h4 className="font-Quicksand  pb-2 text-white">Card Detail</h4>
        </div>
        <div className="col-12">
          <label className="text-white">Card Type</label>
          <Cardselector />
        </div>
        <div className="col-12">
          <label className="text-white">name on card</label>
          <input type="text" className="form-control material-input" />
        </div>
        <div className="col-12">
          <label className="text-white">Card Number</label>
          <input type="text" className="form-control material-input" />
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-8">
              <label className="text-white">expiration date</label>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control material-input"
                    placeholder="YY"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control material-input"
                    placeholder="MM"
                  />
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="col">
                <label className="text-white">cvv</label>
                <input
                  placeholder="xxx"
                  type="text"
                  className="form-control material-input"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mt-2">
          <button className="btn btn-primary btn-block btn-md font-size-1">
            checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
