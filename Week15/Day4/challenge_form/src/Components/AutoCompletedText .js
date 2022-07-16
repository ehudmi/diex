import React, { Component } from "react";
import countries from "./countries";

class AutoCompletedText extends Component {
  constructor() {
    super();
    this.state = {
      suggestions: [],
      text: "",
    };
  }
  onChange = (e) => {
    const text = e.target.value;
    const suggestions = countries.filter(
      (suggestion) => suggestion.toLowerCase().indexOf(text.toLowerCase()) === 0
    );
    this.setState({
      suggestions,
      text: e.target.value,
    });
  };
  onClick = (e) => {
    this.setState({
      suggestions: [],
      text: e.target.innerText,
    });
  };
  render() {
    const {
      onChange,
      onClick,
      state: { suggestions, text },
    } = this;
    let suggestionsListComponent;
    if (text) {
      if (suggestions.length) {
        suggestionsListComponent = (
          <ul style={{ listStyleType: "none" }}>
            {suggestions.map((suggestion, index) => {
              return (
                <li key={index} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
            <p>Suggestions: {suggestions.length}</p>
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div>
            <em>No suggestions available.</em>
          </div>
        );
      }
    }
    return (
      <>
        <input type="text" onChange={onChange} value={text} />
        {suggestionsListComponent}
      </>
    );
  }
}

export default AutoCompletedText;
