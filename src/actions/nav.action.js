export const SET_HEADER_NAV_FALSE = "SET_HEADER_NAV_FALSE";
export const SET_HEADER_NAV_TRUE = "SET_HEADER_NAV_TRUE";
export const SET_HEADER_NAV_OPPOSITE = "SET_HEADER_NAV_OPPOSITE";

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
