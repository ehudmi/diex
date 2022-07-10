import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  clickButton = () => {
    this.props.clickAction();
    this.props.buttonColor();
  };
  render() {
    return (
      <div>
        <button
          style={{
            backgroundColor: this.props.color,
            color: "white",
            position: "fixed",
            height: "35px",
            width: "100px",
            borderRadius: "5px",
            marginTop: "230px",
            marginLeft: "120px",
          }}
          onClick={this.clickButton}
        >
          New Quote
        </button>
      </div>
    );
  }
}

export default Button;
