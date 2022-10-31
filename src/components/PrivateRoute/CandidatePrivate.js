import React from 'react';
import { Navigate,  useLocation } from "react-router-dom";
import { getCandidateToken } from '../../Helper/SessionHelper';
const CandidatePrivate = ({children}) => {
    let location = useLocation()
    return (getCandidateToken() ? children : <Navigate to="/Login" replace state={{ from: location}} />);
}

export default CandidatePrivate;
