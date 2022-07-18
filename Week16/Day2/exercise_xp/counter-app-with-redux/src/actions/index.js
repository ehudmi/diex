const increase = (value) => {
  return {
    type: "INCREASE_COUNT",
    payload: value,
  };
};

const decrease = (value) => {
  return {
    type: "DECREASE_COUNT",
    payload: value,
  };
};

export { increase, decrease };
