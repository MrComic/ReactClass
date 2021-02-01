import React, { Component } from "react";
import "animate.css/animate.min.css";

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cssClass: "animate__fadeIn",
    };
  }

  componentDidMount() {}

  //   componentWillUnmount() {
  //     this.setState({ cssClass: "animate__fadeOut" });
  //   }

  render() {
    return (
      <div
        className={["card", "animate__animated", this.state.cssClass].join(" ")}
      >
        {this.props.image != null ? (
          <img
            className="card-img-top"
            style={{ height: 200 }}
            src={this.props.image}
            alt={this.props.title}
          />
        ) : (
          ""
        )}
        <div className="card-body">
          <h5 className="card-title" title={this.props.title}>
            {this.props.title}
          </h5>
          {this.props.children}
        </div>
      </div>
    );
  }
}
