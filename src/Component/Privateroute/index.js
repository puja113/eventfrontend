import React from "react";
import { Navigate } from "react-router-dom";

const Privateroute = ({ children}) => {

    if(localStorage.getItem('token')){
        return children;
    }

    return <Navigate to="/login" />;
};
export default Privateroute;
