const INITIAL_STATE = { counter: 0 };

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREASE":
      //   console.log("reducer.js");
      //   console.log(action.payload);
      console.log(state.counter + action.payload);
      return { ...state, counter: state.counter + action.payload };
    default:
      return { ...state };
  }
};
