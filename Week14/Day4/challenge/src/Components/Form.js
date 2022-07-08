import React, { Component } from "react";
import Vote from "./Vote";

class Form extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", margin: "30" }}>
          Vote Your Language!
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "751px",
            marginRight: "751px",
          }}
        >
          <Vote label="Php" />
          <Vote label="Python" />
          <Vote label="JavaScript" />
          <Vote label="Java" />
        </div>
      </div>
    );
  }
}

export default Form;
