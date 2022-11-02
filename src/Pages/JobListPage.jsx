import React from 'react';
import { useEffect } from 'react';
import Footer from '../components/Footer/Footer';
import JobList from '../components/JobList/JobList';
import NavBar from '../components/Navbar/NavBar';

const JobListPage = () => {
    // useEffect(()=>{
    //     window.scrollTo(0, 0)
    // })
    return (
        <>
            <NavBar/>
            <JobList/>
            <Footer/>
        </>
    );
};

export default JobListPage;