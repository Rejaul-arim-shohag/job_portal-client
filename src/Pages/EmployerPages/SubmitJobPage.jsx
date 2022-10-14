import React from 'react';
import SubmitJob from '../../components/Employer/SubmitJob/SubmitJob';
import MasterLayoutEmployer from '../../components/MasterLayout/MasterLayoutEmployer';

const SubmitJobPage = () => {
    return (
        <>
            <MasterLayoutEmployer>
                <SubmitJob/>
            </MasterLayoutEmployer>
        </>
    );
};

export default SubmitJobPage;