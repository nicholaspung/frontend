import axios from "axios";

export const FETCH_PROBLEMS_START = "FETCH_PROBLEMS_START";
export const FETCH_PROBLEMS_SUCCESS = "FETCH_PROBLEMS_SUCCESS";
export const FETCH_PROBLEMS_FAIL = "FETCH_PROBLEMS_FAIL";

export const ADD_PROBLEM_START = "ADD_PROBLEM_START";
export const ADD_PROBLEM_SUCCESS = "ADD_PROBLEM_SUCCESS";
export const ADD_PROBLEM_FAIL = "ADD_PROBLEM_FAIL";

export const FETCH_PROBLEM_START = "FETCH_PROBLEM_START";
export const FETCH_PROBLEM_SUCCESS = "FETCH_PROBLEM_SUCCESS";
export const FETCH_PROBLEM_FAIL = "FETCH_PROBLEM_FAIL";

export const FETCH_POPULAR_START = "FETCH_POPULAR_START";
export const FETCH_POPULAR_SUCCESS = "FETCH_POPULAR_SUCCESS";
export const FETCH_POPULAR_FAIL = "FETCH_POPULAR_FAIL";

export const UPDATE_PROBLEM_START = "UPDATE_PROBLEM_START";
export const UPDATE_PROBLEM_SUCCESS = "UPDATE_PROBLEM_SUCCESS";
export const UPDATE_PROBLEM_FAIL = "UPDATE_PROBLEM_FAIL";

export const ADD_USER_START = "ADD_USER_START";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAIL = "ADD_USER_FAIL";

export const FETCH_USERS_START = "FETCH_USERS_START";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAIL = "FETCH_USERS_FAIL";

export const SET_HEADER_NAV_FALSE = "SET_HEADER_NAV_FALSE";
export const SET_HEADER_NAV_TRUE = "SET_HEADER_NAV_TRUE";
export const SET_HEADER_NAV_OPPOSITE = "SET_HEADER_NAV_OPPOSITE";

export const FETCH_ADMIN_PROBLEM_START = "FETCH_ADMIN_PROBLEM_START";
export const FETCH_ADMIN_PROBLEM_SUCCESS = "FETCH_ADMIN_PROBLEM_SUCCESS";
export const FETCH_ADMIN_PROBLEM_FAIL = "FETCH_ADMIN_PROBLEM_FAIL";

export const UPDATE_ADMIN_PROBLEM_START = "UPDATE_ADMIN_PROBLEM_START";
export const UPDATE_ADMIN_PROBLEM_SUCCESS = "UPDATE_ADMIN_PROBLEM_SUCCESS";
export const UPDATE_ADMIN_PROBLEM_FAIL = "UPDATE_ADMIN_PROBLEM_FAIL";

export const getProblems = () => dispatch => {
  dispatch({ type: FETCH_PROBLEMS_START });

  return axios
    .get("https://labs15-lambdanext.herokuapp.com/problems")
    .then(res => {
      dispatch({ type: FETCH_PROBLEMS_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: FETCH_PROBLEMS_FAIL, payload: err }));
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

export const updateVote = (id, vote) => dispatch => {
  dispatch({ type: UPDATE_PROBLEM_START });

  return axios
    .put(`https://labs15-lambdanext.herokuapp.com/problems/${id}/rate`, vote)
    .then(res => {
      dispatch({ type: UPDATE_PROBLEM_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: UPDATE_PROBLEM_FAIL, payload: error });
    });
};

export const getPopular = () => dispatch => {
  dispatch({ type: FETCH_POPULAR_START });

  return axios
    .get("https://labs15-lambdanext.herokuapp.com/problems/popular")
    .then(res => {
      dispatch({ type: FETCH_POPULAR_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: FETCH_POPULAR_FAIL });
    });
};

export const getUsers = () => dispatch => {
  dispatch({ type: FETCH_USERS_START });
  return axios
    .get("https://labs15-lambdanext.herokuapp.com/users")
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

export const setHeaderNavFalse = () => ({
  type: SET_HEADER_NAV_FALSE,
  payload: false
});

export const setHeaderNavTrue = () => ({
  type: SET_HEADER_NAV_TRUE,
  payload: true
});

export const setHeaderNavOpposite = checked => ({
  type: SET_HEADER_NAV_OPPOSITE,
  payload: !checked
});

export const getAdminProblems = () => dispatch => {
  dispatch({ type: FETCH_ADMIN_PROBLEM_START });

  // axios
  //   .get("https://labs15-lambdanext.herokuapp.com/users")
  //   .then(res => console.log("hello"));

  return axios
    .get("https://labs15-lambdanext.herokuapp.com/admin/all")
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCH_ADMIN_PROBLEM_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: FETCH_ADMIN_PROBLEM_FAIL, payload: err }));
};

export const UpdateAdminProblems = (id, isApproved) => dispatch => {
  dispatch({ type: UPDATE_ADMIN_PROBLEM_START });

  return axios
    .put(`https://labs15-lambdanext.herokuapp.com/admin/all/${id}`, {
      isApproved
    })
    .then(res => {
      dispatch({ type: UPDATE_ADMIN_PROBLEM_SUCCESS, payload: res.data });
    })
    .then(() => dispatch(getAdminProblems()))

    .catch(err => dispatch({ type: UPDATE_ADMIN_PROBLEM_FAIL, payload: err }));
};
