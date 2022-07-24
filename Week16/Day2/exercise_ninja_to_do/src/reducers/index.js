import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

const rootReducer = combineReducers({
  todosState: todos,
  visibilityFilterState: visibilityFilter,
});

export default rootReducer;
