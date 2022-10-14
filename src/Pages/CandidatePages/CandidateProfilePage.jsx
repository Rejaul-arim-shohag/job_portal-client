import React from 'react';
import CandidateProfile from '../../components/Candidate/CandidateProfile/CandidateProfile';
import MasterLayout from '../../components/MasterLayout/MasterLayout';

const CandidateProfilePage = () => {
    return (
        <>
            <MasterLayout>
                <CandidateProfile />
            </MasterLayout>
        </>
    );
};

export default CandidateProfilePage;