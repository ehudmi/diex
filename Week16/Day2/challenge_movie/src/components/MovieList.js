import React from "react";
import { connect } from "react-redux";
import movieSelected from "../actions/index";

function MovieList({ movies, movieSelected }) {
  //   console.log(props.movies);
  return (
    <div
      style={{
        display: "inline-block",
        marginLeft: "100px",
        justifyContent: "center",
        textAlign: "left",
        width: "400px",
      }}
    >
      <h1>Movie List</h1>
      {movies.map((item, index) => {
        return (
          <div key={index}>
            <span>{item.title}</span>
            <button
              style={{ float: "right" }}
              onClick={() => {
                movieSelected(item);
              }}
            >
              Details
            </button>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  //   console.log(state.movies);
  return { movies: state.movies };
};

const mapDispatchToProps = { movieSelected };

//   console.log(movieSelected);
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
