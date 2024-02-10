import { combineReducers } from "redux";
import { courseReducer } from "./courseReducer.js";
const reducers = combineReducers({
  courses : courseReducer
});
export default reducers;