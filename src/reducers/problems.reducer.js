import {
  FETCH_PROBLEM_START,
  FETCH_PROBLEM_SUCCESS,
  FETCH_PROBLEM_FAIL,
  ADD_PROBLEM_START,
  ADD_PROBLEM_SUCCESS,
  ADD_PROBLEM_FAIL,
  FETCH_ADMIN_PROBLEM_START,
  FETCH_ADMIN_PROBLEM_SUCCESS,
  FETCH_ADMIN_PROBLEM_FAIL,
  UPDATE_ADMIN_PROBLEM_START,
  UPDATE_ADMIN_PROBLEM_SUCCESS,
  UPDATE_ADMIN_PROBLEM_FAIL
} from "../actions";

const initialState = {
  problems: [],
  newlyAddedProblem: {},
  error: false,
  fetchingProblems: false,
  addingNewProblem: false
};

const problems = (state = initialState, action) => {
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
    case FETCH_ADMIN_PROBLEM_START:
      return {
        ...state,
        error: "",
        fetchingAdminProblems: true
      };

    case FETCH_ADMIN_PROBLEM_SUCCESS:
      return {
        ...state,
        problems: action.payload,
        error: "",
        fetchingAdminProblems: false
      };

    case FETCH_ADMIN_PROBLEM_FAIL:
      return {
        ...state,
        error: action.payload,
        fetchingAdminProblems: false
      };

    case UPDATE_ADMIN_PROBLEM_START:
      return {
        ...state,
        error: "",
        updatingProblem: true
      };

    case UPDATE_ADMIN_PROBLEM_SUCCESS:
      return {
        ...state,
        message: action.payload,
        error: "",
        updatingProblem: false
      };

    case UPDATE_ADMIN_PROBLEM_FAIL:
      return {
        ...state,
        error: action.payload,
        updatingProblem: false
      };

    default:
      return state;
  }
};

export default problems;
