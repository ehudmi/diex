import React from "react";
import { connect } from "react-redux";

function VisibleTodoList() {
  return <div>VisibleTodoList</div>;
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList);
