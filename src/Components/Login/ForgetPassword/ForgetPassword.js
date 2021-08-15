import React from 'react';
import { useState } from 'react';
import { auth } from '../firebase.config';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

const ForgetPassword = ({ history }) => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const { user } = useSelector((state) => ({ ...state }));
    // const history = useHistory();
    useEffect(() => {
        if (user) history.push("/");
    }, [user]);

    const handleForgetPassword = async (e) => {
        e.preventDefault();
        setLoading(true);
        const config = {
            // url: process.env.REACT_APP_FORGET_PASSWORD_REDIRECT_URL,
            url: 'http://localhost:3000/signup',
            handleCodeInApp: true,
        }

        await auth.sendPasswordResetEmail(email, config)
            .then(() => {
                setEmail("");
                setLoading(false);
                toast.success('check your email for password reset link');
            })
            .catch((error) => {
                setLoading(false);
                toast.error(error.message);
            })
    }


    return (
        <div className="container grid grid-cols-1 grid-rows-1 gap-4 px-4 mx-auto md:grid-cols-2">
            <div className="flex flex-col items-center">
                <img
                    className="w-52 sm:w-16 md:w-full"
                    src="https://i.ibb.co/6yk2K9Y/Mobile-login-bro.png"
                    alt="login"
                />
            </div>
            <div className="">
                <div className="p-3 mt-3 text-center bg-gray-500">
                    <span className="text-xl text-white cursor-pointer">
                        Forget Password Save
                    </span>
                </div>
                <form action="" onSubmit={handleForgetPassword}>
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
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            disabled={!email}
                            className="px-6 py-2 text-lg text-white bg-green-500 border-0 rounded focus:outline-none align-center hover:bg-indigo-600"
                        >
                            {loading ? <span>Saving Your Password</span> : <span>Change Password</span>}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;