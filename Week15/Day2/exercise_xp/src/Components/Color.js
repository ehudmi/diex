import React, { Component } from "react";

class Color extends Component {
  constructor() {
    super();
    this.state = { favoriteColor: "red", show: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 5000);
  }

  shouldComponentUpdate() {
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return (this.snapMessage = (
      <h3>The previous state is {prevState.favoriteColor}</h3>
    ));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.favoriteColor === "red" && snapshot !== null) {
      this.message = <h3>My Favorite Color is {this.state.favoriteColor}</h3>;
      this.forceUpdate();
    }
  }

  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };

  clickAction = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <>
        <header>My Favorite Color is {this.state.favoriteColor}</header>
        <button onClick={this.changeColor}>Change Color (AGAIN!)</button>
        <div>{this.message}</div>
        <div>{this.snapMessage}</div>
        {this.state.show ? <Child /> : null}
        <button onClick={this.clickAction}>Delete Header</button>
      </>
    );
  }
}

export default Color;

class Child extends Component {
  componentWillUnmount() {
    alert(`The component named Header is about to be unmounted`);
  }

  render() {
    return (
      <>
        <header>Hello World!</header>
      </>
    );
  }
}

export { Child };
