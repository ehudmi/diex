const visibilityFilter = (state, action) => {
  switch (action.type) {
    case "SHOW_ALL":
      return {
        ...state,
        all: action.payload,
      };
    case "SHOW_ACTIVE":
      return {
        ...state,
        active: action.payload,
      };
    case "SHOW_COMPLETED":
      return {
        ...state,
        completed: action.payload,
      };
    default:
      return state;
  }
};
export default visibilityFilter;

// todos.filter((item)=>{item.visibility===true})
