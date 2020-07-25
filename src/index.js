import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  playerList: [],
  managerList: [],
  nextMatch: [],
};

const store = createStore(reducer, initialState);

function reducer(state, action) {
  switch (action.type) {
    case "SET_PLAYERS_LIST": {
      return {
        ...state,
        playerList: action.payload,
      };
    }
    case "SET_MANAGER_LIST": {
      return {
        ...state,
        managerList: action.payload,
      };
    }
    case "SET_NEXT_MATCH": {
      return {
        ...state,
        nextMatch: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
