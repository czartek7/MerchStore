import counterReducer from "./counter";
import isLogged from "./logged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  logged: isLogged,
});

export default allReducers;
