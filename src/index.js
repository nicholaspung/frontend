import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers";
import App from "./components/App";

//google analytics code start//
import ReactGA from "react-ga";
ReactGA.initialize("UA-147523185-1");
ReactGA.pageview(window.location.pathname + window.location.search);
//google analytics code end//

// const middleware = applyMiddleware(thunk);
// const store = createStore(reducer, middleware);

///I changed the code above to the code below so that we can have access to dev tools with redux

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
