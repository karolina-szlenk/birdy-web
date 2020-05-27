import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Users from "./pages/Users";
import User from "./pages/User";

import "./App.css";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route exact path="/users" component={Users}></Route>
          <Route path="/users/:id" component={User}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
