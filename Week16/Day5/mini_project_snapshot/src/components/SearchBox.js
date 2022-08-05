import React, { Component } from "react";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  submitHandler = (event) => {
    event.preventDefault();
    console.log(event.target.searchInput.value);
    // this.setState({
    //   selected: {
    //     name: event.target.searchInput.value,
    //     path: `/${event.target.searchInput.value.toLowerCase()}`,
    //   },
    // });
    console.log(this.state);
    // this.props.getPics(this.state.selected.name, this.state.selected.path);
    this.props.getPics(
      event.target.searchInput.value,
      `/${event.target.searchInput.value.toLowerCase()}`
    );
  };
  render() {
    return (
      <div>
        <form
          onSubmit={this.submitHandler}
          // onSubmit={(event) => {
          //   console.log(`/${event.target.searchInput.value}`);
          //   event.preventDefault();
          //   this.props.getPics(
          //     event.target.searchInput.value,
          //     `/${event.target.searchInput.value}`
          //   );
          // }}
        >
          <input name="searchInput" type={"text"} />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBox;
