import {
  FETCH_PROBLEM_START,
  FETCH_PROBLEM_SUCCESS,
  FETCH_PROBLEM_FAIL,
  ADD_PROBLEM_START,
  ADD_PROBLEM_SUCCESS,
  ADD_PROBLEM_FAIL,
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  ADD_USER_START,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
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
  addingNewProblem: false,

  fetchingAdminProblems: false,

  updatingProblem: false,

  users: [],
  fetchingUsers: false,
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
    case FETCH_USERS_START:
      return {
        ...state,
        error: "",
        fetchingUsers: true
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        error: "",
        fetchingUsers: false
      };

    case FETCH_USERS_FAIL:
      return {
        ...state,
        error: action.payload,
        fetchingUsers: false
      };
    default:
      return state;
  }
};

export default reducer;
