const select = (selectedMovie) => {
  return {
    type: "MOVIE_SELECTED",
    payload: selectedMovie,
  };
};
export default select;
