import React from "react";
import { connect } from "react-redux";
import select from "../actions";
import MovieDetails from "./MovieDetails";

function MovieList(props) {
  console.log(props.movies);
  return (
    <div>
      <ul>
        {props.movies.map((movie, index) => {
          return (
            <div key={index}>
              <li>{movie.title}</li>
              <button onClick={console.log(movie.title)}>details</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { movies: state.movies };
};

const mapDispatchToProps = (dispatch) => {
  return { selectMovie: (e) => dispatch(select(e.target.value)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
