const movieSelected = (item) => {
  return { type: "MOVIE_SELECTED", payload: item };
};

export default movieSelected;
