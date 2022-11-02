import React, { Fragment, useRef } from "react";
import { NavLink } from "react-router-dom";
import { BsHourglass, BsPersonPlusFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

import { RiDashboardLine } from "react-icons/ri";
import NavBar from "../Navbar/NavBar";
import profile from "../../Assets/images/member4.jpg"
// import { getUserDetails, removeSession } from "../../Helper/SessionHelper";
import { IoIosCreate } from "react-icons/io";
import { useEffect } from "react";
import { readEmployerProfile } from "../../ApiRequest/APIRequest";
import { useState } from "react";
import { removeSession } from "../../Helper/SessionHelper";

const MasterLayoutEmployer = (props) => {

    let contentRef, sideNavRef, profileImagePreviewRef = useRef();
    const [companyName, setName] = useState("")

    const onLogout = () => {
        removeSession()
        window.location.href = "/"
    }
    const applicantDetails = localStorage.getItem("employerDetails")
    const parsedData = JSON.parse(applicantDetails);
    const { profile_image, company_name } = parsedData
    useEffect(() => {
        profileImagePreviewRef.src = profile_image;
        setName(company_name)
        // readEmployerProfile()
        //     .then((result) => {
        //         profileImagePreviewRef.src = result?.profile_image;
        //         setName(result?.company_name)
        //     })
    }, [])


    return (
        <Fragment>
            <NavBar />
            <div ref={(div) => { sideNavRef = div }} className="side-nav-open">
                <div className="candidate_profile">
                    <div className="candidate_profile_image d-flex justify-content-center mt-3">
                        <img ref={(input) => profileImagePreviewRef = input} className="rounded" style={{ width: "100px" }} alt="" />
                    </div>
                    <h6 className="text-center mt-2 mx-4">{companyName}</h6>
                </div>
                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2"} to="/employer_dashboard" end>
                    <RiDashboardLine className="side-bar-item-icon" />
                    <span className="side-bar-item-caption" style={{ fontSize: "15px" }}>Dashboard</span>
                </NavLink>
                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2"} to="/employer_dashboard/employer_profile">
                    <BsPersonPlusFill className="side-bar-item-icon" />
                    <span className="side-bar-item-caption" style={{ fontSize: "15px" }}>Profile</span>
                </NavLink>
                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2"} to="/employer_dashboard/submit_job">
                    <IoIosCreate className="side-bar-item-icon" />
                    <span className="side-bar-item-caption" style={{ fontSize: "15px" }}>Submit Job</span>
                </NavLink>

                <div className="mx-4 mt-2">
                    <button onClick={onLogout} className="btn btn-primary">
                        <BiLogOut className="side-bar-item-icon text-white" />
                        <span className="side-bar-item-caption text-white" style={{ fontSize: "15px" }}>Logout</span>
                    </button>
                </div>

            </div>

            <div ref={(div) => contentRef = div} className="content">
                {props.children}
            </div>

        </Fragment>
    );
};

export default MasterLayoutEmployer;