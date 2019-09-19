import { combineReducers } from "redux";
import problems from "./problems";
import problem from "./problems";
import users from "./users";
import nav from "./nav";

const reducer = combineReducers({
  problems,
  problem,
  users,
  nav
});

export default reducer;
