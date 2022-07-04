import React, { Component } from "react";

class Events extends Component {
  constructor() {
    super();
    this.state = { isToggleOn: true };
  }
  clickMe = () => {
    return alert("I was clicked");
  };
  handleKeyPress = (e) => {
    if (e.which === 13) {
      return alert(
        `The ENTER key was pressed, your input is ${e.target.value}`
      );
    }
  };
  turnMe = (e) => {
    if (this.state.isToggleOn === true) {
      e.target.innerHTML = "OFF";
      this.setState({ isToggleOn: false });
      console.log(this.state.isToggleOn);
    } else {
      e.target.innerHTML = "ON";
      this.setState({ isToggleOn: true });
      console.log(this.state.isToggleOn);
    }
  };
  render() {
    return (
      <div>
        <input
          type="text"
          id="userInput"
          onKeyPress={this.handleKeyPress}
          placeholder="Press the ENTER key!"
        />
        <button onClick={this.clickMe}>Click Me!</button>
        <button onClick={this.turnMe}>Press</button>
      </div>
    );
  }
}

export default Events;
