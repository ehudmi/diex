import React, { Component } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import Pagination from "./components/Pagination";
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
      selected: { name: "Mountain", path: "/mountain", perPage: 12 },
    };
  }
  getPics = async (topic, path, number) => {
    this.setState({ selected: { name: topic, path: path, perPage: number } });
    const response = await fetch(
      `${
        this.state.baseUrl
      }search?query=${topic.toLowerCase()}&per_page=${number}`,
      {
        method: "GET",
        headers: {
          Authorization: this.state.apiKey,
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    this.setState({ images: json });
    localStorage.setItem("selected", JSON.stringify(this.state.selected));
  };

  componentDidMount() {
    if (!localStorage.getItem("selected")) {
      this.getPics("Mountain", "/mountain", 12);
    } else {
      const retrieve = JSON.parse(localStorage.getItem("selected"));
      this.getPics(retrieve.name, retrieve.path, retrieve.perPage);
    }
  }

  render() {
    if (!this.state.images) {
      return <div>Loading</div>;
    } else
      return (
        <div className="App">
          <h1>SnapShots</h1>
          <SearchBox
            getPics={this.getPics}
            number={this.state.selected.perPage}
          />
          <div className="links">
            {this.state.links.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={item.name.toLowerCase()}
                  onClick={() => {
                    this.getPics(
                      item.name,
                      item.path,
                      this.state.selected.perPage
                    );
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <Routes>
            <Route
              path="/"
              element={<Navigate to={this.state.selected.path} />}
            />
            <Route
              path=":query"
              element={
                <PhotoPage
                  images={this.state.images}
                  perPage={this.state.selected.perPage}
                />
              }
            />
          </Routes>
          <div className="pagination">
            <Pagination
              getPics={this.getPics}
              topic={this.state.selected.name}
              path={this.state.selected.path}
            />
          </div>
        </div>
      );
  }
}

export default App;
