import React, { Component } from "react";

const data = require("./Exercise2bData.json");
class Example2 extends Component {
  render() {
    return data.Skills.map((item, index) => {
      return (
        <div key={index}>
          <h1>{item.Area}</h1>
          <ul>
            {item.SkillSet.map((value, index) => {
              return <li key={index}>{value.Name}</li>;
            })}
          </ul>
        </div>
      );
    });
  }
}

export default Example2;
