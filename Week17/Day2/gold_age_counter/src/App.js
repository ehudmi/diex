import "./App.css";
import logo from "./logo.svg";
// import { ageIncrease, ageDecrease } from "./redux/Actions";
import * as actionCreator from "./redux/Actions";
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
        {this.props.loading && (
          <img src={logo} className="App-logo" alt="logo" />
        )}
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { age: state.age, loading: state.loading };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch(actionCreator.ageUp(1)),
    onAgeDown: () => dispatch(actionCreator.ageDown(1)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
