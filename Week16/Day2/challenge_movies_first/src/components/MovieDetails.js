import React from "react";
import { connect } from "react-redux";

function MovieDetails(props) {
  // console.log(props);
  return (
    <div>
      <h3>Movie Details</h3>
      <p>{props.selectedMovie}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  // console.log(state.selectedMovieState);
  return { selectedMovie: state.selectedMovieState };
};
export default connect(mapStateToProps)(MovieDetails);
