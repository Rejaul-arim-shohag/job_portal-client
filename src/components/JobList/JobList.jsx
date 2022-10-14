import React, { useState } from 'react';
import "./jobList.css"
import { BiSearch } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { GiOfficeChair } from "react-icons/gi";


import { MdBusinessCenter } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from 'react-router-dom';


const JobList = () => {
    const FakeJobs = [
        {
            id: 1,
            Title: "Junior Graphic Designer (Web)",
            skills: "Design/Finance",
            location: "Dhaka",
            salary: "20000-30000",
            salaryType: "Monthly",
            hiring: "Full Time",
            isArgent: true,
            icon: "https://static.vecteezy.com/system/resources/thumbnails/003/377/380/small/line-icon-for-web-develop-vector.jpg",
            position: 1
        },
        {
            id: 2,
            Title: "Finance Manager & Health",
            skills: "Design/Finance",
            location: "Dhaka",
            salary: "20000-30000",
            salaryType: "Monthly",
            hiring: "Full TIme",
            isArgent: false,
            icon: "https://static.vecteezy.com/system/resources/thumbnails/003/377/380/small/line-icon-for-web-develop-vector.jpg",
            position: 1
        },
        {
            id: 3,
            Title: "General Ledger Accountant",
            skills: "Design/Finance",
            location: "Dhaka",
            salary: "20000-30000",
            salaryType: "Monthly",
            hiring: "Full TIme",
            isArgent: true,
            icon: "https://static.vecteezy.com/system/resources/thumbnails/003/377/380/small/line-icon-for-web-develop-vector.jpg",
            position: 1
        },
        {
            id: 4,
            Title: "Assistant / Store Keeper",
            skills: "Design/Finance",
            location: "Dhaka",
            salary: "20000-30000",
            salaryType: "Monthly",
            hiring: "Full TIme",
            isArgent: true,
            icon: "https://static.vecteezy.com/system/resources/thumbnails/003/377/380/small/line-icon-for-web-develop-vector.jpg",
            position: 1
        },
        {
            id: 5,
            Title: "Group Marketing Manager",
            skills: "Design/Finance",
            location: "Dhaka",
            salary: "20000-30000",
            salaryType: "Monthly",
            hiring: "Full TIme",
            isArgent: false,
            icon: "https://static.vecteezy.com/system/resources/thumbnails/003/377/380/small/line-icon-for-web-develop-vector.jpg",
            position: 1
        },
        {
            id: 5,
            Title: "Product Sales Specialist ",
            skills: "Design/Finance",
            location: "Dhaka",
            salary: "20000-30000",
            salaryType: "Monthly",
            hiring: "Full TIme",
            isArgent: true,
            icon: "https://static.vecteezy.com/system/resources/thumbnails/003/377/380/small/line-icon-for-web-develop-vector.jpg",
            position: 1
        },
        {
            id: 7,
            Title: "Product Sales Specialist",
            skills: "Design/Finance",
            location: "Dhaka",
            salary: "20000-30000",
            salaryType: "Monthly",
            hiring: "Full TIme",
            isArgent: true,
            icon: "https://static.vecteezy.com/system/resources/thumbnails/003/377/380/small/line-icon-for-web-develop-vector.jpg",
            position: 1
        },
        {
            id: 8,
            Title: "Product Sales Specialist",
            skills: "Design/Finance",
            location: "Dhaka",
            salary: "20000-30000",
            salaryType: "Monthly",
            hiring: "Full TIme",
            isArgent: false,
            icon: "https://static.vecteezy.com/system/resources/thumbnails/003/377/380/small/line-icon-for-web-develop-vector.jpg",
            position: 1
        },
    ]

    return (
        <div className="bg-white my-5 py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 px-4 py-4 rounded" style={{ background: "#F5F7FC" }}>
                        <div>
                            <h6>Search by Keywords </h6>
                            <div className="search_keywords mt-3">
                                <input className="form-control py-2 px-5 inputShadowNone" placeholder='Job Title, Keywords...' type="text" />
                                <BiSearch className="JobSearchIcon" style={{ fontSize: "20px" }} />
                            </div>
                        </div>

                        <div className="mt-5">
                            <h6>Location</h6>
                            <div className="search_location mt-3">
                                <input className="form-control py-2 px-5 inputShadowNone" placeholder="City" type="text" />
                                <ImLocation className="locationSearchIcon" style={{ fontSize: "20px" }} />
                            </div>
                        </div>

                        <div className="mt-5">
                            <h6>Category</h6>
                            <div className="Category_search mt-3 position-relative">
                                <select className="form-select py-2 px-5 inputShadowNone" aria-label="Default select example">
                                    <option selected>Choose a Category</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>

                                </select>
                                <BsFillBriefcaseFill className="CategorySearchIcon" style={{ fontSize: "18px" }} />

                            </div>
                        </div>

                        <div className="mt-5">
                            <h6>Job Type</h6>
                            <div className="Category_search mt-3 position-relative">
                                <select className="form-select py-2 px-5 inputShadowNone" aria-label="Default select example">
                                    <option selected>Choose a Type</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>

                                </select>
                                <GiOfficeChair className="CategorySearchIcon" style={{ fontSize: "18px" }} />
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="mt-3">
                                <button className="btn btn-primary w-100 py-2">Find Jobs</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8 py-3">
                        <div className="job_list_top_bar d-flex justify-content-start">
                            <div className="job_count mx-2">
                                <p className="mt-2">Showing 1 – 10 of 18 results</p>
                            </div>
                            <div className="mx-4">
                                <select className="form-select py-2 px-4 inputShadowNone" aria-label="Default select example">
                                    <option selected>Sort by (Default)</option>
                                    <option value="1">Newest</option>
                                    <option value="2">Oldest</option>
                                </select>
                            </div>
                            <div className="mx-4">
                                <select className="form-select py-2 px-4 inputShadowNone" aria-label="Default select example">
                                    <option value="1" selected>10 Per Page</option>
                                    <option value="1">20 Per Page</option>
                                    <option value="3">30 Per Page</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            {
                                FakeJobs.map((item, index) => {
                                    return (
                                        <div key={index} className="col-md-12 col-lg-12 col-12 " style={{ boxSizing: "border-box" }}>
                                            <div className="px-4 py-4 my-3 border rounded single_Job">
                                                <div className="d-flex justify-content-start">
                                                    <div className="icon px-1 bg-white company_Logo px-2 py-3 rounded">
                                                        <img className="" src={item.icon} style={{ width: "50px" }} alt="" />
                                                    </div>
                                                    <div>
                                                        <Link to="/" className="job_title">
                                                            <h6 className="px-2 pt-3" style={{ fontWeight: "600" }}>{item.Title}</h6>
                                                        </Link>
                                                        <div className="details d-flex justify-content-start">
                                                            <div className="d-flex justify-content-between">
                                                                <MdBusinessCenter className="mt-1 mx-1" style={{ fontSize: "15px" }} />
                                                                <p>{item.skills}</p>
                                                            </div>

                                                            <div className="d-flex mx-1 justify-content-center">
                                                                <ImLocation2 className="mt-1 mx-1" style={{ fontSize: "15px" }} />
                                                                <p>{item.location}</p>
                                                            </div>
                                                            <div className="d-flex mx-1 justify-content-center">
                                                                <TbCurrencyTaka className="mt-1 mx-1" style={{ fontSize: "15px" }} />
                                                                <p>20k - 50k /Monthly</p>
                                                            </div>

                                                        </div>
                                                        <div className="mx-auto text-center">
                                                            <div className="d-flex justify-content-start">
                                                                <span className=" rounded-pill px-3 py-2 text-white mx-2" style={{ background: "#6c89ba" }}>{item.hiring}</span>
                                                                {
                                                                    item.isArgent === true ? <span className="bg-warning rounded-pill px-3 py-2 p-2 mx-2 text-white">Argent</span> : ""
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobList;