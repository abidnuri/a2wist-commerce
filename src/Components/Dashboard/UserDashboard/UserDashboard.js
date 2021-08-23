import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserOrders from './UserOrders/UserOrders';
import UserPass from './UserPass/UserPass';
import UserPurchase from './UserPurchase/UserPurchase';
import UserSidebar from './UserSidebar';


const UserDashboard = () => {
    return (
        <div className="flex flex-wrap sm:flex-none">
            <UserSidebar />
            <div className="p-2 lg:w-4/5 w-screen">
                <Switch>
                    <Route exact path="/user/dashboard/" component={UserPass} />
                    <Route path="/user/orders" component={UserOrders} />
                    <Route path="/user/purchasehistory" component={UserPurchase} />
                </Switch>
            </div>
        </div>
    );
};

export default UserDashboard;