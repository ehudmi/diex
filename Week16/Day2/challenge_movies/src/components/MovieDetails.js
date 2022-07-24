import React from "react";
import { connect } from "react-redux";

function MovieDetails(props) {
  console.log(props);
  return <div>MovieDetails</div>;
}

const mapStateToProps = (state) => {
  console.log(state.select);
  return { selectedMovie: state.select };
};
export default connect(mapStateToProps)(MovieDetails);
