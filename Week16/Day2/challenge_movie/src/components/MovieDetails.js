import React from "react";
import { connect } from "react-redux";

function MovieDetails({ selectedMovie }) {
  // console.log({ selectedMovie });
  return (
    <div>
      <h1>Mika</h1>
      <p>{selectedMovie}</p>
    </div>
  );
}
const mapStateToProps = (state) => {
  // console.log(state.selectedMovie);
  return { selectedMovie: state.selectedMovie };
};
export default connect(mapStateToProps)(MovieDetails);
