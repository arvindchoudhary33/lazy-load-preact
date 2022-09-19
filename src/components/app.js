import { h } from "preact";
/* import { Router } from "preact-router"; */
import style from "./app.css";
import Header from "./header";
import LazyLoading from "./lazyload";
import NestedRouting from "./nestedRouting/index.js";
import TabBar from "./tabBar";
// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Profile from "../routes/profile";
import GraphDemo from "../components/graphDemo";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RoutesLayout from "./nestedRouting/routesLayout";
import { ChakraProvider } from "@chakra-ui/react";
const App = () => (
  <ChakraProvider>
    <div class={style.app}>
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
            <Route path="/tabbar" element={<TabBar />} />
            <Route path="/graphdemo" element={<GraphDemo />} />
          </Routes>
        </Router>
      </div>
    </div>
  </ChakraProvider>
);
export default App;
