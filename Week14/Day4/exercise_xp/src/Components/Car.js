import { Component } from "react";
import Garage from "./Garage";

class Car extends Component {
  constructor() {
    super();
    this.state = {
      color: "red",
    };
  }
  render() {
    return (
      <div>
        <header>
          This car is {this.state.color} {this.props.carName}
        </header>
        <Garage size="small" />
      </div>
    );
  }
}
export default Car;
