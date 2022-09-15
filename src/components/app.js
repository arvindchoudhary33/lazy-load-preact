import { h } from "preact";
import { Router } from "preact-router";

import Header from "./header";
import LazyLoading from "./lazyload";
// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Profile from "../routes/profile";

const App = () => (
  <div id="app">
    <Header />
    <LazyLoading />
    <div style="margin-top:100px;"></div>
    <Router>
      <Home path="/" />
      <Profile path="/profile/" user="me" />
      <Profile path="/profile/:user" />
    </Router>
  </div>
);

export default App;
