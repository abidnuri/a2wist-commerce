import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  let dispatch = useDispatch();
  let history = useHistory();

  let { user } = useSelector((state) => ({ ...state }));

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/signup");
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div className="navbar_container">
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="logo-container">
          <Link to="/">eSwap</Link>
        </div>
        <input type="checkbox" name="" id="click" />
        <label htmlFor="click" className="menu-btn">
          <i className="fas fa-bars"></i>
        </label>
        <ul>
          <li>
            <Link to="/">home </Link>
            {/*JSON.stringify(user)*/}
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
          <li className="dropdown inline-block relative">
            <Link className="" to="/category">
              Category
            </Link>

            <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
              <li class="">
                <Link
                  class="rounded-t bg-gray-200  py-2 px-6 block whitespace-no-wrap"
                  to="/"
                >
                  T-Shirt
                </Link>
              </li>
              <li class="">
                <Link
                  class="bg-gray-200  py-2 px-6 block whitespace-no-wrap"
                  to="/"
                >
                  Pant
                </Link>
              </li>
              <li class="">
                <Link
                  class="rounded-b bg-gray-200  py-2 px-6 block whitespace-no-wrap"
                  to="/"
                >
                  Others
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          {!user && (
            <li>
              <Link to="/signup">Account</Link>
            </li>
          )}
          {user && (
            <li>
              <Link className="text-red-800 bg-gray-50">
                {user.email && user.email.split("@")[0]}
              </Link>
            </li>
          )}
          {user && (
            <li>
              <Link onClick={logout}>Logout</Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
