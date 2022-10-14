import React from 'react';
import CandidateDashbord from '../../components/Candidate/CandidateDashboard/CandidateDashbord';
import MasterLayout from '../../components/MasterLayout/MasterLayout';

const CandidateDashboardPage = () => {
    return (
        <>
            <MasterLayout>
                <CandidateDashbord/>
            </MasterLayout>
        </>
    );
};

export default CandidateDashboardPage;