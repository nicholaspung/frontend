import {
  GET_GITHUB_USER_FAIL,
  GET_GITHUB_USER_START,
  GET_GITHUB_USER_SUCCESS
} from "../actions/github.action";

const initialState = {
  user: {},
  error: "",
  pendingGitHub: false
};

const github = (state = initialState, action) => {
  switch (action.type) {
    case GET_GITHUB_USER_START:
      return { ...state, pendingGitHub: true, error: "" };
    case GET_GITHUB_USER_SUCCESS:
      return { ...state, pendingGitHub: false, user: action.payload };
    case GET_GITHUB_USER_FAIL:
      return { ...state, pendingGitHub: false, error: action.payload };
    default:
      return state;
  }
};

export default github;
