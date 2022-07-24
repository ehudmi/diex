const addTodo = (item) => {
  return {
    type: "ADD_TODO",
    payload: item,
  };
};
const showAll = (item) => {
  return {
    type: "SHOW_ALL",
    payload: item,
  };
};
const showActive = (item) => {
  return {
    type: "SHOW_ACTIVE",
    payload: item,
  };
};
const showCompleted = (item) => {
  return {
    type: "SHOW_COMPLETED",
    payload: item,
  };
};
const toggleComplete = (completed) => {
  return {
    type: "TOGGLE_COMPLETE",
    payload: completed,
  };
};
export { addTodo, showAll, showActive, showCompleted, toggleComplete };
