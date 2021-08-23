import axios from 'axios';
import React from 'react';

const AdminLogin = () => {
    
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        axios.post('https://eswap-ecommerce.herokuapp.com/auth/login', {
            email, password
        }).then(res => {
            const user = res.data;
            console.log(user);
            localStorage.setItem('token', user.token)
        })
    }
    return (
        <div>
            <form onSubmit={handleLogin}>
                <h1>Login in admin</h1>
                <label htmlFor="username">Username </label>
                <input className="bg-gray-400 my-2 p-1 rounded-lg" type="email" id="email" required /> <br />
                <label htmlFor="password">Password </label>
                <input className="bg-gray-400 my-2 p-1 rounded-lg" type="password" id="password" required /> <br />
                <button type="submit" className="bg-gray-400 my-2 p-1 px-3 rounded-lg">Login </button>
            </form>
        </div>
    );
};

export default AdminLogin;