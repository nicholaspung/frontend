import axios from "axios";

export const FETCH_PROBLEM_START = "FETCH_PROBLEMS_START";
export const FETCH_PROBLEM_SUCCESS = "FETCH_PROBLEMS_SUCCESS";
export const FETCH_PROBLEM_FAIL = "FETCH_PROBLEMS_FAIL";

export const ADD_PROBLEM_START = "ADD_PROBLEM_START";
export const ADD_PROBLEM_SUCCESS = "ADD_PROBLEM_SUCCESS";
export const ADD_PROBLEM_FAIL = "ADD_PROBLEM_FAIL";

export const ADD_USER_START = "ADD_USER_START";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAIL = "ADD_USER_FAIL";

export const FETCH_USERS_START = "FETCH_USERS_START";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAIL = "FETCH_USERS_FAIL";

export const getProblems = () => dispatch => {
  dispatch({ type: FETCH_PROBLEM_START });

  return axios
    .get("https://labs15-lambdanext.herokuapp.com/problems")
    .then(res => {
      dispatch({ type: FETCH_PROBLEM_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: FETCH_PROBLEM_FAIL, payload: err }));
};

export const getProblemsByID = id => dispatch => {
  dispatch({ type: FETCH_PROBLEM_START });

  return axios
    .get(`https://labs15-lambdanext.herokuapp.com/problems/${id}`)
    .then(res => {
      dispatch({ type: FETCH_PROBLEM_SUCCESS, payload: res.data });
    })
    .catch(error => dispatch({ type: FETCH_PROBLEM_FAIL, payload: error }));
};

export const addProblems = problem => dispatch => {
  dispatch({ type: ADD_PROBLEM_START });

  return axios
    .post("https://labs15-lambdanext.herokuapp.com/problems", problem)
    .then(res => {
      dispatch({ type: ADD_PROBLEM_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: ADD_PROBLEM_FAIL, payload: error });
    });
};

export const getUsers = () => dispatch => {
  dispatch({ type: FETCH_USERS_START });
  return axios
    .post("https://labs15-lambdanext.herokuapp.com/users")
    .then(res => {
      dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: FETCH_USERS_FAIL, payload: error });
    });
};

export const addUser = user => dispatch => {
  dispatch({ type: ADD_USER_START });
  return axios
    .post("https://labs15-lambdanext.herokuapp.com/users/signup", user)
    .then(res => {
      dispatch({ type: ADD_USER_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: ADD_USER_FAIL, payload: error });
    });
};
