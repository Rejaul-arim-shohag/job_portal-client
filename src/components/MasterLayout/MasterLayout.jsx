import React, { Fragment, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { BsHourglass, BsPersonPlusFill } from "react-icons/bs";
import { RiDashboardLine } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
import NavBar from "../Navbar/NavBar";
import profile from "../../Assets/images/member4.jpg"
import { readCandidateProfileData } from "../../ApiRequest/APIRequest";
import { useState } from "react";
import { removeSession } from "../../Helper/SessionHelper";
// import { getUserDetails, removeSession } from "../../Helper/SessionHelper";

const MasterLayout = (props) => {

    let contentRef, sideNavRef, nameRef, profileImagePreviewRef = useRef();
    const [candidateName, setCandidateName] = useState("")
    const onLogout = () => {
        removeSession()
    }

    const applicantDetails = localStorage.getItem("CandidateDetails")
    const parsedData = JSON.parse(applicantDetails);
    const { profile_image, applicant_name } = parsedData;
    

   
    useEffect(() => {
        profileImagePreviewRef.src = profile_image;
        setCandidateName(applicant_name)
        // readCandidateProfileData()
        //     .then((res) => {
        //         setCandidateName(res?.[0]?.applicant_name);
        //         profileImagePreviewRef.src = res?.[0]?.profile_image;

        //     })
    }, [])

    return (
        <Fragment>
            <NavBar />
            <div ref={(div) => { sideNavRef = div }} className="side-nav-open">
                <div className="candidate_profile">
                    <div className="candidate_profile_image d-flex justify-content-center mt-3">
                        <img ref={(input) => profileImagePreviewRef = input} className="rounded-circle dashboard_profile "style={{width:"100px"}} alt="" />
                    </div>
                    <h6 className="text-center mt-2">{candidateName}</h6>
                </div>
                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2"} to="/candidate_dashboard" end>
                    <RiDashboardLine className="side-bar-item-icon" />
                    <span className="side-bar-item-caption" style={{ fontSize: "15px" }}>Candidate Dashboard</span>
                </NavLink>
                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2"} to="/candidate_dashboard/profile">
                    <BsPersonPlusFill className="side-bar-item-icon" />
                    <span className="side-bar-item-caption" style={{ fontSize: "15px" }}>Profile</span>
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

export default MasterLayout;