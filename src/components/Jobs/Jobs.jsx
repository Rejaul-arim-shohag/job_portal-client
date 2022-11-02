import React from 'react';
import { MdBusinessCenter } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { TbCurrencyTaka } from "react-icons/tb";
import { GiOfficeChair } from "react-icons/gi";
import { Link } from 'react-router-dom';
import "./Jobs.css"
import { useState } from 'react';
import { useEffect } from 'react';
import { readJobs } from '../../ApiRequest/APIRequest';
const Jobs = () => {
    const [perPage, setPerPage] = useState(10);
    const [searchKeyword, setSearchKeyword] = useState(null);
    const [selectedLocation, setSelectedlocation] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const [sortBy, setSortBy] = useState(-1);
    const [jobList, setJobList] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        readJobs(perPage, searchKeyword, selectedLocation, selectedCategory, selectedType, sortBy, 1)
            .then((result) => {
                setJobList(result[0]?.Rows)
                setCount(result[0]?.total[0]?.count)

            })

    }, [])

    return (
        <div className="my-5 bg-white py-5">
            <div className="container">
                <div className="my-2 mb-3">
                    <h1 className="text-center">Featured Jobs</h1>
                    <h6 className="text-center">Know your worth and find the job that qualify your life </h6>
                </div>
                <div className="jobs row">
                    {
                        jobList.map((item, index) => {
                            return (
                                <div key={index} className="col-md-6 col-lg-6 col-12 " style={{ boxSizing: "border-box" }}>
                                    <div className="px-4 py-4 my-3 border rounded single_Job">
                                        <div className="d-flex justify-content-start">
                                            <div className="icon px-1 bg-white company_Logo px-2 py-3 rounded">
                                                <img className="" src={item?.profile_image} style={{ width: "50px" }} alt="" />
                                            </div>
                                            <div>
                                                <Link to={`/Job/${item._id}`} className="job_title">
                                                    <h6 className="px-2 pt-3" style={{ fontWeight: "600" }}>{item?.job_title}</h6>
                                                </Link>
                                                <div className="details d-flex justify-content-start">
                                                    {/* <div className="d-flex justify-content-between">
                                                        <MdBusinessCenter className="mt-1 mx-1" style={{ fontSize: "15px" }} />
                                                        <p>{item.categories}</p>
                                                    </div> */}

                                                    <div className="d-flex mx-1 justify-content-center">
                                                        <ImLocation2 className="mt-1 mx-1" style={{ fontSize: "15px" }} />
                                                        <p>{item.location}</p>
                                                    </div>
                                                    <div className="d-flex mx-1 justify-content-center">
                                                        <TbCurrencyTaka className="mt-1 mx-1" style={{ fontSize: "15px" }} />
                                                        <p>{item?.job_salary} /Monthly</p>
                                                    </div>
                                                    <div className="d-flex mx-1 justify-content-center">
                                                        <GiOfficeChair className="mt-1 mx-1" style={{ fontSize: "15px" }} />
                                                        <p>vacancy : {item?.no_of_vacancy}</p>
                                                    </div>

                                                </div>
                                                <div className="mx-auto text-center">
                                                    <div className="d-flex justify-content-start">
                                                        <span className=" rounded-pill px-3 py-2 text-white mx-2" style={{ background: "#6c89ba" }}>{item?.type}</span>
                                                        {
                                                            item.isArgent == "true" ? <span className="bg-warning rounded-pill px-3 py-2 p-2 mx-2 text-white" >Argent</span> : ""
                                                        }

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


                <div className="load_more_btn d-flex justify-content-center mt-5 mb-2">
                    <Link to="/JobList">
                        <button className="btn btn-primary btn-lg">Load More Listing</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Jobs;

