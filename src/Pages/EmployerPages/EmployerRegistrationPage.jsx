import React from 'react';
import EmployerRegistration from '../../components/Employer/EmployerRegistration/EmployerRegistration';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/Navbar/NavBar';

const EmployerRegistrationPage = () => {
    return (
        <div>
            <NavBar/>
            <EmployerRegistration/>
            <Footer/>
        </div>
    );
};

export default EmployerRegistrationPage;