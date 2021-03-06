import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white"
  };
  return (
    <nav>
      <h3>Nav</h3>
      <ul className="nav-links">
        <Link to="/" style={navStyle}>
          <li>Home</li>
        </Link>
        <Link to="/about" style={navStyle}>
          <li>About</li>
        </Link>
        <Link to="/shop" style={navStyle}>
          <li>Shop</li>
        </Link>
        <Link to="/useReducer" style={navStyle}>
          <li>use Reducer</li>
        </Link>
        <Link to="/counterWithReducer" style={navStyle}>
          <li>CounterWithReducer</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
