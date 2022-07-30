const transactionReducer = (state, action) => {
  switch (action.type) {
    case "INSERT":
      console.log(action.payload, state.list, state.currentIndex);
      if (state.list !== null) {
        return state.list.push(action.payload);
      } else
        return { list: [action.payload], currentIndex: state.currentIndex + 1 };
    case "UPDATE":
      return (state.list[state.currentIndex] = action.payload);
    // state.list.map((val, index) =>
    //   index === state.currentIndex ? (val = action.payload) : null
    // );
    case "UPDATE-INDEX":
      return { ...state.list, currentIndex: action.payload };
    case "DELETE":
      return state.list.splice(action.payload, 1);
    default:
      return { ...state };
  }
};
export default transactionReducer;
