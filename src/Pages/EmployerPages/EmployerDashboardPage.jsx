import React from 'react';
import EmployerDashboard from '../../components/Employer/EmployerDashboard/EmployerDashboard';
import MasterLayoutEmployer from '../../components/MasterLayout/MasterLayoutEmployer';

const EmployerDashboardPage = () => {
    return (
        <>
            <MasterLayoutEmployer>
                <EmployerDashboard/>
            </MasterLayoutEmployer>
        </>
    );
};

export default EmployerDashboardPage;