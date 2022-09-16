import { h } from "preact";
import { Router } from "preact-router";
import style from "./app.css";
import Header from "./header";
import LazyLoading from "./lazyload";
// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Profile from "../routes/profile";

const App = () => (
  <div id="app">
    <Header />
    <LazyLoading />

    <div class={style.routeMainContainer}>
      <Router>
        <Home path="/" />
        <Profile path="/profile/" user="me" />
        <Profile path="/profile/:user" />
      </Router>
    </div>
  </div>
);

export default App;
