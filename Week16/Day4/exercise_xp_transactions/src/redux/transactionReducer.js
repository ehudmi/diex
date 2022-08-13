let initialState = {
  currentIndex: -1,
  list: [JSON.parse(localStorage.getItem("transactions"))],
};

export const transactionReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "INSERT":
      state.list.push(action.payload);
      return { ...state, currentIndex: state.currentIndex + 1 };
    case "UPDATE":
      console.log(action.payload, state.currentIndex);
      return (state.list[state.currentIndex] = action.payload);
    case "UPDATE-INDEX":
      return { ...state.list, currentIndex: action.payload };
    case "DELETE":
      state.list.splice(action.payload, 1);
      return { ...state, currentIndex: state.currentIndex - 1 };
    default:
      return { ...state };
  }
};
