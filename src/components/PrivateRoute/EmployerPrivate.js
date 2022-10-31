import React from 'react';
import { Navigate,  useLocation } from "react-router-dom";
import { getEmployerToken } from '../../Helper/SessionHelper';
const EmployerPrivate = ({children}) => {
    let location = useLocation()
    return (getEmployerToken() ? children : <Navigate to="/employer_login" replace state={{ from: location}} />);
}

export default EmployerPrivate;
