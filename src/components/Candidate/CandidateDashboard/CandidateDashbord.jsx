import React, { useEffect, useState } from 'react';
import { MdBusinessCenter } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { readApplicantJobs } from '../../../ApiRequest/APIRequest';
const CandidateDashbord = () => {
    const [appliedJobs, setAppliedJobs] = useState([])
    useEffect(() => {
        readApplicantJobs()
            .then((result) => {
                setAppliedJobs(result)
            })
    }, [])
    console.log(appliedJobs)

    return (
        <div>
            <h3 className="mx-5">Applications statistics</h3>
            <div className="row mx-2 px-4 mt-4">
                <div className="col-md-4">
                    <div className="card py-3">
                        <div className="card-body text-center">
                            <h3 className="card-title">{appliedJobs.length}</h3>
                            <h4 className="card-text">Applied Jobs</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card py-3">
                        <div className="card-body text-center">
                            <h3 className="card-title">00</h3>
                            <h4 className="card-text">Views</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card py-3">
                        <div className="card-body text-center">
                            <h3 className="card-title">00</h3>
                            <h4 className="card-text">Shortlisted</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mx-5 mt-5">
                <div className="card-body">
                    <h5 className="mx-1 my-4">Jobs Applied Recently</h5>
                    <div className=" row">
                        {
                            appliedJobs?.map((item, index) => {
                                return (
                                    <div key={index} className=" col-12 " style={{ boxSizing: "border-box" }}>
                                        <div className="px-4 py-4 my-3 border rounded single_Job">
                                            <div className="d-flex justify-content-start">
                                                <div className="icon px-1 bg-white company_Logo px-2 py-3 rounded">
                                                    <img className="" src={item.profile_image} style={{ width: "50px" }} alt="" />
                                                </div>
                                                <div>
                                                    <Link to={`/Job/${item.job_id}`} className="job_title">
                                                        <h6 className="px-2 pt-3" style={{ fontWeight: "600" }}>{item.job_title}</h6>
                                                    </Link>
                                                    <div className="details d-flex justify-content-start">
                                                        <div className="d-flex justify-content-between">
                                                            <MdBusinessCenter className="mt-1 mx-1" style={{ fontSize: "15px" }} />
                                                            <p>{item.categories}</p>
                                                        </div>

                                                        <div className="d-flex mx-1 justify-content-center">
                                                            <ImLocation2 className="mt-1 mx-1" style={{ fontSize: "15px" }} />
                                                            <p>{item.company_address}</p>
                                                        </div>
                                                        <div className="d-flex mx-1 justify-content-center">
                                                            <TbCurrencyTaka className="mt-1 mx-1" style={{ fontSize: "15px" }} />
                                                            <p>{item.job_salary}</p>
                                                        </div>

                                                    </div>
                                                    {/* <div className="mx-auto text-center">
                                                        <div className="d-flex justify-content-start">
                                                            <span className=" rounded-pill px-3 py-2 text-white mx-2" style={{ background: "#6c89ba" }}>{item.hiring}</span>
                                                            {
                                                                item.isArgent === true ? <span className="bg-warning rounded-pill px-3 py-2 p-2 mx-2 text-white">Argent</span> : ""
                                                            }

                                                        </div>
                                                    </div> */}
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
        </div>
    );
};

export default CandidateDashbord;