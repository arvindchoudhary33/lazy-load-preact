import { h } from "preact";
import Profile from "../../routes/profile";
import RoutesLayout from "./routesLayout";
import LazyLoading from "../lazyload";
import {
  BrowserRouter as Router,
  Route,
  Outlet,
  Switch,
  Link,
  Routes,
} from "react-router-dom";
const NestedRouting = () => {
  return (
    <div>
      <p>Books List</p>
    </div>
  );
};
export default NestedRouting;
