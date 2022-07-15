import React, { Component } from "react";

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loaded: false,
    };
  }
  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    const json = await response.json();
    this.setState({ users: json, loaded: true });
  }
  render() {
    return (
      <div>
        {this.state.loaded ? (
          <div>
            <h1>List of users</h1>
            <div>
              {this.state.users.map(
                ({ id, name, username, email, address: { city } }) => {
                  return (
                    <ul key={id} style={{ listStyleType: "none" }}>
                      <li>
                        <label style={{ fontWeight: "bold" }}>Id: </label>
                        {id}
                      </li>
                      <li>
                        <label style={{ fontWeight: "bold" }}>Name: </label>
                        {name}
                      </li>
                      <li>
                        <label style={{ fontWeight: "bold" }}>Username: </label>
                        {username}
                      </li>
                      <li>
                        <label style={{ fontWeight: "bold" }}>Email: </label>
                        {email}
                      </li>
                      <li>
                        <label style={{ fontWeight: "bold" }}>City: </label>
                        {city}
                      </li>
                    </ul>
                  );
                }
              )}
            </div>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}

export default UsersList;
