import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import firebase from "firebase";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Navbar = () => {

  let dispatch = useDispatch();
  let history = useHistory();

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/signup");
  };

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
            <Link to="/signup">Account</Link>
          </li>
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
