import React from 'react';
import EmployerLogin from '../../components/Employer/EmployerLogin/EmployerLogin';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/Navbar/NavBar';

const EmployerLoginPage = () => {
    return (
        <>
            <NavBar/>
            <EmployerLogin/>
            <Footer/>
        </>
    );
};

export default EmployerLoginPage;