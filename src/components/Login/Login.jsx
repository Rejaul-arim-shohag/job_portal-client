import React, { useEffect } from 'react';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginCandidate } from '../../ApiRequest/APIRequest';
import { ErrorToast, IsEmail, IsEmpty, SuccessToast } from '../../Helper/FormHelper';
import logo from "../../Assets/images/logo-dark.png"
import { BiLogIn } from "react-icons/bi";

const Login = () => {
    let emailRef, passRef = useRef();
    let navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleLoginCandidate = () => {
        const email = emailRef.value;
        const password = passRef.value;
        if (IsEmail(email)) {
            ErrorToast("valid Email required")
        } else if (IsEmpty(password)) {
            ErrorToast("Password required")
        } else {
            loginCandidate(email, password)
                .then((result) => {
                    if (result) {
                        window.location.href = "/candidate_dashboard/profile"
                    }

                })
        }
    }
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="d-flex justify-content-center">
                    <img style={{ width: "200px" }} src={logo} alt="" />
                </div>
                <h5 className="text-center mt-5">Sign in</h5>
                <p className="text-center">Sign in to continue to Cariera.</p>
                <div className="col-md-6 mx-auto mt-4 px-5 py-5 rounded" style={{ background: "#fff" }}>

                    <div className="content-wrap mt-2">
                        <div className="mt-4">
                            <label for="email">Email *</label>
                            <input defaultValue="rejaulkarim4740@gmail.com" ref={(input) => emailRef = input} required className="form-control" id="email" type="text" />
                        </div>
                        <div className="mt-4">
                            <label for="password">Password *</label>
                            <input defaultValue="rejaulkarim4740" ref={(input) => passRef = input} required id="password" className="form-control" type="password" />
                        </div>
                        <div className="form-check mt-2">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                            Remember me
                            </label>
                        </div>

                        <div className="mt-4">
                            <button onClick={handleLoginCandidate} className="btn btn-primary w-100"><BiLogIn className="mx-3"/>Login</button>
                        </div>

                        <div className="mt-3">
                            <p className="text-center">Don't you have an account?   <Link to="/registration" className="text-primary font-weight-bold"> Register</Link></p>
                        </div>

                    </div>

                </div>
            </div>
        </div>


    );
};

export default Login;

