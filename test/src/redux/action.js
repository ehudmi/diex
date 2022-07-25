export const addOne = (action) => {
  //   console.log("here");
  //   console.log("this is from action.js", action);
  return {
    type: "INCREASE",
    payload: action,
  };
};
