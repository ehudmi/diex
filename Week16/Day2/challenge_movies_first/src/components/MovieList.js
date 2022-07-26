import React from "react";
import { connect } from "react-redux";
import selectMovie from "../actions";

function MovieList(props) {
  return (
    <div>
      <ul>
        {props.movies.map((movie, index) => {
          return (
            <div key={index}>
              <li>{movie.title}</li>
              <button value={movie.title} onClick={props.selectMovie}>
                details
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  // console.log(state.moviesState.movies);
  return { movies: state.moviesState.movies };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectMovie: (event) => {
      dispatch(selectMovie(event.target.value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
