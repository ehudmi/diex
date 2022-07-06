import React, { Component } from "react";

class Form3 extends Component {
  constructor() {
    super();
    this.state = { name: "", submitted: false };
  }
  changeSubmit = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.name });
    !this.state.submitted
      ? this.setState({ submitted: true })
      : this.setState({ submitted: false });
  };
  render() {
    return (
      <form onSubmit={this.changeSubmit}>
        <input name="myName" type={"text"} />
        {!this.state.submitted ? <h1>Hello</h1> : <h1>Not cool</h1>}
        <button>Click Me</button>
      </form>
    );
  }
}

export default Form3;
