import { faAddressCard, faListAlt } from '@fortawesome/free-regular-svg-icons';
import { faChartLine, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="hidden lg:block w-1/5 h-screen text-left">
            <ul className="dashboard-sidebar">
                <Link to="/dashboard"><li><FontAwesomeIcon icon={faChartLine} className="text-gray-600" /> Dashboard</li></Link>
                <Link to="/dashboard/orders"><li><FontAwesomeIcon icon={faListAlt} /> Orders</li></Link>
                <Link to="/dashboard/allproducts"><li><FontAwesomeIcon icon={faListAlt} /> All products</li></Link>
                <Link to="/dashboard/uploadproduct"><li><FontAwesomeIcon icon={faUpload} /> Upload product</li></Link>
                <Link to="/dashboard/customers"><li><FontAwesomeIcon icon={faAddressCard} /> Customers</li></Link>
            </ul>
        </div>
    );
};

export default Sidebar;