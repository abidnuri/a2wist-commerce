import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGoogle,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { toast } from 'react-toastify';
import { auth } from "../firebase.config";
import { useHistory } from 'react-router';

const SignupComplete = ({ history }) => {
    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState("");

    useState(() => {
        console.log(window.localStorage.getItem("emailForRegistration"));
    }, []);

    const completeRegistration = async (e) => {
        e.preventDefault();
    };

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
                <div className="flex flex-col w-full mt-8 bg-white md:ml-auto md:py-8 md:mt-0">
                    <h2 className="mb-1 text-3xl font-bold text-center text-gray-900 title-font">
                        Register Complete Page
                    </h2>
                    <form action="" onSubmit={completeRegistration}>
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
                                value={email}
                                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="name" className="text-sm leading-7 text-gray-600">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                required
                                name="password"
                                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            />
                        </div>
                        <button
                            type="submit"
                            className="px-6 py-2 text-lg text-white bg-gray-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
                        >
                            Registration Complete
                        </button>
                    </form>

                    <p className="my-3 text-xl font-bold text-center">Or</p>
                    <div className="flex m-auto my-6 text-center">
                        <div
                            className="p-4 m-3 border border-opacity-100 border-light-blue-500 hover:border-blue-700 hover:text-green-700"
                        >
                            <FontAwesomeIcon className="text-2xl " icon={faGoogle} />
                        </div>
                        <div className="p-4 m-3 border border-opacity-100 border-light-blue-500 hover:border-blue-700 hover:text-blue-700">
                            <FontAwesomeIcon className="text-2xl " icon={faFacebook} />
                        </div>
                        <div className="p-4 m-3 border border-opacity-100 border-light-blue-500 hover:border-blue-700 hover:text-blue-700">
                            <FontAwesomeIcon className="text-2xl " icon={faTwitter} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignupComplete;
