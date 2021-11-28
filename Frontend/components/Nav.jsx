import React from "react";
import "./navStyles.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navWrap">
      <li>
        <Link className="linkItem" to="/">
          Home
        </Link>
      </li>
    </div>
  );
};

export default Nav;
