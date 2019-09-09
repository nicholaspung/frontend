import { combineReducers } from "redux";
import problems from "./problems";
import users from "./users";

const reducer = combineReducers({
  problems,
  users
});

export default reducer;
