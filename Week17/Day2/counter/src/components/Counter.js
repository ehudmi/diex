// import React from "react";
import { connect } from "react-redux";
import { decrease, increase } from "../redux/Actions";
import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  asyncIncrement = () => {
    setTimeout(this.props.clickIncrease, 1000);
  };
  render() {
    return (
      <div className="container">
        <h3>Clicked: {this.props.count} times</h3>
        <button onClick={this.props.clickIncrease}>+</button>
        <button onClick={this.props.clickDecrease}>-</button>
        <button
          onClick={this.props.count % 2 === 0 ? null : this.props.clickIncrease}
        >
          Increment if odd
        </button>
        <button onClick={this.asyncIncrement}>Increment async</button>
      </div>
    );
  }
}
const mapStateToProps = (props) => {
  return { count: props.count };
};
const mapDispatchToProps = (dispatch) => {
  return {
    clickIncrease: () => dispatch(increase()),
    clickDecrease: () => dispatch(decrease()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
