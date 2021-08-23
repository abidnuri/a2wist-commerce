import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase from "firebase";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [searchIcon, setSearchIcon] = useState(false)
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

  const handleSearch = () => {
    
  }

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
        {
          !searchIcon ? <ul>
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
          <li>
            <Link to="/contact">contact</Link>
          </li>
          {!user &&
            <li>
              <Link to="/signup">Account</Link>
            </li>
          }
          {user &&
            <li>
              <Link className="text-red-800 bg-gray-50">{user.email && user.email.split('@')[0]}</Link>
            </li>
          }
          {user &&
            <li>
              <Link onClick={logout}>Logout</Link>
            </li>
          }
          <span onClick={()=> setSearchIcon(true)}>
            <FontAwesomeIcon icon={faSearch} className="text-lg text-white cursor-pointer mx-1.5" />
          </span>
        </ul> : <span><FontAwesomeIcon onClick={()=> setSearchIcon(false)} className="text-red-700 mx-2 cursor-pointer" icon={faTimesCircle} /><input type="search" name="search" id="search" placeholder="Search for products" className="p-1.5 bg-gray-400 placeholder-white px-3 rounded-lg" />
        <button onClick={handleSearch} className="bg-gray-400 p-1.5 px-3 mx-1 rounded-lg text-white hover:bg-gray-300 hover:text-black font-semibold">Search</button>
        </span>
        }
      </nav>
    </div>
  );
};

export default Navbar;
