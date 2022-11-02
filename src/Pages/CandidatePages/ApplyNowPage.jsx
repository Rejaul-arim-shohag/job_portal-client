import React from 'react';
import ApplyNow from '../../components/Candidate/ApplyNow/ApplyNow';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/Navbar/NavBar';

const ApplyNowPage = () => {
    return (
        <div>
            <NavBar/>
            <ApplyNow/>
            <Footer/>
        </div>
    );
};

export default ApplyNowPage;