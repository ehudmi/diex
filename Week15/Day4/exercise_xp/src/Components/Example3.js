import React, { Component } from "react";

const data = require("./Exercise2bData.json");
class Example3 extends Component {
  render() {
    return data.Experiences.map((item, index) => {
      return (
        <div key={index}>
          <img src={item.logo} alt="what?" />
          <div>
            <a href={item.url}>{item.companyName}</a>
          </div>
          {item.roles.map((item, index) => {
            return (
              <div key={index}>
                <p style={{ fontWeight: "bold" }}>{item.title}</p>
                <p>
                  {item.startDate} {item.location}
                </p>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      );
    });
  }
}

export default Example3;
