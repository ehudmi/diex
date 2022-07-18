import React, { Component } from "react";
import { store } from "../store";
import { increase, decrease } from "../actions";

class Counter extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const buttonType = event.target.dataset.button;
    switch (buttonType) {
      case "increase":
        store.dispatch(increase(1));
        break;
      case "decrease":
        store.dispatch(decrease(-1));
        break;
      default:
        console.log("wrong button");
    }
  };
  render() {
    return (
      <div>
        <button
          type="submit"
          onClick={this.handleSubmit}
          data-button="decrease"
          style={{ margin: "10px", padding: "1px 6px" }}
        >
          -
        </button>
        <span>{store.getState().count}</span>
        <button
          type="submit"
          onClick={this.handleSubmit}
          data-button="increase"
          style={{ margin: "10px", padding: "1px 6px" }}
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
