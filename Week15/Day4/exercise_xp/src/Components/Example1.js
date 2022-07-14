import React, { Component } from "react";

const data = require("./Exercise2bData.json");
class Example1 extends Component {
  render() {
    return data.SocialMedias.map((item, index) => {
      return (
        <div key={index}>
          <ul>
            <li>{item}</li>
          </ul>
        </div>
      );
    });
  }
}

export default Example1;
