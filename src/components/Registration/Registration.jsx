import React, { useEffect, useState } from 'react';
import "./Registration.css"
import { BsFillPersonFill, BsFillBriefcaseFill } from "react-icons/bs";
import GridLoader from "react-spinners/ClipLoader";
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { ErrorToast, IsEmail, IsEmpty, SuccessToast } from '../../Helper/FormHelper';
import { registrationCandidate } from '../../ApiRequest/APIRequest';
const Registration = () => {
    let emailRef, passRef, confirmPassRef = useRef();
    // const [loading, setLoading] = useState(false)
    let navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const handleCreateCandidate = () => {
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
            registrationCandidate(email, password)
                .then((result) => {
                    SuccessToast("Account create success")
                    if (result === true) {
                        navigate("/Login")
                    }
                })
        }
    }
    return (
        <div className="py-5">
            <div className="container">
                <h2 className="mt-3 text-center">Create Account</h2>
                <div className="row">
                    <div className="col-md-7 mx-auto mt-4 px-5 py-5 rounded" style={{ background: "#fff" }}>

                        <div className="content-wrap mt-2">
                            <div className="mt-3">
                                <label for="email">Email *</label>
                                <input ref={(input) => emailRef = input} required className="form-control py-3" id="email" type="text" />
                            </div>
                            <div className="mt-3">
                                <label for="password">Password *</label>
                                <input ref={(input) => passRef = input} required id="password" className="form-control py-3" type="password" />
                            </div>
                            <div className="mt-3">
                                <label for="confirmPass">Confirm Password *</label>
                                <input ref={(input) => confirmPassRef = input} required id="confirmPass" className="form-control py-3" type="password" />
                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    You accept our Terms and Conditions and Privacy Policy
                                </label>
                            </div>

                            <div className="mt-3">
                                <button onClick={handleCreateCandidate} className="btn btn-primary w-100 py-3">Register Now</button>
                            </div>



                            <div className="mt-3">
                                <p className="text-center">Already have an account? <Link to="/Login" className="text-primary font-weight-bold"> Login</Link></p>
                            </div>

                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default Registration;