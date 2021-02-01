import React, { Component } from "react";
import Product from "./Product/Product";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Products: [],
    };
  }

  componentDidMount() {
    fetch(`https://fakestoreapi.com/products/`)
      .then((res) => res.json())
      .then((json) => this.setState({ Products: json }));
  }

  render() {
    return (
      <div className="row mt-5">
        {this.state.Products.filter((p) => {
          return (
            p.category === this.props.category || this.props.category === ""
          );
        }).map((item) => {
          return (
            <div key={item.id} className="col-lg-4 col-md-6 col-12 mb-5">
              <Product product={item} />
            </div>
          );
        })}
      </div>
    );
  }
}
