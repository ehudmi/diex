import React, { Component } from "react";

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      currentDate: new Date(),
    };
  }
  tick = () => {
    this.setState({ currentDate: new Date() });
  };
  componentDidMount() {
    this.myInterval = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
  render() {
    return (
      <div>
        <header>Hello, World!</header>
        <p>It is {this.state.currentDate.toLocaleTimeString("he-il")} </p>
      </div>
    );
  }
}

export default Clock;
