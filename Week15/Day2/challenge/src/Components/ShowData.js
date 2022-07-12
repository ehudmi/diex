import React, { Component } from "react";

class ShowData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // render userData using p elements and all the data as props from App.js
  render() {
    return (
      <>
        <h1 className="lower">Entered Information</h1>
        <div className="resultsContainer">
          <div className="userResults">
            <p className="username">
              Your name: {this.props.data.firstName} {this.props.data.lastName}
            </p>
            <p>Your age: {this.props.data.age}</p>
            <p>Your gender: {this.props.data.gender}</p>
            <p>Your destination: {this.props.data.destination}</p>
            <p>Your dietary restrictions:</p>
            <p>
              **Nuts free:{" "}
              {this.props.data.nutsFree ? <span>Yes</span> : <span>No</span>}
            </p>
            <p>
              **Lactose free:{" "}
              {this.props.data.lactoseFree ? <span>Yes</span> : <span>No</span>}
            </p>
            <p>
              **Vegan meal:{" "}
              {this.props.data.isVegan ? <span>Yes</span> : <span>No</span>}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default ShowData;
