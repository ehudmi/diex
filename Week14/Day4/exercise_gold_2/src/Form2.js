import React, { Component } from "react";

class Form2 extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      submitted: false,
    };
  }
  submitForm2 = (e) => {
    e.preventDefault();
    this.setState({
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      phoneNumber: e.target.phoneNumber.value,
      email: e.target.email.value,
      submitted: true,
    });
  };
  resetForm = () => {
    this.setState({ submitted: false });
  };
  render() {
    return (
      <div>
        {!this.state.submitted ? (
          <form
            onSubmit={this.submitForm2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              flexDirection: "column",
              backgroundColor: "grey",
              width: "300px",
            }}
          >
            <header
              style={{
                fontSize: "xx-large",
                fontWeight: "bold",
                color: "seagreen",
              }}
            >
              Welcome
            </header>
            <p>Please provide your information below.</p>
            <input
              type={"text"}
              name="firstName"
              placeholder="First Name"
              minLength={"2"}
            />
            <input
              type={"text"}
              name="lastName"
              placeholder="Last Name"
              minLength={"2"}
            />
            <input type={"tel"} name="phoneNumber" placeholder="Phone Number" />
            <input type={"email"} name="email" placeholder="Email Address" />
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div id="responseContainer">
            <p>
              {this.state.lastName}, {this.state.firstName}
            </p>
            <p>
              {this.state.phoneNumber} | {this.state.email}
            </p>
            <button onClick={this.resetForm}>Reset</button>
          </div>
        )}
      </div>
    );
  }
}

export default Form2;
