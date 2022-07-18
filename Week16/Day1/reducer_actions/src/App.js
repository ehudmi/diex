import "./App.css";
import React, { Component } from "react";
import Day from "./Day";

//import the store from store/index.js file
import { store } from "./store";

class App extends Component {
  render() {
    return (
      <div>
        {/* we call the <Day> Component */}
        <Day weekday={store.getState().weekday} />
      </div>
    );
  }
}

export default App;
