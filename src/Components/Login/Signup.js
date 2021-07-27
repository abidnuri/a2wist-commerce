import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';

const Signup = () => {
    const [option, setOption] = useState('register');
    return (
        <section className="mt-4 text-gray-600 body-font">
            <div className="container flex flex-wrap items-center px-5 mx-auto sm:flex-nowrap">
                <div className="flex flex-col items-center w-full mt-8 bg-white lg:w-1/2 md:w-1/2 md:ml-auto md:py-8 md:mt-0">
                    <img className="w-48 sm:w-16 md:w-full" src="https://i.ibb.co/6yk2K9Y/Mobile-login-bro.png" alt="login" />
                </div>
                <div className="flex flex-col w-full mt-8 bg-white lg:w-1/2 md:w-1/2 md:ml-auto md:py-8 md:mt-0">
                    <h2 className="mb-1 text-3xl font-bold text-center text-gray-900 title-font">{option === 'register' ? 'Sign Up' : 'Login'}</h2>
                    <div className="flex justify-between">
                        <button className="w-1/2 p-3 mt-3 bg-gray-500">
                            <span
                                onClick={() => setOption('register')}
                                className="text-xl text-white cursor-pointer">
                                Register
                            </span>
                        </button>
                        <button className="w-1/2 mt-3 bg-green-500">
                            <span
                                onClick={() => setOption('login')}
                                className="text-xl text-white cursor-pointer">
                                Login
                            </span>
                        </button>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="text-sm leading-7 text-gray-600">Name</label>
                        <input type="text" id="name" name="name" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-sm leading-7 text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
                    </div>
                    {
                        option === 'register' ?
                            <button className="px-6 py-2 text-lg text-white bg-gray-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Register</button>
                            :
                            <button className="px-6 py-2 text-lg text-white bg-green-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Login</button>
                    }
                    <p className="mt-3 text-xs text-gray-500">If already registered then <span onClick={() => setOption('login')} className="text-blue-500 cursor-pointer text-md text- hover:text-red-500">Login</span></p>
                    <p className="my-3 text-xl font-bold text-center">Or</p>
                    <div className="my-6 text-center">
                        <a href="facebook" className="p-4 m-3 border border-opacity-100 border-light-blue-500 hover:border-blue-700 hover:text-blue-700"><FontAwesomeIcon className="text-2xl " icon={faGoogle} /></a>
                        <a href="facebook" className="p-4 m-3 border border-opacity-100 border-light-blue-500 hover:border-blue-700 hover:text-blue-700"><FontAwesomeIcon className="text-2xl " icon={faFacebook} /></a>
                        <a href="facebook" className="p-4 m-3 border border-opacity-100 border-light-blue-500 hover:border-blue-700 hover:text-blue-700"><FontAwesomeIcon className="text-2xl " icon={faTwitter} /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;