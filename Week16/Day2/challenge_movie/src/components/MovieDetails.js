import React from "react";
import { connect } from "react-redux";

function MovieDetails(props) {
  if (!props.movieSelected) {
    <div>
      <h1>Details</h1>
    </div>;
  } else {
    return (
      <div style={{ marginLeft: "200px" }}>
        <h1>Details</h1>
        <p>Title: {props.movieSelected.title}</p>
        <p>Release Date: {props.movieSelected.releaseDate}</p>
        <p>Rating: {props.movieSelected.rating}</p>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { movieSelected: state.selectedMovie };
};
export default connect(mapStateToProps)(MovieDetails);
