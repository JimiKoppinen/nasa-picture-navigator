import React from "react";
import HakuKentta from "./HakuKentta";
import POD from "./POD";
import Navi from "./Navi";
import Home from "./Home";
import Epic from "./Epic";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div className="ui container cool-background">
        <Router>
          <Navi />
          <Switch>
            <Route path="/Rover">
              <HakuKentta />
            </Route>
            <Route path="/POD">
              <POD />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/EPIC">
              <Epic />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
