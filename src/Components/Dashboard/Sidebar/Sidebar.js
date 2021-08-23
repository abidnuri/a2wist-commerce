import { faAddressCard, faListAlt } from '@fortawesome/free-regular-svg-icons';
import { faChartLine, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {
    return (
        <>
        <div className="md:hidden sm:block my-5 text-center flex flex-wrap justify-center">
            <Link to="/dashboard" className="m-2 bg-gray-600 p-1 px-2 rounded-lg text-white"><button>Dashboard</button></Link>
            <Link to="/dashboard/orders" className="m-2 bg-gray-600 p-1 px-2 rounded-lg text-white"><button>Orders</button></Link>
            <Link to="/dashboard/allproducts" className="m-2 bg-gray-600 p-1 px-2 rounded-lg text-white"><button>All Products</button></Link>
            <Link to="/dashboard/uploadproduct" className="m-2 bg-gray-600 p-1 px-2 rounded-lg text-white"><button>Upload Product</button></Link>
            <Link to="/dashboard/editproduct" className="m-2 bg-gray-600 p-1 px-2 rounded-lg text-white"><button>Edit product</button></Link>
        </div>
        <div className="hidden relative bg-sidebar h-screen w-64 sm:block shadow-xl p-1 dashboard-sidebar">
            <ul>
                <p className="text-lg border-b-2 py-5">Admin</p>
                <Link to="/dashboard"><li><FontAwesomeIcon icon={faChartLine} /> Dashboard</li></Link>
                <Link to="/dashboard/login"><li><FontAwesomeIcon icon={faListAlt} /> Login</li></Link>
                <Link to="/dashboard/orders"><li><FontAwesomeIcon icon={faListAlt} /> Orders</li></Link>
                <Link to="/dashboard/allproducts"><li><FontAwesomeIcon icon={faListAlt} /> All products</li></Link>
                <Link to="/dashboard/uploadproduct"><li><FontAwesomeIcon icon={faUpload} /> Upload product</li></Link>
                <Link to="/dashboard/editproduct"><li><FontAwesomeIcon icon={faAddressCard} /> Edit product</li></Link>
            </ul>
        </div>
        </>
    );
};

export default Sidebar;