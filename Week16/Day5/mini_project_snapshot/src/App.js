import React, { Component } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import SearchBox from "./components/SearchBox";
import PhotoPage from "./containers/PhotoPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      links: [
        { name: "Mountain", path: "/mountain" },
        { name: "Beaches", path: "/beaches" },
        { name: "Birds", path: "/birds" },
        { name: "Food", path: "/food" },
      ],
      baseUrl: "https://api.pexels.com/v1/",
      apiKey: "563492ad6f917000010000018a2cae379ad74b33828c5b5f67df8468",
      perPage: 3,
      selected: { name: "Mountain", path: "/mountain" },
    };
  }
  getPics = async (topic, path) => {
    this.setState({ selected: { name: topic, path: path } });
    const response = await fetch(
      `${this.state.baseUrl}search?query=${topic.toLowerCase()}&per_page=${
        this.state.perPage
      }`,
      {
        method: "GET",
        headers: {
          Authorization: this.state.apiKey,
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    // console.log(json);
    this.setState({ images: json });
    localStorage.setItem("selected", JSON.stringify(this.state.selected));
    console.log(this.state);
  };
  componentDidMount() {
    const retrieve = JSON.parse(localStorage.getItem("selected"));
    console.log(retrieve.name);
    this.getPics(retrieve.name, retrieve.path);
  }

  render() {
    if (!this.state.images) {
      return <div>Loading</div>;
    } else
      return (
        <div className="App">
          <SearchBox getPics={this.getPics} />
          {this.state.links.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.name.toLowerCase()}
                onClick={() => {
                  // console.log(this.state);
                  this.getPics(item.name, item.path);
                  // console.log(this.state.selectedPath);
                }}
              >
                {item.name}
              </Link>
            );
          })}

          <Routes>
            <Route
              path="/"
              element={<Navigate to={this.state.selected.path} />}
            />
            {/* <Route
              path={this.state.selected.path}
              element={
                <PhotoPage
                  images={this.state.images}
                  perPage={this.state.perPage}
                />
              }
            /> */}
            <Route
              path=":query"
              element={
                <PhotoPage
                  images={this.state.images}
                  perPage={this.state.perPage}
                />
              }
            />
          </Routes>
        </div>
      );
  }
}

export default App;
