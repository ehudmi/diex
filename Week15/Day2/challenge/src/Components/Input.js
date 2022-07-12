import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // input element receives props from userData
  render() {
    return (
      <div>
        <input
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.inputChange}
        />
        <label>{this.props.label}</label>
      </div>
    );
  }
}

export default Input;
