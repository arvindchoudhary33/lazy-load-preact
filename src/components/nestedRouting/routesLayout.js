import { h } from "preact";
import { Outlet, Link } from "react-router-dom";

const RoutesLayout = () => {
  return (
    <div
      style="
  min-width: 600px;
  max-width: 850px;"
    >
      <Link to="nr/abc">profile</Link>&nbsp;&nbsp;
      <Link to="nr/efg">lazyload</Link>
      <hr style="border:none; border-bottom:1px solid lightgray" />
      <Outlet />
    </div>
  );
};

export default RoutesLayout;
