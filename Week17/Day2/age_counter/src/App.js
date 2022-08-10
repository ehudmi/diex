import "./App.css";
import { ageIncrease, ageDecrease } from "./redux/Actions";
import { connect } from "react-redux";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <br />
        <span>Your age: {this.props.age} </span>
        <br />
        <br />
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { age: state.age };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch(ageIncrease()),
    onAgeDown: () => dispatch(ageDecrease()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
