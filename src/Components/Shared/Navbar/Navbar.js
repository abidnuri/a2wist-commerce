import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase from "firebase";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [searchIcon, setSearchIcon] = useState(false);
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

  const handleSearch = () => { };

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
        {!searchIcon ? (
          <ul>
            <li>
              <Link to="/">home </Link>
              {/*JSON.stringify(user)*/}
            </li>
            <li>
              <Link to="/user/orders">orders</Link>
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
            <li className="relative inline-block dropdown">
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
            <li className="relative inline-block dropdown">
              {user && (
                <li>
                  <Link className="bg-gray-500">
                    {user.email && user.email.split("@")[0]}
                  </Link>
                </li>
              )}

              <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                {user && (
                  <li class="">
                    <Link
                      class="bg-gray-200  py-2 px-6 block whitespace-no-wrap"
                      to="/user/dashboard"
                    >
                      User Dashboard
                    </Link>
                  </li>
                )}
                {user && (
                  <li >
                    <Link onClick={logout} class="bg-gray-200  py-2 px-6 block whitespace-no-wrap">Logout</Link>
                  </li>
                )}
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
            <span onClick={() => setSearchIcon(true)}>
              <FontAwesomeIcon
                icon={faSearch}
                className="text-lg text-white cursor-pointer mx-1.5"
              />
            </span>
          </ul>
        ) : (
          <span>
            <FontAwesomeIcon
              onClick={() => setSearchIcon(false)}
              className="mx-2 text-red-700 cursor-pointer"
              icon={faTimesCircle}
            />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search for products"
              className="p-1.5 bg-gray-400 placeholder-white px-3 rounded-lg"
            />
            <button
              onClick={handleSearch}
              className="bg-gray-400 p-1.5 px-3 mx-1 rounded-lg text-white hover:bg-gray-300 hover:text-black font-semibold"
            >
              Search
            </button>
          </span>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
