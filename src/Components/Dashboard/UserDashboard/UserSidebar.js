import { faKey, faLuggageCart, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const UserSidebar = () => {
    return (
        <>
        <div className="md:hidden sm:block my-5 text-center flex flex-wrap justify-center">
            <Link to="/user/dashboard" className="m-2 bg-white p-1 px-2 rounded-lg text-white"><button>Password</button></Link>
            <Link to="/user/purchasehistory" className="m-2 bg-gray-600 p-1 px-2 rounded-lg text-white"><button>Purchase History</button></Link>
            <Link to="/user/orders" className="m-2 bg-gray-600 p-1 px-2 rounded-lg text-white"><button>Orders</button></Link>
        </div>
        <div className="hidden relative bg-sidebar h-screen w-64 sm:block shadow-xl p-1 dashboard-sidebar text-center">
            <ul>
                <p className="text-lg border-b-2 py-5">User</p>
                <Link to="/user/dashboard"><li><FontAwesomeIcon icon={faKey} /> Password</li></Link>
                <Link to="/user/purchasehistory"><li><FontAwesomeIcon icon={faMoneyCheckAlt} /> Purchase History</li></Link>
                <Link to="/user/orders"><li><FontAwesomeIcon icon={faLuggageCart} /> Orders</li></Link>
            </ul>
        </div>
        </>
    );
};

export default UserSidebar;