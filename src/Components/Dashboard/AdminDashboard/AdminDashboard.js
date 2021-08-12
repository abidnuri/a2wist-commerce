import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import AllProducts from './AllProducts';
import Orders from './Orders';
import UploadProduct from './UploadProduct';

const AdminDashboard = () => {
    return (
        <div className="flex flex-wrap sm:flex-none">
            <Sidebar />
            <div className="p-4 lg:w-4/5 w-screen">
                <Switch>
                    {/* <Route exact path="/dashboard/" component={UploadProduct} /> */}
                    <Route exact path="/dashboard/uploadproduct" component={UploadProduct} />
                    <Route exact path="/dashboard/" component={UploadProduct} />
                    <Route exact path="/dashboard/orders" component={Orders} />
                    <Route exact path="/dashboard/allproducts" component={AllProducts} />
                </Switch>
            </div>
        </div>
    );
};

export default AdminDashboard;