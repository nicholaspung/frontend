import {
  ADD_USER_START,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL
} from "../actions";

const initialUserState = {
  users: [],
  error: false,
  newlyAddedUser: {},
  fetchingUsers: false,
  addingNewUser: false
};

const users = (state = initialUserState, action) => {
  switch (action.type) {
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

export default users;
