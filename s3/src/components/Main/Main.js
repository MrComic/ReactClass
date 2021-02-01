import React, { Component } from "react";
import Categories from "../Categories/Categories";
import Products from "../Products/Products";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: "",
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(category) {
    this.setState({ selectedCategory: category });
  }

  componentDidMount() {}

  render() {
    return (
      <div className="container mt-3">
        <Categories onChange={this.onChange} />
        <Products category={this.state.selectedCategory} />
      </div>
    );
  }
}
