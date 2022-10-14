import React, { Fragment, useRef } from "react";
import { NavLink } from "react-router-dom";
import { BsHourglass,BsPersonPlusFill } from "react-icons/bs";
import { RiDashboardLine } from "react-icons/ri";
import NavBar from "../Navbar/NavBar";
import profile from "../../Assets/images/member4.jpg"
// import { getUserDetails, removeSession } from "../../Helper/SessionHelper";
import { IoIosCreate } from "react-icons/io";

const MasterLayoutEmployer = (props) => {

    let contentRef, sideNavRef = useRef();

    // const onLogout = () => {
    //     removeSession()
    // }

    

    return (
        <Fragment>
            <NavBar />
            <div ref={(div) => { sideNavRef = div }} className="side-nav-open">
                <div className="candidate_profile">
                    <div className="candidate_profile_image d-flex justify-content-center mt-3">
                        <img  src={profile} className="rounded-circle" alt="" />
                    </div>
                    <h6 className="text-center mt-2">Employer</h6>
                </div>
                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2"} to="/employer_dashboard" end>
                    <RiDashboardLine className="side-bar-item-icon" />
                    <span className="side-bar-item-caption" style={{fontSize:"15px"}}>Dashboard</span>
                </NavLink>
                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2"} to="/employer_dashboard/employer_profile">
                    <BsPersonPlusFill className="side-bar-item-icon" />
                    <span className="side-bar-item-caption"  style={{fontSize:"15px"}}>Profile</span>
                </NavLink>
                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2"} to="/employer_dashboard/submit_job">
                    <IoIosCreate className="side-bar-item-icon" />
                    <span className="side-bar-item-caption"  style={{fontSize:"15px"}}>Submit Job</span>
                </NavLink>
            </div>

            <div ref={(div) => contentRef = div} className="content">
                {props.children}
            </div>

        </Fragment>
    );
};

export default MasterLayoutEmployer;