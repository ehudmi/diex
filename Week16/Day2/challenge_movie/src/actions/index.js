export const movieSelected = (item) => {
  // console.log("here");
  // console.log(item);
  return { type: "MOVIE_SELECTED", payload: item };
};
