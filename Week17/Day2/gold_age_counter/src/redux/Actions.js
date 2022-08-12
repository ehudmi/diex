export const ageUpAsync = (val) => {
  return { type: "AGE_UP", value: val };
};
export const ageDown = (val) => {
  return { type: "AGE_DOWN", value: val };
};
export const loading = () => {
  return { type: "LOADING" };
};
export const ageUp = (val) => {
  return (dispatch) => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(ageUpAsync(val));
    }, 5000);
  };
};
