import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import "./NavBar.css"
import logo from "../../Assets/images/logo-white.png"
import { Link, useNavigate, NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { FcBusinessman } from "react-icons/fc";
const NavBar = () => {
    let navigate = useNavigate()

    const applicantDetails = localStorage?.getItem("CandidateDetails")
    const parsedData = JSON.parse(applicantDetails);
    const profile_image = parsedData?.profile_image;


    const employerDetails = localStorage?.getItem("employerDetails")
    const parsedEmployerData = JSON.parse(employerDetails);
    const EmployerProfile = parsedEmployerData?.profile_image

    
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

                            {/* {
                                employerDetails ? <Nav.Link as={NavLink} to='/JobList'>
                                    <img className="rounded-circle" src="https://res.cloudinary.com/dub6q8hhb/image/upload/v1667099857/icon/y10_dl0y2f.jpg" style={{ height: "40px" }} alt="" />
                                </Nav.Link> : <Nav.Link as={NavLink} to='/JobList'>
                                    <img className="rounded-circle" src="https://res.cloudinary.com/dub6q8hhb/image/upload/v1667099857/icon/y10_dl0y2f.jpg" style={{ height: "40px" }} alt="" />
                                </Nav.Link>
                            } */}

                            <Dropdown className={`${applicantDetails}?"hideNavLink":"showNavLink"`}>
                                <Dropdown.Toggle className="toggle_btn" variant="primary" id="dropdown-basic">
                                Login/Register
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={NavLink} to='/login'>Candidate</Dropdown.Item>
                                    <Dropdown.Item as={NavLink} to='/employer_login'>Employer</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <button className="btn btn-primary mx-2">
                                <Link to={`/employer_dashboard/submit_job`}>Job Post</Link>
                            </button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default NavBar;