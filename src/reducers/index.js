import { combineReducers } from "redux";
import problems from "./problems";
import users from "./users";
import nav from "./nav";

const reducer = combineReducers({
  problems,
  users,
  nav
});

export default reducer;
