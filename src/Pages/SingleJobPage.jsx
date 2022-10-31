import React from 'react';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/Navbar/NavBar';
import SingleJob from '../components/SingleJob/SingleJob';

const SingleJobPage = () => {
    return (
        <div>
            <NavBar/>
            <SingleJob/>
            <Footer/>
        </div>
    );
};

export default SingleJobPage;