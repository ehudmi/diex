import React, { Component } from "react";
import Input from "./Input";

class Form extends Component {
  render() {
    return (
      <div>
        <Input
          name="firstName"
          label="First Name"
          pattern={new RegExp(`[a-zA-Z]*`)}
        />
        <Input
          name="lastName"
          label="Last Name"
          pattern={new RegExp(`[a-zA-Z]*`)}
        />
        <Input
          name="phone"
          label="Phone"
          pattern={
            new RegExp(`^[0][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$`)
          }
        />
        <Input
          name="email"
          label="Email"
          pattern={new RegExp(`[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+`)}
        />
      </div>
    );
  }
}

export default Form;
