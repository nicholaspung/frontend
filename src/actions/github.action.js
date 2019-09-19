import axios from "axios";

export const GET_GITHUB_USER_START = "GET_GITHUB_USER_START";
export const GET_GITHUB_USER_SUCCESS = "GET_GITHUB_USER_SUCCESS";
export const GET_GITHUB_USER_FAIL = "GET_GITHUB_USER_FAIL";

export const getGitHubUser = username => dispatch => {
  dispatch({ type: GET_GITHUB_USER_START });

  return axios
    .get(`https://api.github.com/users/${username}`)
    .then(response => {
      dispatch({ type: GET_GITHUB_USER_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: GET_GITHUB_USER_FAIL, payload: error.message });
    });
};
