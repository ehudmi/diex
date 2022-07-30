import React from "react";
import { connect } from "react-redux";

function MovieDetails({ movieSelected }) {
  if (!movieSelected) {
    return (
      <div>
        <h1>Details</h1>
      </div>
    );
  } else
    return (
      <div>
        <h1>Details</h1>
        <p>{movieSelected.title}</p>
        <p>{movieSelected.releaseDate}</p>
        <p>{movieSelected.rating}</p>
      </div>
    );
}
const mapStateToProps = (state) => {
  // console.log(state);
  return { movieSelected: state.selectedMovie };
};
export default connect(mapStateToProps)(MovieDetails);
