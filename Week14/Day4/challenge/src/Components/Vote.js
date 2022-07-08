import React, { Component } from "react";

class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: this.props.label,
      counter: 0,
    };
  }
  countVotes = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#ffebcd",
          border: "1px solid black",
          margin: "2px",
          padding: "10px 40px",
          fontSize: "24px",
          textAlign: "center",
        }}
      >
        <div>{this.state.counter}</div>
        <div>{this.state.label}</div>
        <button
          style={{
            color: "green",
            fontSize: "30px",
            backgroundColor: "transparent",
            border: "none",
          }}
          onClick={this.countVotes}
        >
          Click Here
        </button>
      </div>
    );
  }
}

export default Vote;
