import React, { Component } from "react";
import Calculator from "./Calculator";

class Form extends Component {
  constructor() {
    super();
    this.state = { operation: "Add" };
  }
  selectOption = (e) => {
    this.setState({ operation: e.target.value });
  };
  render() {
    return (
      <div
        style={{
          margin: "50px 500px",
          justifyContent: "center",
          width: "500px",
          height: "fit-content",
          textAlign: "center",
          backgroundColor: "#510684",
        }}
      >
        <h3 style={{ fontSize: "x-large", color: "#bf8ff0" }}>
          Select Operation
        </h3>
        <select
          style={{ fontSize: "larger", color: "#510684" }}
          name="operationChoice"
          onChange={this.selectOption}
          defaultValue={"Add"}
        >
          <option value={"Add"}>Add</option>
          <option value={"Substract"}>Substract</option>
          <option value={"Multiply"}>Multiply</option>
          <option value={"Divide"}>Divide</option>
        </select>
        <Calculator operation={this.state.operation} />
      </div>
    );
  }
}

export default Form;
