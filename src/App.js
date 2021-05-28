import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Example1 from "./Example1";
import "./inde.html";
import Sport from "./Sport";
import Tech from "./Tech";
import Headlines from "./Headlines";
import Business from "./Business";
import World from "./World";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/Sport" component={Sport} />
            <Route exact path="/Business" component={Business} />
            <Route exact path="/Headlines" component={Headlines} />
            <Route exact path="/Tech" component={Tech} />
            <Route exact path="/World" component={World} />
            <Example1></Example1>
          </Switch>
      </div>
        </BrowserRouter>
    );
  }
}

export default App;
