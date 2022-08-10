export const ageIncrease = () => {
  return { type: "AGE_UP", payload: 1 };
};
export const ageDecrease = () => {
  return { type: "AGE_DOWN", payload: -1 };
};
