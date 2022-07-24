import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import searchReducer from "./searchReducer";

const reducers = combineReducers({
  reduceArticle: articleReducer,
  reduceSearch: searchReducer,
});

export default reducers;
