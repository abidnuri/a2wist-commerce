import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { toast } from 'react-toastify';
import { auth, googleAuthProvider } from "./firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import {createOrUpdateUser} from '../functions/firebaseAuth'

const Signup = () => {
  const [option, setOption] = useState("register");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  let dispatch = useDispatch();

  const history = useHistory();

  const { user } = useSelector((state) => ({ ...state }));

  
  useEffect(() => {
    if (user) history.push("/");
  }, [user]);
  // require('dotenv').config()

  //signup function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      // url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      url: 'http://localhost:3000/complete',
      handleCodeInApp: true,

    }
    await auth.sendSignInLinkToEmail(email, config);
    toast.success(`Email is send to this ${email}. Click the link to complete your registration`);

    window.localStorage.setItem('emailForRegistration', email);
    setEmail('');
  }

  //redirect function
  const roleBasedRedirect = (res) =>{
    if(res.data.role === 'admin'){
      history.push('/dashboard')
    }else{
      history.push('/home')
    }
  }
  
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.table(email, password);
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      // console.log(result);
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();

      createOrUpdateUser(idTokenResult.token).then(
        res => {
          // console.log('create or update response', res);
          dispatch({
            type: "LOGGED_IN_USER",
            payload: {
              name: res.data.name,
              email: res.data.email,
              token: idTokenResult.token,
              role: res.data.role,
              _id: res.data._id,
            },
          });
          roleBasedRedirect(res);
        }
      ).catch((err) => console.log(err))
    
      // history.push("/");
      
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  }

  const googleLogin = async (e) => {
    auth.signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();
        
        createOrUpdateUser(idTokenResult.token).then(
          res => {
            // console.log('create or update response', res);
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
          }
        ).catch()
        
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  }
  return (
    <section className="mt-4 text-gray-600 body-font">
      <div className="container flex flex-wrap items-center px-5 mx-auto sm:flex-nowrap">
        <div className="flex flex-col items-center w-full mt-8 bg-white lg:w-1/2 md:w-1/2 md:ml-auto md:py-8 md:mt-0">
          <img
            className="w-48 sm:w-16 md:w-full"
            src="https://i.ibb.co/6yk2K9Y/Mobile-login-bro.png"
            alt="login"
          />
        </div>
        <div className="flex flex-col w-full mt-8 bg-white lg:w-1/2 md:w-1/2 md:ml-auto md:py-8 md:mt-0">
          <h2 className="mb-1 text-3xl font-bold text-center text-gray-900 title-font">
            {option === "register" ? "Sign Up" : "Login"}
          </h2>

          <div className="flex justify-between">
            <button
              onClick={() => setOption("register")}
              className="w-1/2 p-3 mt-3 bg-gray-500"
            >
              <span className="text-xl text-white cursor-pointer">
                Register
              </span>
            </button>
            <button
              onClick={() => setOption("login")}
              className="w-1/2 mt-3 bg-green-500"
            >
              <span className="text-xl text-white cursor-pointer">Login</span>
            </button>
          </div>
          <form action="" onSubmit={option === "register" ? handleSubmit : handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            {option === "register" ? (
              <button
                type="submit"
                className="px-6 py-2 text-lg text-white bg-gray-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
              >
                Register
              </button>
            ) : (
              <>
                <div className="mb-4">
                  <label htmlFor="name" className="text-sm leading-7 text-gray-600">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    name="password"
                    placeholder="Enter your password"
                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
                <button
                  type="submit"
                  onClick={handleLogin}
                  disabled={!email || password.length < 6}
                  className="px-6 py-2 text-lg text-white bg-green-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
                >
                  {loading ? <span>Wait For Login...</span> : <span>Login</span>}
                </button>
              </>
            )}
          </form>

          {option === "register" ?
            <p className="mt-3 text-xl text-gray-500">
              If already registered then{" "}
              <span
                onClick={() => setOption(!option)}
                className="text-blue-500 cursor-pointer text-md text- hover:text-red-500"
              >
                Login
              </span>
            </p> :
            <div className="flex justify-between mt-3 text-xl text-gray-500 ">
              <div className="left">
                Don't have a account{" "}
                <span
                  onClick={() => setOption("register")}
                  className="text-blue-500 cursor-pointer text-md text- hover:text-red-500"
                >
                  Signup
                </span>
              </div>
              <Link to="/forget"
                className="text-blue-500 cursor-pointer text-md text- hover:text-red-500"
              >
                Forget Password
              </Link>

            </div>
          }

          <p className="my-3 text-xl font-bold text-center">Or</p>
          <div className="flex m-auto my-6 text-center">
            <div onClick={googleLogin}
              className="p-4 m-3 border border-opacity-100 cursor-pointer border-light-blue-500 hover:border-blue-700 hover:text-green-700"
            >
              <FontAwesomeIcon className="text-2xl " icon={faGoogle} />
            </div>
            <div className="p-4 m-3 border border-opacity-100 cursor-pointer border-light-blue-500 hover:border-blue-700 hover:text-blue-700">
              <FontAwesomeIcon className="text-2xl " icon={faFacebook} />
            </div>
            <div className="p-4 m-3 border border-opacity-100 cursor-pointer border-light-blue-500 hover:border-blue-700 hover:text-blue-700">
              <FontAwesomeIcon className="text-2xl " icon={faTwitter} />
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Signup;
