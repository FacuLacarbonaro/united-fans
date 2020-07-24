import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./sass/main.scss";

import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Players from "./pages/Players/Players";

function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/players" component={Players} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
