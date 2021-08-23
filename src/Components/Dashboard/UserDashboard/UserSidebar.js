import { faKey, faLuggageCart, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const UserSidebar = () => {
    return (
        <>
        <div className="flex flex-wrap justify-center my-5 text-center md:hidden sm:block">
            <Link to="/user/dashboard" className="p-1 px-2 m-2 text-white bg-white rounded-lg"><button>Password</button></Link>
            <Link to="/user/history" className="p-1 px-2 m-2 text-white bg-gray-600 rounded-lg"><button>Purchase History</button></Link>
            <Link to="/user/orders" className="p-1 px-2 m-2 text-white bg-gray-600 rounded-lg"><button>Orders</button></Link>
        </div>
        <div className="relative hidden w-64 h-screen p-1 text-center shadow-xl bg-sidebar sm:block dashboard-sidebar">
            <ul>
                <p className="py-5 text-lg border-b-2">User</p>
                <Link to="/user/dashboard"><li><FontAwesomeIcon icon={faKey} /> Password</li></Link>
                <Link to="/user/history"><li><FontAwesomeIcon icon={faMoneyCheckAlt} /> Purchase History</li></Link>
                <Link to="/user/orders"><li><FontAwesomeIcon icon={faLuggageCart} /> Orders</li></Link>
            </ul>
        </div>
        </>
    );
};

export default UserSidebar;