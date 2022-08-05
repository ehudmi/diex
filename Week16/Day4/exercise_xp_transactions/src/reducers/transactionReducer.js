let initialState = {
  currentIndex: -1,
  list: [],
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INSERT":
      // console.log(action.payload, state.list, state.currentIndex);
      // console.log("I'm in the reducer", action.payload);
      state.list.push(action.payload);
      return { ...state, currentIndex: state.currentIndex + 1 };
    case "UPDATE":
      console.log("I'm in the reducer", action.payload);
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
