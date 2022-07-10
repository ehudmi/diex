import React, { Component } from "react";

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: this.props.background,
          display: "block",
          boxSizing: "border-box",
          position: "absolute",
          width: "400px",
        }}
      >
        <q
          style={{
            color: this.props.color,
            textAlign: "left",
            fontSize: "30px",
            position: "relative",
            height: "100px",
            marginTop: "50px",
            marginLeft: "20px",
            display: "block",
          }}
        >
          {this.props.quoteArray.quote}
        </q>
        <h3
          style={{
            color: this.props.color,
            position: "fixed",
            height: "60px",
            width: "110px",
            wordWrap: "wrap",
            marginTop: "10px",
            marginLeft: "370px",
            fontStyle: "italic",
          }}
        >
          {this.props.quoteArray.author !== ""
            ? `-${this.props.quoteArray.author}-`
            : `-Unknown-`}
        </h3>
      </div>
    );
  }
}

export default Quote;
