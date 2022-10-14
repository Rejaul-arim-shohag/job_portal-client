import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import "./NavBar.css"
import logo from "../../Assets/images/logo-white.png"
import { Link, useNavigate, NavLink  } from 'react-router-dom';
const NavBar = () => {
    let navigate = useNavigate()
    return (
        <div style={{margin:"0px", padding:"0px", backgroundColor:"#2F2EA6"}}>
            <Navbar className="bg_Blue mainNav mx-w-100" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className="navLogo" src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto navItem">
                            <Nav.Link>
                                Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to='/JobList'>
                               Find Job
                            </Nav.Link>
                            <Nav.Link>
                                Employers
                            </Nav.Link>
                            <Nav.Link>
                                Candidates
                            </Nav.Link>
                            <Nav.Link>
                                Blog
                            </Nav.Link>
                            <button onClick={()=>navigate("/Login")} className="mx-3 btn  btn-outline-primary text-white">Login/Register</button>
                            <button className="btn btn-primary">Job Post</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default NavBar;