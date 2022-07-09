import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.name };
  }
  returnValue = (e) => {
    this.props.getInput(e.target.value, this.state.name);
  };
  render() {
    return (
      <div>
        <input
          style={{
            width: "80px",
            fontSize: "x-large",
            textAlign: "center",
            color: "#510684",
            backgroundColor: "#bf8ff0",
          }}
          type={"number"}
          onChange={this.returnValue}
          name={this.state.name}
          defaultValue={this.props.value}
        />
      </div>
    );
  }
}

export default Input;
