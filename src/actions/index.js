import axios from 'axios';

export const FETCH_PROBLEM_START = 'FETCH_PROBLEMS_START';
export const FETCH_PROBLEM_SUCCESS = 'FETCH_PROBLEMS_SUCCESS';
export const FETCH_PROBLEM_FAIL = 'FETCH_PROBLEMS_FAIL';

export const ADD_PROBLEM_START = 'ADD_PROBLEM_START';
export const ADD_PROBLEM_SUCCESS = 'ADD_PROBLEM_SUCCESS';
export const ADD_PROBLEM_FAIL = 'ADD_PROBLEM_FAIL';

export const getProblems = () => (dispatch) => {
  dispatch({ type: FETCH_PROBLEM_START });

  return axios
    .get('https://my-json-server.typicode.com/ryanboris/json/results')
    .then((res) => {
      dispatch({ type: FETCH_PROBLEM_SUCCESS, payload: res.data });
    })
    .catch((error) => dispatch({ type: FETCH_PROBLEM_FAIL, payload: error }));
};

export const addProblems = (problem) => (dispatch) => {
  dispatch({ type: ADD_PROBLEM_START });

  return axios
    .post('https://labs15-lambdanext.herokuapp.com/problems', problem)
    .then((res) => {
      dispatch({ type: ADD_PROBLEM_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: ADD_PROBLEM_FAIL, payload: error });
    });
};
