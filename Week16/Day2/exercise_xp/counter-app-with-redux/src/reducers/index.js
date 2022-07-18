// import { increase, decrease } from "../actions";
// import { store } from "../store";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE_COUNT":
      //   console.log(state.count);
      //   let add = store.count + action.payload;
      return {
        // ...state, //copying the original state
        count: state.count + action.payload, //update the count key from the state
      };
    case "DECREASE_COUNT":
      //   let substract = store.count + action.payload;
      //   console.log(state.count);
      return {
        // ...state, //copying the original state
        count: state.count + action.payload, //update the count key from the state
      };
    default:
      return state;
  }
};

export default reducer;
