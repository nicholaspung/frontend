import { combineReducers } from "redux";
import problems from "./problems.reducer";
import users from "./users.reducer";
import nav from "./nav.reducer";

const reducer = combineReducers({
  problems,
  users,
  nav
});

export default reducer;
