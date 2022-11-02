import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registrationEmployer } from '../../../ApiRequest/APIRequest';
import { ErrorToast, IsEmail, IsEmpty, SuccessToast } from '../../../Helper/FormHelper';
import logo from "../../../Assets/images/logo-dark.png"

const EmployerRegistration = () => {
    let emailRef, passRef, confirmPassRef = useRef();
    let navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const handleCreateEmployer = () => {
        const email = emailRef.value;
        const password = passRef.value;
        const confirmPas = confirmPassRef.value;

        if (IsEmail(email)) {
            ErrorToast("valid Email required")
        } else if (IsEmpty(password)) {
            ErrorToast("Password required")
        } else if (password !== confirmPas) {
            ErrorToast("Password must be equal Confirm Password")
        } else {
            registrationEmployer(email, password)
                .then((result) => {
                    if (result === true) {
                        navigate("/employer_login")
                    }
                })
        }
    }
    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="d-flex justify-content-center">
                        <img style={{ width: "200px" }} src={logo} alt="" />
                    </div>
                    <h5 className="text-center mt-5">Sign up</h5>
                    <p className="text-center">Get your Cariera account now.</p>
                    <div className="col-md-6 mx-auto mt-4 px-5 py-5 rounded" style={{ background: "#fff" }}>

                        <div className="content-wrap mt-2">
                            <div className="mt-3">
                                <label for="email">Email *</label>
                                <input ref={(input) => emailRef = input} required className="form-control" id="email" type="text" />
                            </div>
                            <div className="mt-3">
                                <label for="password">Password *</label>
                                <input ref={(input) => passRef = input} required id="password" className="form-control " type="password" />
                            </div>
                            <div className="mt-3">
                                <label for="confirmPass">Confirm Password *</label>
                                <input ref={(input) => confirmPassRef = input} required id="confirmPass" className="form-control " type="password" />
                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    You accept our Terms and Conditions and Privacy Policy
                                </label>
                            </div>

                            <div className="mt-3">
                                <button onClick={handleCreateEmployer} className="btn btn-primary w-100">Register Now</button>
                            </div>
                            <div className="mt-3">
                                <p className="text-center">Already have an account? <Link to="/employer_login" className="text-primary font-weight-bold"> Login</Link></p>
                            </div>

                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default EmployerRegistration;