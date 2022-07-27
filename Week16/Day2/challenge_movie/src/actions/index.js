export const movieSelected = (item) => {
  // console.log("here");
  // console.log(item);
  return {
    type: "SELECTED",
    payload: item,
  };
};
