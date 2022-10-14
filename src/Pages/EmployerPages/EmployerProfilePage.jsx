import React from 'react';
import EmployerProfile from '../../components/Employer/EmployerProfile/EmployerProfile';
import MasterLayoutEmployer from '../../components/MasterLayout/MasterLayoutEmployer';

const EmployerProfilePage = () => {
    return (
        <>
            <MasterLayoutEmployer>
                <EmployerProfile/>
            </MasterLayoutEmployer>
        </>
    );
};

export default EmployerProfilePage;