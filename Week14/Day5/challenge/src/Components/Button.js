import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div style={{ height: "50px", marginTop: "30px" }}>
        <button
          style={{
            fontSize: "larger",
            color: "#bf8ff0",
            backgroundColor: "#751aff",
            height: "50px",
            borderRadius: "10px 20px 10px 20px",
          }}
          onClick={this.props.clickAction}
        >
          {this.props.operation} Them!
        </button>
      </div>
    );
  }
}

export default Button;
