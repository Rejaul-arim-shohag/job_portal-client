import React, { lazy, Suspense } from 'react';
import LazyLoader from '../../components/MasterLayout/LazyLoader';
const VerifyOTP = lazy(() => import('../../components/AccountRecover/VerifyOTP'));

const VerifyOTPPage = () => {
    return (
        <Suspense fallback={<LazyLoader />}>
            <VerifyOTP />
        </Suspense>
    );
};

export default VerifyOTPPage; <h1>This is verify ot</h1>