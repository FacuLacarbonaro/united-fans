import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./sass/main.scss";

import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Players from "./pages/Players/Players";

import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  players: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "GET_PLAYERS": {
      return { ...state, players: action.payload };
    }

    default: {
      return state;
    }
  }
}

const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/players" component={Players} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
