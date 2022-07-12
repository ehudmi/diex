import React, { Component } from "react";

class Button extends Component {
  constructor() {
    super();
    this.state = { click: false };
  }
  clickButton = () => {
    this.setState({ click: true });
  };
  render() {
    if (this.state.click) {
      throw new Error("I Crashed!");
    }
    return (
      <div>
        <button onClick={this.clickButton}>Occur an error</button>
      </div>
    );
  }
}

export default Button;
