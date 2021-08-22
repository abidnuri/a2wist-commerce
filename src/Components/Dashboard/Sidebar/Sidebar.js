import { faAddressCard, faListAlt } from '@fortawesome/free-regular-svg-icons';
import { faChartLine, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="hidden relative bg-sidebar h-screen w-64 sm:block shadow-xl p-1 dashboard-sidebar">
            <ul>
                <p className="text-lg border-b-2 py-5">Admin</p>
                <Link to="/dashboard"><li><FontAwesomeIcon icon={faChartLine} /> Dashboard</li></Link>
                <Link to="/dashboard/orders"><li><FontAwesomeIcon icon={faListAlt} /> Orders</li></Link>
                <Link to="/dashboard/allproducts"><li><FontAwesomeIcon icon={faListAlt} /> All products</li></Link>
                <Link to="/dashboard/uploadproduct"><li><FontAwesomeIcon icon={faUpload} /> Upload product</li></Link>
                <Link to="/dashboard/editproduct"><li><FontAwesomeIcon icon={faAddressCard} /> Edit product</li></Link>
            </ul>
        </div>
    );
};

export default Sidebar;