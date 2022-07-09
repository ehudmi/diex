import React, { Component } from "react";
import Button from "./Button";
import Input from "./Input";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstInput: 0,
      secondInput: 0,
      result: 0,
    };
  }
  getInput = (value, name) => {
    this.setState({ [name]: value });
  };
  calcOperation = () => {
    let a = Number(this.state.firstInput),
      b = Number(this.state.secondInput);
    switch (this.props.operation) {
      case "Add":
        this.setState({
          result: a + b,
        });
        break;
      case "Substract":
        this.setState({
          result: a - b,
        });
        break;
      case "Multiply":
        this.setState({
          result: a * b,
        });
        break;
      case "Divide":
        this.setState({
          result: a / b,
        });
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <div style={{ justifyContent: "center" }}>
        {this.props.operation === "Divide" ? (
          <h3 style={{ color: "#bf8ff0" }}>Dividing Two Numbers</h3>
        ) : (
          <h3 style={{ color: "#bf8ff0" }}>
            {this.props.operation}ing Two Numbers
          </h3>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "250px",
            marginLeft: "120px",
          }}
        >
          <Input
            name="firstInput"
            getInput={this.getInput.bind(this)}
            value={this.state.firstInput}
          />
          <Input
            name="secondInput"
            getInput={this.getInput.bind(this)}
            value={this.state.secondInput}
          />
        </div>
        <Button
          operation={this.props.operation}
          clickAction={this.calcOperation.bind(this)}
        />
        <h1 style={{ fontSize: "50px", color: "#bf8ff0" }}>
          {this.state.result}
        </h1>
      </div>
    );
  }
}

export default Calculator;
