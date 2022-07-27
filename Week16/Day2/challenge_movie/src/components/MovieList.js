import React from "react";
import { connect } from "react-redux";
import { movieSelected } from "../actions";

function MovieList(props) {
  //   console.log(props.movies);
  return (
    <div>
      {props.movies.map((item, index) => {
        return (
          <div key={index}>
            {item.title}
            <button onClick={() => movieSelected(item)}>Details</button>
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
