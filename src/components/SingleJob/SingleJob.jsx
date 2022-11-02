import React from 'react';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BiSearch } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import { MdBusinessCenter } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { TbCurrencyTaka } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { BsCalendarXFill } from "react-icons/bs";
import { useState } from 'react';
import { readJobById } from '../../ApiRequest/APIRequest';
import { useEffect } from 'react';

const SingleJob = () => {
    let { id } = useParams()
    let navigate = useNavigate()
    const [Job, setSIngleJob] = useState({})
    useEffect(() => {
        readJobById(id)
            .then((result) => {
                setSIngleJob(result)
            })
    }, [])
    return (
        <div style={{ background: "#FFFFFF" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="" style={{ boxSizing: "border-box" }}>
                            <div className="px-4 py-4 my-3">
                                <div className="d-flex justify-content-start">
                                    <div className="icon px-1 bg-white company_Logo px-2 py-3 rounded">
                                        <img className="" src={Job?.profile_image} style={{ width: "100px" }} alt="" />
                                    </div>
                                    <div>
                                        <h4 className="px-2 pt-3" style={{ fontWeight: "600" }}>{Job?.job_title}</h4>
                                        <div className="details d-flex justify-content-start">
                                            <div className="d-flex justify-content-between mx-2">
                                                <MdBusinessCenter className="mt-1 mx-1" style={{ fontSize: "15px" }} />
                                                <p> {Job?.categories}</p>
                                            </div>

                                            <div className="d-flex mx-3 justify-content-center">
                                                <ImLocation2 className="mt-1 mx-1" style={{ fontSize: "15px" }} />
                                                <p>{Job?.location}</p>
                                            </div>

                                            <div className="d-flex mx-3 justify-content-center">
                                                <BiTimeFive className="mt-1 mx-1" style={{ fontSize: "15px" }} />
                                                <p>{moment(Job?.createDate).format('MMM Do YY')}</p>
                                            </div>

                                            <div className="d-flex mx-3 justify-content-center">
                                                <GiOfficeChair className="mt-1 mx-1" style={{ fontSize: "15px" }} />
                                                <span className=" rounded-pill ">vacancy : {Job?.no_of_vacancy}</span>
                                            </div>

                                        </div>
                                        <div className="mx-auto text-center">
                                            <div className="d-flex justify-content-start">
                                                <span className=" rounded-pill px-3 py-2 text-white mx-2" style={{ background: "#6c89ba" }}>Remote</span>
                                                {
                                                    Job?.isArgent == "true" ? <span className="bg-warning rounded-pill px-3 py-2 p-2 mx-2 text-white">Argent</span> : ""
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="job_description ">
                                <div style={{ marginLeft: "25px" }}>
                                    <h6 className="text-dark mb-3 font-weight-bold">{Job?.company_name}</h6>
                                    {ReactHtmlParser(Job?.job_description)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="px-4 my-5 pt-2">
                            <h6>Application ends: <span className="text-danger">{Job?.last_application_date}</span></h6>

                            <Link to={`/apply/${id}`}>
                                <button className="btn btn-primary w-100">Apply Now</button>
                            </Link>
                            <div className="px-4 py-4 mt-4" style={{ background: "aliceblue" }}>
                                <div className="d-flex justify-content-start mt-3">
                                    <div className="icon px-1 company_Logo rounded">
                                        <AiOutlineCalendar style={{ fontSize: "25px" }} />
                                    </div>
                                    <div>
                                        <h6 className="px-1" style={{ fontWeight: "600" }}>Date Posted</h6>
                                        <p className="px-2">{moment(Job?.createDate).format('MMM Do YY')}</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start mt-3">
                                    <div className="icon px-1 company_Logo px-1 rounded">
                                        <ImLocation2 style={{ fontSize: "25px" }} />
                                    </div>
                                    <div>
                                        <h6 className="px-1" style={{ fontWeight: "600" }}>Location</h6>
                                        <p className="px-2">{Job?.location}</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start mt-3">
                                    <div className="icon px-1 company_Logo px-1 rounded">
                                        <GiTakeMyMoney style={{ fontSize: "25px" }} />
                                    </div>
                                    <div>
                                        <h6 className="px-1" style={{ fontWeight: "600" }}>Offered Salary</h6>
                                        <p className="px-2"><TbCurrencyTaka /> {Job?.job_salary} / month</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start mt-3">
                                    <div className="icon px-1 company_Logo px-1 rounded">
                                        <BsCalendarXFill style={{ fontSize: "25px" }} />
                                    </div>
                                    <div>
                                        <h6 className="px-1" style={{ fontWeight: "600" }}>Expiration date</h6>
                                        <p className="px-2">{Job?.last_application_date}</p>
                                    </div>
                                </div>
                            </div>


                            {/* <div className="px-4 py-4 mt-4" style={{ background: "aliceblue" }}>
                                <div className="d-flex justify-content-start mt-3">
                                    <div className="icon">
                                        <FaLinkedinIn />
                                    </div>

                                </div>

                                <div className="d-flex justify-content-start mt-3">
                                    <div className="icon px-1 company_Logo px-1 rounded">
                                        <ImLocation2 style={{ fontSize: "25px" }} />
                                    </div>
                                    <div>
                                        <h6 className="px-1" style={{ fontWeight: "600" }}>Location</h6>
                                    </div>
                                </div>


                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleJob;