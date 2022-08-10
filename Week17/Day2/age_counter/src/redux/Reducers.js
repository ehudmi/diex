const initialState = { age: 20 };

export const ageReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "AGE_UP":
      return { ...state, age: state.age + action.payload };
    case "AGE_DOWN":
      return { ...state, age: state.age + action.payload };
    default:
      return { ...state };
  }
};
