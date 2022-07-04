import React, { Component } from "react";
import "./Forms.css";

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      age: null,
      errormessage: "",
      textarea: "the content of a textarea goes in the value attribute",
      selectedCar: "Volvo",
    };
  }
  changeUser = (e) => {
    this.setState({ username: e.target.value });
  };
  changeAge = (e) => {
    this.setState({ age: e.target.value });
    if (isNaN(e.target.value)) {
      this.setState({ errormessage: "Your age must be a number" });
    }
  };
  mySubmitHandler = (e) => {
    alert(`You are submitting ${this.state.username}`);
  };

  render() {
    let header;
    let errorBox = this.state.errormessage;
    if (this.state.username.length > 0 && this.state.age !== null) {
      header = `Hello ${this.state.username} ${this.state.age}`;
    }
    // if (isNaN(this.state.age)) {
    //   alert(`Your age must be a number`);
    // }

    return (
      <div className="formContainer">
        <form onSubmit={this.mySubmitHandler}>
          <header>{header}</header>
          <label htmlFor="name">Enter your name:</label>
          <input name="name" onChange={this.changeUser} />
          <label htmlFor="age">Enter your age:</label>
          <input
            name="age"
            onChange={this.changeAge}
            // onKeyPress={this.alertString}
          />
          <h3>{errorBox}</h3>
          <textarea defaultValue={this.state.textarea}></textarea>
          <select defaultValue={this.state.selectedCar}>
            <option>Ford</option>
            <option>Volvo</option>
            <option>Fiat</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default Forms;
