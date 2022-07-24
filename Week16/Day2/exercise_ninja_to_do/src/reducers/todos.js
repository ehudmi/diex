const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todo: action.payload,
      };
    case "TOGGLE_COMPLETE":
      return {
        ...state,
        completed: action.payload,
      };

    default:
      return state;
  }
};
export default todos;
