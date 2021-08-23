import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";
import { currentAdmin } from '../functions/firebaseAuth'
import { useEffect } from "react";

const AdminRoute = ({ children, ...rest }) => {
    const { user } = useSelector((state) => ({ ...state }));

    const [ok, setOk] = useState(false);

    useEffect(() => {
        if (user && user.token) {
            currentAdmin(user.token)
                .then((res) => {
                    console.log("current admin response", res);
                    setOk(true)
                })
                .catch(err => {
                    console.log("admin route error", err);
                    setOk(false);
                })
        } else {

        }
    }, [user])

    return ok ? (
        <Route {...rest} render={() => children} />
    )
        :
        (<LoadingToRedirect />)
}

export default AdminRoute;