import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfiq'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

if(!firebase.apps.length){

    firebase.initializeApp(firebaseConfig);
}

const Signup = () => {
    const [option, setOption] = useState('register');
    const [loggedInUser, setLoggedInUser,] = useContext(UserContext)

    let history = useHistory();
let location = useLocation();
let { from } = location.state || { from: { pathname: "/" } };

//Handle Input Change value and valid email and password
const handleChange = (event) => {
    
    let isValidForm = true;
    if (event.target.name === "email") {
      isValidForm = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === "password") {
      if(event.target.value.length >= 6){
      isValidForm = event.target.value.length >= 6;
      }else{
      const newUserInfo = {error : "Password should have at least 6 character"}
      setLoggedInUser(newUserInfo);
    }}
    if (isValidForm) {
      const newUserInfo = { ...loggedInUser };
      newUserInfo[event.target.name] = event.target.value;
      setLoggedInUser(newUserInfo);
    }
  };


//Handle New User Log In Information
const handleSubmit = (event) => {
    if (option === 'register'&& loggedInUser.email && loggedInUser.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
        .then((res) => {
          const newUserInfo = { ...loggedInUser };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setLoggedInUser(newUserInfo);
          updateUserInfo(loggedInUser.name);
        })
        .catch((error) => {
          const errorMessage = error.message;
          const newUserInfo = { ...loggedInUser };
          newUserInfo.error = errorMessage;
          newUserInfo.success = false;
          setLoggedInUser(newUserInfo);
        });
    }

      //handle already logged In user info
  if (option === 'login'&& loggedInUser.email && loggedInUser.password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
      .then((res) => {
        const newUserInfo = { ...loggedInUser };
        newUserInfo.error = "";
        newUserInfo.success = true;
        setLoggedInUser(newUserInfo);
        const {displayName, email} = res.user;
        const userData ={name : displayName, email : email}
        setLoggedInUser(userData);
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        const newUserInfo = { ...loggedInUser };
        newUserInfo.error = errorMessage;
        newUserInfo.success = false;
        setLoggedInUser(newUserInfo);
      });
  }
  event.preventDefault();
}

//update new user Information
const updateUserInfo = (name) => {
    const user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        console.log("Update successful.");
      })
      .catch(function (error) {
        console.log("update error " + error);
      });
  };

//google Sing In method
const googleProvider = new firebase.auth.GoogleAuthProvider();
const singInGoogle = () => {
  firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      const {displayName, email} = result.user;
      const userData ={name : displayName, email : email}
      setLoggedInUser(userData);
      history.replace(from);
    })
    .catch((error) => {
      const errorMessage = error.message;
      const newUserInfo = { ...loggedInUser };
      newUserInfo.error = errorMessage;
      newUserInfo.success = false;
      setLoggedInUser(newUserInfo);
        console.log(error);
    });
};

    return (
        <section className="mt-4 text-gray-600 body-font">
            <div className="container flex flex-wrap items-center px-5 mx-auto sm:flex-nowrap">
                <div className="flex flex-col items-center w-full mt-8 bg-white lg:w-1/2 md:w-1/2 md:ml-auto md:py-8 md:mt-0">
                    <img className="w-48 sm:w-16 md:w-full" src="https://i.ibb.co/6yk2K9Y/Mobile-login-bro.png" alt="login" />
                </div>
                <div className="flex flex-col w-full mt-8 bg-white lg:w-1/2 md:w-1/2 md:ml-auto md:py-8 md:mt-0">
                    <h2 className="mb-1 text-3xl font-bold text-center text-gray-900 title-font">{option === 'register' ? 'Sign Up' : 'Login'}</h2>
                    <div className="flex justify-between">
                        <button onClick={() => setOption('register')} className="w-1/2 p-3 mt-3 bg-gray-500">
                            <span
                                className="text-xl text-white cursor-pointer">
                                Register
                            </span>
                        </button>
                        <button onClick={() => setOption('login')} className="w-1/2 mt-3 bg-green-500">
                            <span
                                className="text-xl text-white cursor-pointer">
                                Login
                            </span>
                        </button>
                    </div>
                    <form action="" onSubmit={handleSubmit}>
                    {
                        option === 'register' && (  <div className="mb-4">
                        <label htmlFor="name" className="text-sm leading-7 text-gray-600">Name</label>
                        <input type="text" id="name" onBlur={handleChange} name="name" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
                    </div>)
                    }
                    <div className="mb-4">
                        <label htmlFor="email" className="text-sm leading-7 text-gray-600">Email</label>
                        <input type="email" id="email" required onBlur={handleChange} name="email" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="text-sm leading-7 text-gray-600">Password</label>
                        <input type="password" id="password" required onBlur={handleChange} name="password" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
                    </div>
                    {
                        option === 'register' ?
                            <button type="submit" className="px-6 py-2 text-lg text-white bg-gray-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Register</button>
                            :
                            <button type='submit' className="px-6 py-2 text-lg text-white bg-green-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Login</button>
                    }
                    </form>
                    <p className="mt-3 text-xl  text-gray-500">If already registered then <span onClick={() => setOption('login')} className="text-blue-500 cursor-pointer text-md text- hover:text-red-500">Login</span></p>
                    <strong className="text-red-700">{loggedInUser.error}</strong>
                    {loggedInUser.success && (
                    <strong className="text-green-700">
                        User {option === 'register'? "Create" : "Logged In"} Successfully
                    </strong>
                    )}
                    <p className="my-3 text-xl font-bold text-center">Or</p>
                    <div className="my-6 text-center flex m-auto">
                        <div onClick={singInGoogle} className="p-4 m-3 border border-opacity-100 border-light-blue-500 hover:border-blue-700 hover:text-green-700"><FontAwesomeIcon className="text-2xl " icon={faGoogle} /></div>
                        <div className="p-4 m-3 border border-opacity-100 border-light-blue-500 hover:border-blue-700 hover:text-blue-700"><FontAwesomeIcon className="text-2xl " icon={faFacebook} /></div>
                        <div  className="p-4 m-3 border border-opacity-100 border-light-blue-500 hover:border-blue-700 hover:text-blue-700"><FontAwesomeIcon className="text-2xl " icon={faTwitter} /></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;