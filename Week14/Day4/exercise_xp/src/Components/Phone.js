import React, { Component } from "react";

class Phone extends Component {
  constructor() {
    super();
    this.state = {
      brand: "Samsung",
      model: "Galaxy S20",
      color: "black",
      year: 2020,
    };
  }
  changeColor = () => {
    this.setState({ color: "blue" });
  };
  render() {
    return (
      <>
        <h1>My phone is a {this.state.brand}</h1>
        <h3>
          it is a {this.state.color} {this.state.model} from {this.state.year}
        </h3>
        <button onClick={this.changeColor}>Change Color</button>
      </>
    );
  }
}

export default Phone;
