import React from 'react';
import Footer from '../components/Footer/Footer';
import Login from '../components/Login/Login';
import NavBar from '../components/Navbar/NavBar';

const LoginPage = () => {
    return (
        <>
           <NavBar/>
            <Login/>
            <Footer/>
        </>
    );
};

export default LoginPage;