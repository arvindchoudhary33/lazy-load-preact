import { h } from "preact";
/* import { Router } from "preact-router"; */
import style from "./app.css";
import Header from "./header";
import LazyLoading from "./lazyload";
import NestedRouting from "./nestedRouting/index.js";
// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Profile from "../routes/profile";

import {
  BrowserRouter as Router,
  Route,
  Outlet,
  Switch,
  Routes,
} from "react-router-dom";
import RoutesLayout from "./nestedRouting/routesLayout";
const App = () => (
  <div class={style.app}>
    {/* <LazyLoading /> */}
    <div class={style.routeMainContainer}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/lazyload" element={<LazyLoading />} />
          <Route path="/nr" element={<RoutesLayout />}>
            <Route index element={<NestedRouting />} />
            <Route path="nr/abc" element={<Profile />} />
            <Route path="nr/efg" element={<LazyLoading />} />
          </Route>

          {/* <Profile path="/profile/" user="me" /> */}
          {/* <Profile path="/profile/" user="me" /> */}
          {/* <LazyLoading path="/lazyload" /> */}
          {/* <NestedRouting path="/nestedrouting" /> */}
        </Routes>
      </Router>
    </div>
  </div>
);
export default App;
