import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import "./NavBar.css"
import logo from "../../Assets/images/logo-white.png"
import { Link, useNavigate, NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { FcBusinessman } from "react-icons/fc";
import { BiLogIn } from "react-icons/bi";

import { FaUserTie } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";

const NavBar = () => {
    let navigate = useNavigate()

    const applicantDetails = localStorage?.getItem("CandidateDetails")
    const parsedData = JSON.parse(applicantDetails);
    const profile_image = parsedData?.profile_image;


    const employerDetails = localStorage?.getItem("employerDetails")
    const parsedEmployerData = JSON.parse(employerDetails);
    const EmployerProfile = parsedEmployerData?.profile_image;
    let data;
    if (applicantDetails !== null) {
        data = <Nav.Link as={NavLink}  to='/candidate_dashboard'>
            <img className="rounded-" src={profile_image} style={{ height: "40px" }} alt="" />
        </Nav.Link>

    } else if (employerDetails !== null) {
        data = <Nav.Link  as={NavLink} to='/employer_dashboard'>
            <img className="rounded-circle" src={EmployerProfile} style={{ height: "40px" }} alt="" />
        </Nav.Link>

    } else {
        data = <Dropdown>
            <Dropdown.Toggle className="toggle_btn px-4 mx-3 mt-1" variant="primary" id="dropdown-basic">
                Login/Register
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item className="my-3 py-2" as={NavLink} to='/login'><FaUserTie className="mx-2" />Candidate</Dropdown.Item>
                <Dropdown.Item className="my-3 py-2" as={NavLink} to='/employer_login'><BsFillBriefcaseFill className="mx-2" />Employer</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    }


    return (
        <div style={{ margin: "0px", padding: "0px", backgroundColor: "#2F2EA6" }}>
            <Navbar className="bg_Blue mainNav mx-w-100" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img className="navLogo" src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto navItem">
                            <Nav.Link as={NavLink} to='/'>
                                Home
                            </Nav.Link>

                            <Nav.Link as={NavLink} to='/JobList'>
                                Find Job
                            </Nav.Link>
                            {data}

                            <Link to={`/employer_dashboard/submit_job`}>
                                <button className="btn btn-primary mx-2 px-5 py-2 mt-1">
                                    Job Post
                                </button>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default NavBar;