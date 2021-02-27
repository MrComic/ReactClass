import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import asyncComponent from "./AsyncComponent";

const Products = asyncComponent(() =>
  import("../Products/Products").then((module) => module.default)
);

const ProductDetail = asyncComponent(() =>
  import("../ProductDetail/ProductDetail").then((module) => module.default)
);

const ShoppingCardPage = asyncComponent(() =>
  import("../ShoppingCard/ShoppingCard").then((module) => module.default)
);

export function Routing(props) {
  return (
    <Switch>
      <Route path="/" exact component={Products} />
      <Route path="/product/:id" component={ProductDetail} exact />
      <Route path="/Card" component={ShoppingCardPage} exact />
    </Switch>
  );
}
