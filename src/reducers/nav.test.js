import {
  SET_HEADER_NAV_FALSE,
  SET_HEADER_NAV_TRUE,
  SET_HEADER_NAV_OPPOSITE
} from "../actions";

import nav from "./nav";

describe("nav", () => {
  const initialStateTrue = {
    checked: true
  };

  const initialStateFalse = {
    checked: false
  };
  it("should return the initial state", () => {
    expect(nav(initialStateFalse, {})).toEqual({ checked: false });
  });

  it("should handle SET_HEADER_NAV_FALSE", () => {
    expect(
      nav(initialStateTrue, {
        type: SET_HEADER_NAV_FALSE,
        payload: false
      })
    ).toEqual({ checked: false });
  });

  it("should handle SET_HEADER_NAV_TRUE", () => {
    expect(
      nav(initialStateFalse, {
        type: SET_HEADER_NAV_TRUE,
        payload: true
      })
    ).toEqual({ checked: true });
  });

  it("should handle true SET_HEADER_NAV_OPPOSITE", () => {
    expect(
      nav(initialStateFalse, {
        type: SET_HEADER_NAV_OPPOSITE,
        payload: true
      })
    ).toEqual({ checked: true });
  });

  it("should handle false SET_HEADER_NAV_OPPOSITE", () => {
    expect(
      nav(initialStateTrue, {
        type: SET_HEADER_NAV_OPPOSITE,
        payload: false
      })
    ).toEqual({ checked: false });
  });
});
