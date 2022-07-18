import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { message: "Hi", submitMessage: "" };
  }
  async componentDidMount() {
    const response = await fetch("/api/hello", {
      method: "GET",
      mode: "no-cors",
      headers: { "content-type": "text/plain" },
    });
    const body = await response.text();
    this.setState({ message: body });
  }
  submitText = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const response = await fetch("/api/world", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ post: data.get("userInput") }),
    });
    const res = await response.text();
    this.setState({ submitMessage: res });
  };
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <header>{this.state.message}</header>
        <h2 style={{ fontWeight: "bold" }}>Post to Server:</h2>
        <form onSubmit={this.submitText}>
          <input type={"text"} name="userInput" />
          <button>Submit</button>
        </form>
        <h1>{this.state.submitMessage}</h1>
      </div>
    );
  }
}

export default App;
