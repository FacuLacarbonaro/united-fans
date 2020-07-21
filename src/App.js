import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./sass/main.scss";

import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
