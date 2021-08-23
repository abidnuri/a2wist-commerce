import React from 'react';
import { auth } from '../../Login/firebase.config';
import { toast } from 'react-toastify';
import { useState } from 'react';


const UserHistory = () => {
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const passwordUpdate = async (e) => {
        e.preventDefault();
        // console.log(password);
        await auth.currentUser.updatePassword(password)
            .then(() => {
                setLoading(false);
                toast.success("Password updated successfully");
                setPassword("")
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
                toast.error(err.message);
            })
    }

    return (
        <div className="text-center">
            <form action="" onSubmit={passwordUpdate}>
                <input
                    type="password"
                    id="password"
                    required
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                    placeholder="Please set atleast 6 character"
                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
                <button
                    type="submit"
                    disabled={!password || password.length < 6 || loading}
                    className="px-6 py-2 text-lg text-white bg-gray-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
                >
                    {loading ? <span>Please Wait...</span> : <span>Update Password</span>}
                </button>
            </form>
        </div>
    );
};

export default UserHistory;