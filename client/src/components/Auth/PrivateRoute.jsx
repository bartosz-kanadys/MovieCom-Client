import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from 'js-cookie';

const PrivateRoute = () => {
    const token = Cookies.get("JWT")
    if (!token) return <Navigate to="/login" />;
    return <Outlet />;
};

export default PrivateRoute;