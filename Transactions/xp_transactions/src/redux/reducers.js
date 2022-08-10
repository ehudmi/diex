let initState = {};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case "TEST":
      return { ...state };

    default:
      return { ...state };
  }
};
