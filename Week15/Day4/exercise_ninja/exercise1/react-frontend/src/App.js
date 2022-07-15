import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  async componentDidMount() {
    const response = await fetch("/users", {
      method: "GET",
      mode: "no-cors",
      headers: { "Content-type": "application/json" },
    });
    const json = await response.json();
    this.setState({ users: json });
  }
  render() {
    return (
      <div>
        <h1>Users</h1>
        {this.state.users.map(({ id, username }) => {
          return (
            <ul key={id}>
              <li>{username}</li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default App;
