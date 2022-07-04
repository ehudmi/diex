import React, { Component } from "react";

class Color extends Component {
  constructor() {
    super();
    this.state = { favoriteColor: "red" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 5000);
  }
  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };
  render() {
    return (
      <>
        <header>My Favorite Color is {this.state.favoriteColor} </header>
        <button onClick={this.changeColor}>Change Color (AGAIN!)</button>
      </>
    );
  }
}
export default Color;
