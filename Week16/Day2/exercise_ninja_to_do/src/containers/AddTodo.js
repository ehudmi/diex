import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../action";

function AddTodo({ dispatch }) {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addTodo(e.target.value));
        }}
      >
        <input type={"text"} />
        <button>Add Todo</button>
      </form>
    </div>
  );
}

export default connect()(AddTodo);
