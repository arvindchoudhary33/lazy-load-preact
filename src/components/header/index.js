import { h } from "preact";
import { Link } from "react-router-dom";
import style from "./style.css";

const Header = () => (
  <header class={style.header}>
    <h1>Preact App</h1>
    <nav>
      <Link activeClassName={style.active} to="/">
        Home
      </Link>
      <Link activeClassName={style.active} to="/profile">
        Me
      </Link>
      <Link activeClassName={style.active} to="/lazyload">
        LazyLoad
      </Link>
      <Link activeClassName={style.active} to="/nr">
        Routing
      </Link>
    </nav>
  </header>
);

export default Header;
