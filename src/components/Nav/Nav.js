import React from "react";
import { Link } from "react-router-dom";

import "../../sass/main.scss";

import logo from "../../sass/assets/images/png/logo.png";

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <img className="nav_logo" src={logo} alt="" />
      </Link>

      <div className="nav_links">
        <Link to='/players' className="nav_links_item">Players</Link>
        <Link to='/fixture' className="nav_links_item">Fixture</Link>
        <Link to='/shop' className="nav_links_item">Shop </Link>
        <Link to='#news' className="nav_links_item">News </Link>
      </div>
    </nav>
  );
};

export default Nav;
