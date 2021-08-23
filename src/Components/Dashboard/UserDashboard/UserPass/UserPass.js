import React from "react";

const UserPass = () => {
  return (
    <form className="text-center">
        <label htmlFor="name" className="leading-7 text-gray-600 text-lg">
          Update your password
        </label> <br />
        <input
          type="password"
          id="password"
          required
          name="password"
          placeholder="Enter your new password"
          className="w-1/3 px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        /> <br />
        <button className="m-2 py-2 px-3 bg-gray-400 text-white font-semibold rounded-lg hover:bg-gray-700" type="submit">Submit</button>
    </form>
  );
};

export default UserPass;
