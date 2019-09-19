import * as actions from "./github.action";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);

describe("get github users", () => {
  beforeEach(() => store.clearActions());

  it("should return GET_GITHUB_USER_START", () => {
    const store = mockStore();
    store.dispatch(actions.getGitHubUser());
    const action = store.getActions();
    console.log(action);
    const expectedAction = {
      type: actions.GET_GITHUB_USER_START
    };
    expect(action[0]).toEqual(expectedAction);
  });
});
