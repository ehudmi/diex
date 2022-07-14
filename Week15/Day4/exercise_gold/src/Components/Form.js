import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = { user: "", email: "" };
  }
  changeInput = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };
  submitForm = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/",
      {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user: this.state.user,
          email: this.state.email,
        }),
      }
    );
    console.log(
      JSON.stringify({ user: this.state.user, email: this.state.email })
    );
    console.log(response);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input
            type={"text"}
            id="user"
            placeholder="Isaac"
            onChange={this.changeInput}
          />
          <input
            type={"email"}
            id="email"
            placeholder="fake@gmail.com"
            onChange={this.changeInput}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
