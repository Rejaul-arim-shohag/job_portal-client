import React from 'react';
import NavBar from '../Navbar/NavBar';
import "./HeroSection.css"

import { BiSearch } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import slider from "../../Assets/images/slider2.png"

import Select from 'react-dropdown-select';
const HeroSection = () => {
    return (
        <div className="heroSection">
            <NavBar />
            <div className="hero_content mt-5 mx-5">
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-12">
                        <h1 className="text-white mt-5">
                            Find Your Perfect
                            <br />
                            JobMatch
                        </h1>
                        <h5 className="text-white mt-4">
                            Find Jobs, Employment & Career Opportunities
                        </h5>
                        <div className="searchBox my-5 ">
                            <div className="box">
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control searchInput mr-sm-2 w-50 py-4 px-5" type="search" placeholder="Job Title, Keywords" aria-label="Search" />
                                </form>
                                <div className="searchIcon">
                                    <BiSearch style={{ fontSize: "25px" }} />
                                </div>
                                <div className="locationSelect">
                                    <select className="form-select border-0 w-90" style={{boxShadow:"none"}} aria-label="Default select example">
                                        <option selected>City</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="ImLocation">
                                    <ImLocation style={{fontSize:"20px"}}/>
                                </div>
                                <div className="jobSearchBtn">
                                    <button className="btn btn-primary btn-lg" style={{boxShadow:"none"}}>Find Job</button>
                                </div>
                            </div>

                        </div>
                        <h6 className="text-white">
                            Popular Searches : Designer, Developer, Web, IOS, PHP, Senior Engineer
                        </h6>
                    </div>
                    <div className="col-lg-5 col-md-5 col-12">
                        <img className="w-100" src={slider} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;