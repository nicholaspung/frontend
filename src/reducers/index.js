import {
  FETCH_PROBLEM_START,
  FETCH_PROBLEM_SUCCESS,
  FETCH_PROBLEM_FAIL,
  ADD_PROBLEM_START,
  ADD_PROBLEM_SUCCESS,
  ADD_PROBLEM_FAIL,
  ADD_USER_START,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL
} from "../actions";

const initialState = {
  problems: [],
  newlyAddedProblem: {},
  error: false,
  fetchingProblems: false,
  addingNewProblem: false,
  users: [],
  newlyAddedUser: {},
  addingNewUser: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROBLEM_START:
      return {
        ...state,
        error: "",
        fetchingProblems: true
      };

    case FETCH_PROBLEM_SUCCESS:
      return {
        ...state,
        problems: action.payload,
        error: "",
        fetchingProblems: false
      };

    case FETCH_PROBLEM_FAIL:
      return {
        ...state,
        error: action.payload,
        fetchingProblems: false
      };

    case ADD_PROBLEM_START:
      return {
        ...state,
        error: "",
        addingNewProblem: true
      };

    case ADD_PROBLEM_SUCCESS:
      return {
        ...state,
        newlyAddedProblem: action.payload,
        error: "",
        addingNewProblem: false
      };

    case ADD_PROBLEM_FAIL:
      return {
        ...state,
        error: action.payload,
        addingNewProblem: false
      };
    case ADD_USER_START:
      return {
        ...state,
        error: "",
        addingNewUser: true
      };

    case ADD_USER_SUCCESS:
      return {
        ...state,
        newlyAddedUser: action.payload,
        error: "",
        addingNewUser: false
      };

    case ADD_USER_FAIL:
      return {
        ...state,
        error: action.payload,
        addingNewUser: false
      };
    default:
      return state;
  }
};

export default reducer;
