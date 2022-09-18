import { h } from "preact";
import { Outlet, Link, NavLink } from "react-router-dom";
import style from "./index.css";
import "./routesLayout.css";
const RoutesLayout = () => {
  return (
    <div
      style="
  min-width: 600px;
  max-width: 850px;"
    >
      <NavLink to="nr/abc">profile</NavLink>
      &nbsp;&nbsp;
      <NavLink to="nr/efg">lazyload</NavLink>
      <hr style="margin:10px 0px 10px 0px;border:none; border-bottom:1px solid lightgray" />
      <Outlet />
    </div>
  );
};

export default RoutesLayout;
