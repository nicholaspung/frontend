import { FETCH_PROBLEM_START, FETCH_PROBLEM_SUCCESS, FETCH_PROBLEM_FAIL } from '../actions';

const initialState = {
  problems: [],
  error: false,
  fetchingProblems: false
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROBLEM_START:
      return {
        ...state,
        error: false,
        fetchingProblems: true
      };

    case FETCH_PROBLEM_SUCCESS:
      return {
        ...state,
        problems: action.payload,
        error: false,
        fetchingProblems: false,

      };

    case FETCH_PROBLEM_FAIL:
      return {
        ...state,
        error: action.payload,
        fetchingProblems: false,

      };

    default: return state;
  }
};

export default reducer;
