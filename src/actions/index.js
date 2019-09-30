import axios from 'axios';

export const FETCH_PROBLEMS_START = 'FETCH_PROBLEMS_START';
export const FETCH_PROBLEMS_SUCCESS = 'FETCH_PROBLEMS_SUCCESS';
export const FETCH_PROBLEMS_FAIL = 'FETCH_PROBLEMS_FAIL';

export const ADD_PROBLEM_START = 'ADD_PROBLEM_START';
export const ADD_PROBLEM_SUCCESS = 'ADD_PROBLEM_SUCCESS';
export const ADD_PROBLEM_FAIL = 'ADD_PROBLEM_FAIL';

export const FETCH_PROBLEM_START = 'FETCH_PROBLEM_START';
export const FETCH_PROBLEM_SUCCESS = 'FETCH_PROBLEM_SUCCESS';
export const FETCH_PROBLEM_FAIL = 'FETCH_PROBLEM_FAIL';

export const FETCH_POPULAR_START = 'FETCH_POPULAR_START';
export const FETCH_POPULAR_SUCCESS = 'FETCH_POPULAR_SUCCESS';
export const FETCH_POPULAR_FAIL = 'FETCH_POPULAR_FAIL';

export const UPDATE_PROBLEM_START = 'UPDATE_PROBLEM_START';
export const UPDATE_PROBLEM_SUCCESS = 'UPDATE_PROBLEM_SUCCESS';
export const UPDATE_PROBLEM_FAIL = 'UPDATE_PROBLEM_FAIL';

export const ADD_USER_START = 'ADD_USER_START';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAIL = 'ADD_USER_FAIL';

export const FETCH_USERS_START = 'FETCH_USERS_START';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAIL = 'FETCH_USERS_FAIL';

export const FETCH_ADMIN_PROBLEM_START = 'FETCH_ADMIN_PROBLEM_START';
export const FETCH_ADMIN_PROBLEM_SUCCESS = 'FETCH_ADMIN_PROBLEM_SUCCESS';
export const FETCH_ADMIN_PROBLEM_FAIL = 'FETCH_ADMIN_PROBLEM_FAIL';

export const UPDATE_ADMIN_PROBLEM_START = 'UPDATE_ADMIN_PROBLEM_START';
export const UPDATE_ADMIN_PROBLEM_SUCCESS = 'UPDATE_ADMIN_PROBLEM_SUCCESS';
export const UPDATE_ADMIN_PROBLEM_FAIL = 'UPDATE_ADMIN_PROBLEM_FAIL';

export const DELETE_ADMIN_PROBLEM_START = 'UPDATE_ADMIN_PROBLEM_START';
export const DELETE_ADMIN_PROBLEM_SUCCESS = 'UPDATE_ADMIN_PROBLEM_SUCCESS';
export const DELETE_ADMIN_PROBLEM_FAIL = 'UPDATE_ADMIN_PROBLEM_FAIL';

export const getProblems = () => (dispatch) => {
  dispatch({ type: FETCH_PROBLEMS_START });

  return axios
    .get('https://labs15-production-server.herokuapp.com/problems')
    .then((res) => {
      dispatch({ type: FETCH_PROBLEMS_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: FETCH_PROBLEMS_FAIL, payload: err }));
};

export const getProblemsByID = (id) => (dispatch) => {
  dispatch({ type: FETCH_PROBLEM_START });

  return axios
    .get(`https://labs15-production-server.herokuapp.com/problems/${id}`)
    .then((res) => {
      dispatch({ type: FETCH_PROBLEM_SUCCESS, payload: res.data });
    })
    .catch((error) => dispatch({ type: FETCH_PROBLEM_FAIL, payload: error }));
};

export const addProblems = (problem) => (dispatch) => {
  dispatch({ type: ADD_PROBLEM_START });

  return axios
    .post('https://labs15-production-server.herokuapp.com/problems', problem)
    .then((res) => {
      dispatch({ type: ADD_PROBLEM_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: ADD_PROBLEM_FAIL, payload: error });
    });
};

export const updateVote = (id, vote) => (dispatch) => {
  dispatch({ type: UPDATE_PROBLEM_START });

  return axios
    .put(`https://labs15-production-server.herokuapp.com/problems/${id}/rate`, vote)
    .then((res) => {
      dispatch({ type: UPDATE_PROBLEM_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: UPDATE_PROBLEM_FAIL, payload: error });
    });
};

export const getPopular = () => (dispatch) => {
  dispatch({ type: FETCH_POPULAR_START });

  return axios
    .get('https://labs15-production-server.herokuapp.com/problems/popular')
    .then((res) => {
      dispatch({ type: FETCH_POPULAR_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: FETCH_POPULAR_FAIL });
    });
};

export const getUsers = () => (dispatch) => {
  dispatch({ type: FETCH_USERS_START });

  return axios
    .get('https://labs15-production-server.herokuapp.com/users')
    .then((res) => {
      dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: FETCH_USERS_FAIL, payload: error });
    });
};

export const addUser = (user) => (dispatch) => {
  dispatch({ type: ADD_USER_START });

  return axios
    .post('https://labs15-production-server.herokuapp.com/users/signup', user)
    .then((res) => {
      dispatch({ type: ADD_USER_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: ADD_USER_FAIL, payload: error });
    });
};

export const getAdminProblems = () => (dispatch) => {
  axios.defaults.withCredentials = true;
  dispatch({ type: FETCH_ADMIN_PROBLEM_START });
  // axios.get('http://labs15-lambdanext.herokuapp.com/').then((res) => {
  //   console.log('LS JWT', JWT);
  // });
  return axios
    .get('https://labs15-production-server.herokuapp.com/admin/all', { credentials: true })
    .then((res) => {
      console.log('clg res', res);
      // console.log('res . req info fe', res.req.authInfo);
      dispatch({ type: FETCH_ADMIN_PROBLEM_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: FETCH_ADMIN_PROBLEM_FAIL, payload: err }));
};

export const updateAdminProblems = (id, isApproved) => (dispatch) => {
  axios.defaults.withCredentials = true;
  dispatch({ type: UPDATE_ADMIN_PROBLEM_START });

  return axios
    .put(`https://labs15-production-server.herokuapp.com/admin/all/${id}`, {
      isApproved
    })
    .then((res) => {
      dispatch({ type: UPDATE_ADMIN_PROBLEM_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: UPDATE_ADMIN_PROBLEM_FAIL, payload: err }));
};

export const deleteAdminProblem = (id) => (dispatch) => {
  axios.defaults.withCredentials = true;
  dispatch({ type: DELETE_ADMIN_PROBLEM_START });

  return axios
    .delete(`https://labs15-production-server.herokuapp.com/admin/all/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_ADMIN_PROBLEM_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: DELETE_ADMIN_PROBLEM_FAIL,
        payload: 'Error with deleting'
      });
    });
};
