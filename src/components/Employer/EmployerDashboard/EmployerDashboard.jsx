import React from 'react';
import { Link } from 'react-router-dom';
import { FiDownload } from "react-icons/fi";
import { useEffect } from 'react';
import { readEmployerJobDetails, readJobsByCompanyId } from '../../../ApiRequest/APIRequest';
import { MdEmail } from "react-icons/md";
import { useState } from 'react';
import moment from 'moment';
const EmployerDashboard = () => {
    const [applications, setApplication] = useState([]);
    const [PostedJOb, setPostedJOb] = useState([])

    useEffect(() => {
        readEmployerJobDetails()
            .then((res) => {
                setApplication(res.data)
            })

        readJobsByCompanyId()
            .then((res) => {
                setPostedJOb(res.data)
            })
    }, [])
    console.log(applications)
    return (
        <div>
            <h3 className="mx-5">Applications statistics</h3>
            <div className="row mx-2 px-4 mt-4">
                <div className="col-md-4">
                    <div className="card py-3">
                        <div className="card-body text-center">
                            <h3 className="card-title">{PostedJOb?.length}</h3>
                            <h4 className="card-text">Posted Jobs</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card py-3">
                        <div className="card-body text-center">
                            <h3 className="card-title">{applications.length}</h3>
                            <h4 className="card-text">Application</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card py-3">
                        <div className="card-body text-center">
                            <h6 className="card-title"><span className="text-danger">Coming Soon</span></h6>
                            <h4 className="card-text">Shortlisted </h4>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <h5 className="mt-5 mb-3">Recent Applicants</h5>
                    {
                        applications.map((item, index) => {
                            return (
                                <div key={index} className="col-md-12 col-lg-12 col-12 " style={{ boxSizing: "border-box" }}>
                                    <div className="px-4 py-4 my-3 border rounded single_Job">
                                        <div className="d-flex justify-content-start">
                                            <div className="icon px-1 company_Logo px-2 py-3 rounded">
                                                <img className="" src={item?.candidatePic} style={{ width: "50px" }} alt="" />
                                            </div>
                                            <div>
                                                <Link to={`/Job/${item.job_id}`} className="job_title">
                                                    <h6 className="px-2 pt-3" style={{ fontWeight: "600" }}>{item.job}</h6>
                                                </Link>
                                                <div className="details d-flex justify-content-start">
                                                    <h6 className="px-2">{item?.applicant_name}</h6>
                                                    <h6><MdEmail /> {item?.email_address}</h6>
                                                </div>

                                                <div className="mx-auto">
                                                    <div className="d-flex justify-content-start">
                                                        <span className=" mx-2 mt-2">Applied date : { moment(item?.createDate).format("MMM Do YY")}</span>
                                                        <a href={item?.applicant_cv} target="_blank">
                                                            <button className="btn btn-outline-info btn-sm mt-1 mx-2" data-toggle="tooltip" data-placement="top" title="Download CV"><FiDownload /></button>
                                                        </a>
                                                    </div>
                                                    <div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default EmployerDashboard;