import React from 'react';
import { MdBusinessCenter } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from 'react-router-dom';
import "./Jobs.css"
const Jobs = () => {
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
        <div className="my-5 bg-white py-5">
            <div className="container">
                <div className="my-2 mb-3">
                    <h1 className="text-center">Featured Jobs</h1>
                    <h6 className="text-center">Know your worth and find the job that qualify your life </h6>
                </div>
                <div className="jobs row">
                    {
                        FakeJobs.map((item, index) => {
                            return (
                                <div key={index} className="col-md-6 col-lg-6 col-12 " style={{ boxSizing: "border-box" }}>
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
                                                        <span className=" rounded-pill px-3 py-2 text-white mx-2" style={{background:"#6c89ba"}}>{item.hiring}</span>
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

                
                <div className="load_more_btn d-flex justify-content-center mt-5 mb-2">
                    <button className="btn btn-primary btn-lg">Load More Listing</button>
                </div>
            </div>
        </div>
    );
};

export default Jobs;

