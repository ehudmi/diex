import React, { Component } from "react";
import Input from "./Input";

class TodoList extends Component {
  constructor() {
    super();
    this.state = { items: [] };
  }
  deleteItem = () => {};
  addItem = (event) => {
    this.setState({ items: [].push(event.target) });
  };
  render() {
    return (
      <div>
        <Input />
      </div>
    );
  }
}

export default TodoList;
