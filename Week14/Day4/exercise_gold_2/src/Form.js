import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = { title: "", author: "", genre: "", yearPub: null };
  }
  submitForm = (e) => {
    e.preventDefault();
    this.setState({
      title: e.target.title.value,
      author: e.target.author.value,
      genre: e.target.genre.value,
      yearPub: e.target.yearPub.value,
    });
  };
  render() {
    let successMessage;
    if (
      this.state.title !== "" &&
      this.state.author !== "" &&
      this.state.genre !== "" &&
      this.state.yearPub !== null
    ) {
      successMessage = "Data Sent!";
      console.log(this.state);
    }
    return (
      <>
        <form
          onSubmit={this.submitForm}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            flexDirection: "column",
          }}
        >
          <header></header>
          <h2>{successMessage}</h2>
          <label htmlFor="title">Title</label>
          <input type={"text"} name="title" />
          <label htmlFor="author">Author</label>
          <input type={"text"} name="author" />
          <label htmlFor="genre">Genre</label>
          <input type={"text"} name="genre" />
          <label htmlFor="yearPub">Year Published</label>
          <input type={"text"} name="yearPub" />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
export default Form;
