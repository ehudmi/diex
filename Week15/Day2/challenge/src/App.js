import React, { Component } from "react";
import "./App.css";
import ShowData from "./Components/ShowData";
import UserData from "./Components/UserData";

class App extends Component {
  // Here we set the initial state for the inputs
  constructor(props) {
    super(props);
    this.state = {
      data: {
        firstName: "",
        lastName: "",
        age: null,
        gender: "",
        nutsFree: false,
        lactoseFree: false,
        isVegan: false,
        destination: "",
      },
    };
  }
  // handleChange function - updates the input values using each inputs onChange events
  handleChange = (event) => {
    const { data } = this.state;
    if (event.target.type === "checkbox") {
      data[event.target.name] = event.target.checked;
    } else {
      data[event.target.name] = event.target.value;
    }
    this.setState({ data });
  };
  // handleSubmit event - sets the event on formSubmit, passed as props to the userData Component
  handleSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <UserData
          handleChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <ShowData data={this.state.data} />
      </div>
    );
  }
}

export default App;
