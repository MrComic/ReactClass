import React, { Component } from "react";
import Category from "./Category/Category";

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Categories: [],
    };
    this.SelectCategory = this.SelectCategory.bind(this);
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => this.setState({ Categories: json }));
  }

  SelectCategory(category) {
    this.props.onChange(category);
  }

  render() {
    return (
      <div className="row">
        {this.state.Categories.map((category, index) => {
          return (
            <div className="col" key={index}>
              <Category
                name={category}
                onChange={this.SelectCategory.bind(this)}
              />
            </div>
          );
        })}
        <div className="col">
          <Category name="" onChange={this.SelectCategory.bind(this)} />
        </div>
      </div>
    );
  }
}
