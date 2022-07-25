import React from "react";
import { connect } from "react-redux";
import { addOne } from "../redux/action";

function counter(props) {
  return (
    <div>
      <div>counter</div>
      <button value="1" onClick={props.increaseCount}>
        Click Me
      </button>
    </div>
  );
}

// const increaseCount = (event) => {
//   console.log(event.target.value);
//   //   console.log("works");
// };

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCount: (event) => dispatch(addOne(Number(event.target.value))),
  };
};

export default connect(null, mapDispatchToProps)(counter);
