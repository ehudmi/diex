import React from "react";
import { connect } from "react-redux";

function score(props) {
  return (
    <div>
      <h1>Score</h1>
      {props.stateCounter}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    stateCounter: state.counter,
  };
};

export default connect(mapStateToProps)(score);
