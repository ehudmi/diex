import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      label: this.props.label,
      value: "",
      pattern: this.props.pattern,
    };
  }
  changeInput = (e) => {
    this.setState({ value: e.target.value });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <label htmlFor={this.state.name}>{this.state.label}</label>
        <input name={this.state.name} onChange={this.changeInput} />
        {this.state.value.length === 0 ? (
          <p>{this.state.label} is required</p>
        ) : null}
        {!this.state.pattern.test(this.state.value) ? (
          <p>{this.state.label} is invalid</p>
        ) : null}
      </div>
    );
  }
}

export default Input;
