import React, { Component } from "react";

class Customers extends Component {
  constructor() {
    super();
    this.state = { customers: [] };
  }
  async componentDidMount() {
    const response = await fetch("/api/customers", {
      method: "GET",
      mode: "no-cors",
      headers: { "Content-type": "application/json" },
    });
    const json = await response.json();
    this.setState({ customers: json });
  }
  render() {
    return (
      <div>
        <h1>Customers</h1>
        <div>
          {this.state.customers.map(({ id, firstName, lastName }) => {
            return (
              <div key={id}>
                <p>
                  {firstName} {lastName}
                </p>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Customers;
