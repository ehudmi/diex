import React, { Component } from "react";

class Select extends Component {
  render() {
    return (
      <div>
        <select name="destination" onChange={this.props.inputChange}>
          <option value>--Please Choose a Destination--</option>
          <option value={"Thailand"}>Thailand</option>
          <option value={"Japan"}>Japan</option>
          <option value={"USA"}>USA</option>
        </select>
      </div>
    );
  }
}

export default Select;
