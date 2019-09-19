import { combineReducers } from "redux";
import problems from "./problems.reducer";
import users from "./users.reducer";
import nav from "./nav.reducer";
import github from "./github.reducer";

const reducer = combineReducers({
  problems,
  users,
  nav,
  github
});

export default reducer;
