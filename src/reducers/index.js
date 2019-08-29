import { combineReducers } from "redux";
import problems from "./problems";
import users from "./users";

const nextApp = combineReducers({
  problems,
  users
});

export default nextApp;
