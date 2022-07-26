const selectMovie = (selectedMovie) => {
  return {
    type: "MOVIE_SELECTED",
    payload: selectedMovie,
  };
};
export default selectMovie;
