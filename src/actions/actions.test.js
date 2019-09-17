import * as actions from "./index";

describe("set header nav", () => {
  it("should create an action to set header nav false", () => {
    const expectedAction = {
      type: actions.SET_HEADER_NAV_FALSE,
      payload: false
    };
    expect(actions.setHeaderNavFalse()).toEqual(expectedAction);
  });
});
