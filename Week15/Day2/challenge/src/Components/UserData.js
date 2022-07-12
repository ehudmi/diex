import React, { Component } from "react";
import Input from "./Input";
import Select from "./Select";

class UserData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //   render each input Component passing props for type, name, placeholder and onChange handler
  render() {
    return (
      <>
        <h1 className="header">Sample Form</h1>
        <div className="formContainer">
          <form onSubmit={this.props.handleSubmit}>
            <Input
              type={"text"}
              name="firstName"
              placeholder="First Name"
              inputChange={this.props.handleChange}
            />
            <Input
              type={"text"}
              name="lastName"
              placeholder="Last Name"
              inputChange={this.props.handleChange}
            />
            <Input
              type={"number"}
              name="age"
              placeholder="Age"
              inputChange={this.props.handleChange}
            />
            <br />
            <Input
              type={"radio"}
              name="gender"
              value="male"
              label="Male"
              inputChange={this.props.handleChange}
            />

            <Input
              type={"radio"}
              name="gender"
              value="female"
              label="Female"
              inputChange={this.props.handleChange}
            />
            <br />
            <Select inputChange={this.props.handleChange} />
            <br />
            <Input
              type={"checkbox"}
              name="nutsFree"
              label="Nut Free"
              inputChange={this.props.handleChange}
            />
            <Input
              type={"checkbox"}
              name="lactoseFree"
              label="Lactose"
              inputChange={this.props.handleChange}
            />
            <Input
              type={"checkbox"}
              name="isVegan"
              label="Vegan"
              inputChange={this.props.handleChange}
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    );
  }
}

export default UserData;
