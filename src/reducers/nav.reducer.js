import {
  SET_HEADER_NAV_FALSE,
  SET_HEADER_NAV_TRUE,
  SET_HEADER_NAV_OPPOSITE
} from "../actions/nav.action";

const initialState = {
  checked: false
};

const nav = (state = initialState, action) => {
  switch (action.type) {
    case SET_HEADER_NAV_FALSE:
      return {
        checked: action.payload
      };
    case SET_HEADER_NAV_TRUE:
      return {
        checked: action.payload
      };
    case SET_HEADER_NAV_OPPOSITE:
      return {
        checked: action.payload
      };
    default:
      return state;
  }
};

export default nav;
