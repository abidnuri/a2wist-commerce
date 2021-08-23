import React from "react";
import { toast } from 'react-toastify';
import { useState } from 'react';
import { auth } from "../../../Login/firebase.config";

const UserPass = () => {
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
    <form onSubmit={passwordUpdate} className="text-center">
      <label htmlFor="name" className="text-lg leading-7 text-gray-600">
        Update your password
      </label> <br />
      <input
        type="password"
        id="password"
        required
        onChange={(e) => setPassword(e.target.value)}
        disabled={loading}
        name="password"
        placeholder="Enter atleast 6 character"
        className="w-1/3 px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
      /> <br />
      <button
        type="submit"
        disabled={!password || password.length < 6 || loading}
        className="px-3 py-2 m-2 font-semibold text-white bg-gray-400 rounded-lg hover:bg-gray-700">
        {loading ? <span>Please Wait...</span> : <span>Update Password</span>}
      </button>
    </form>
  );
};

export default UserPass;
