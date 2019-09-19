import * as actions from "./nav.action";

describe("set header nav", () => {
  it("should create an action to set header nav false", () => {
    const expectedAction = {
      type: actions.SET_HEADER_NAV_FALSE,
      payload: false
    };
    expect(actions.setHeaderNavFalse()).toEqual(expectedAction);
  });

  it("should create an action to set header nav true", () => {
    const expectedAction = {
      type: actions.SET_HEADER_NAV_TRUE,
      payload: true
    };
    expect(actions.setHeaderNavTrue()).toEqual(expectedAction);
  });

  it("should create an action to set header nav opposite true", () => {
    const checked = true;
    const expectedAction = {
      type: actions.SET_HEADER_NAV_OPPOSITE,
      payload: false
    };
    expect(actions.setHeaderNavOpposite(checked)).toEqual(expectedAction);
  });

  it("should create an action to set header nav opposite false", () => {
    const checked = false;
    const expectedAction = {
      type: actions.SET_HEADER_NAV_OPPOSITE,
      payload: true
    };
    expect(actions.setHeaderNavOpposite(checked)).toEqual(expectedAction);
  });
});
