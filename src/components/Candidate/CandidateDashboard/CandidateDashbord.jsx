import React from 'react';

const CandidateDashbord = () => {
    return (
        <div>
            <h4 className="mx-5">Applications statistics</h4>
            <div className="row mx-2 px-4 mt-4">
                <div className="col-md-4">
                    <div className="card py-3">
                        <div className="card-body text-center">
                            <h3 className="card-title">11</h3>
                            <h4 className="card-text">Applied Jobs</h4>
                        </div>

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card py-3">
                        <div className="card-body text-center">
                            <h3 className="card-title">203</h3>
                            <h4 className="card-text">Views</h4>
                        </div>

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card py-3">
                        <div className="card-body text-center">
                            <h3 className="card-title">16</h3>
                            <h4 className="card-text">Reviews</h4>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CandidateDashbord;