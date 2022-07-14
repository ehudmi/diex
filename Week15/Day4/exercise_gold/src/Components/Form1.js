import React, { Component } from "react";
import axios from "axios";

class Form1 extends Component {
  constructor() {
    super();
    this.state = { userId: "", title: "", body: "" };
  }
  changeInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submitForm = async (event) => {
    event.preventDefault();
    const response = await axios({
      url: "https://jsonplaceholder.typicode.com/posts",

      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      data: this.state,
    });
    console.log(response.data);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input
            type={"text"}
            name="userId"
            placeholder="MyID"
            onChange={this.changeInput}
          />
          <input
            type={"text"}
            name="title"
            placeholder="Isaac"
            onChange={this.changeInput}
          />
          <input
            type={"text"}
            name="body"
            placeholder="Ziv"
            onChange={this.changeInput}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form1;
