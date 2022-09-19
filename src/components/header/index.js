import { h } from "preact";
import { Link, NavLink } from "react-router-dom";
import style from "./style.css";
import "./style.css";
const Header = () => (
  <header class={style.header}>
    <h1>Preact App</h1>
    <nav>
      <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">
        Home
      </NavLink>
      <Link activeClassName={style.active} to="/profile">
        Me
      </Link>
      <Link activeClassName={style.active} to="/lazyload">
        LazyLoad
      </Link>
      <Link activeClassName={style.active} to="/nr">
        Routing
      </Link>
      <Link activeClassName={style.active} to="/tabbar">
        TabBar
      </Link>
      <Link activeClassName={style.active} to="/graphdemo">
        Graph
      </Link>
    </nav>
  </header>
);

export default Header;
