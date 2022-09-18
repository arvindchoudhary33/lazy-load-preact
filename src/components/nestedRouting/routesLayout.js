import { h } from "preact";
import { Outlet, Link } from "react-router-dom";

const RoutesLayout = () => {
  return (
    <div>
      <p>all the links</p>
      <Link to="nr/abc">profile</Link>&nbsp;&nbsp;
      <Link to="nr/efg">lazyload</Link>
      <Outlet />
    </div>
  );
};

export default RoutesLayout;
