import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {

  return (
    <div className="navbar_container">
      <nav>
        <div className="logo-container">
          <Link to="/">eSwap</Link>
        </div>
        <input type="checkbox" name="" id="click" />
        <label htmlFor="click" className="menu-btn">
          <i className="fas fa-bars"></i>
        </label>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/orders">orders</Link>
          </li>
          <li>
            <Link to="/products">products</Link>
          </li>
          <li>
            <Link to="/discount">discount</Link>
          </li>
          <li>
            <Link to="/review">review</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/signup">login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
