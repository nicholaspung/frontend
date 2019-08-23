import axios from 'axios';

export const FETCH_PROBLEM_START = 'FETCH_PROBLEMS_START';
export const FETCH_PROBLEM_SUCCESS = 'FETCH_PROBLEMS_SUCCESS';
export const FETCH_PROBLEM_FAIL = 'FETCH_PROBLEMS_FAIL';

export const getProblems = () => (dispatch) => {
  dispatch({ type: FETCH_PROBLEM_START });

  return axios
    .get('https://labs15-lambdanext.herokuapp.com/problems')
    .then((res) => {
      dispatch({ type: FETCH_PROBLEM_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: FETCH_PROBLEM_FAIL, payload: err }));
};

export const getProblemsByID = () => (dispatch) => {
  dispatch({ type: FETCH_PROBLEM_START });

  return axios
    .get('https://labs15-lambdanext.herokuapp.com/problems/:id')
    .then((res) => {
      dispatch({ type: FETCH_PROBLEM_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: FETCH_PROBLEM_FAIL, payload: err }));
};
