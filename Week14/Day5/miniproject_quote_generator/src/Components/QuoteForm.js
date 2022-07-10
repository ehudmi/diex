import React, { Component } from "react";
import Button from "./Button";
import Quote from "./Quote";
import quotes from "./QuotesDatabase";

let currentQuoteId = 0;
let randomNum = 0;
document.body.style.background = "lightblue";

class QuoteForm extends Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[0],
      newColor: "lightblue",
    };
  }

  // Pick random color using RGB
  pickColor = () => {
    let color =
      "#" +
      Math.floor(Math.random() * (256 * 256 * 256))
        .toString(16)
        .padStart(6, "0");
    this.setState({ newColor: color });
    document.body.style.background = color;
  };
  // Pick random index number and check it is not the current index
  pickQuote = () => {
    do {
      randomNum = Math.floor(Math.abs(Math.random() * (quotes.length - 1)));
    } while (currentQuoteId === randomNum);
    currentQuoteId = randomNum;
    this.setState({ quote: quotes[currentQuoteId] });
  };
  render() {
    return (
      <div
        style={{
          margin: "50px auto",
          justifyContent: "center",
          width: "500px",
          height: "300px",
          textAlign: "center",
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      >
        <Quote quoteArray={this.state.quote} color={this.state.newColor} />
        <Button
          color={this.state.newColor}
          buttonColor={this.pickColor}
          clickAction={this.pickQuote}
        />
      </div>
    );
  }
}

export default QuoteForm;
