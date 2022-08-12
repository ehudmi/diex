const initialState = { age: 20 };

export const ageReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "AGE_UP":
      return { ...state, age: state.age + action.value, loading: false };
    case "AGE_DOWN":
      return { ...state, age: state.age - action.value };
    case "LOADING":
      return { ...state, loading: true };
    default:
      return { ...state };
  }
};
