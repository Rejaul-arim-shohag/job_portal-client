import React from 'react';
import Footer from '../components/Footer/Footer';
import JobList from '../components/JobList/JobList';
import NavBar from '../components/Navbar/NavBar';

const JobListPage = () => {
    return (
        <>
            <NavBar/>
            <JobList/>
            <Footer/>
        </>
    );
};

export default JobListPage;