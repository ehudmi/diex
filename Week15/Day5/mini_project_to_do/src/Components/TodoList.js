import React, { Component } from "react";
import Input from "./Input";

class TodoList extends Component {
  constructor() {
    super();
    this.state = { items: [] };
  }

  // Delete item based on the item id and the element id clicked
  deleteItem = (event) => {
    let toDoItems = [...this.state.items];
    toDoItems.splice(
      toDoItems.findIndex((item) => {
        return Number(item.id) === Number(event.target.id);
      }),
      1
    );
    this.setState({ items: toDoItems });
  };

  // Add new Todo Item
  addItem = (event) => {
    if (event.keyCode === 13) {
      let id;
      let randomNum = 0;
      let toDoItems = [...this.state.items];
      do {
        randomNum = Math.random();
      } while (
        toDoItems.findIndex((item) => Number(item.id) === Number(randomNum)) >
        -1
      );
      id = randomNum;
      toDoItems = [...toDoItems, { id: id, toDoContent: event.target.value }];
      this.setState({
        items: toDoItems,
      });
      event.target.value = "";
    }
  };
  render() {
    return (
      <div>
        {this.state.items.map((item) => {
          return (
            <h1 id={item.id} key={item.id} onClick={this.deleteItem}>
              {item.toDoContent}
            </h1>
          );
        })}
        <Input onKey={this.addItem} />
      </div>
    );
  }
}

export default TodoList;
