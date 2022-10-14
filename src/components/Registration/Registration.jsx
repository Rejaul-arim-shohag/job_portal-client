import React, { useEffect, useState } from 'react';
import "./Registration.css"
import { BsFillPersonFill, BsFillBriefcaseFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Registration = () => {
    const [option, setOption] = useState('1');
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="py-5">
            <div className="container">
                <h5 className="mt-3 text-center">Create a free karim-job-portal account</h5>
                <div className="row">
                    <div className="col-md-7 mx-auto mt-4 px-5 py-5 rounded" style={{ background: "#fff" }}>
                        <div className="option-wrap">
                            <div className={`option ${option === '1' ? 'selected' : ''}`} onClick={(e) => setOption('1')}><BsFillPersonFill className="mx-2" />Candidate</div>
                            <div className={`option ${option === '2' ? 'selected' : ''}`} onClick={(e) => setOption('2')}><BsFillBriefcaseFill className="mx-2" />Employer</div>
                        </div>
                        <div className="content-wrap mt-2">
                            <div className="mt-3">
                                <label for="email">Email *</label>
                                <input required className="form-control py-3" id="email" type="text" />
                            </div>
                            <div className="mt-3">
                                <label for="password">Password *</label>
                                <input required id="password" className="form-control py-3" type="password" />
                            </div>
                            <div className="mt-3">
                                <label for="confirmPass">Confirm Password *</label>
                                <input required id="confirmPass" className="form-control py-3" type="password" />
                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    You accept our Terms and Conditions and Privacy Policy
                                </label>
                            </div>

                            <div className="mt-3">
                                <button className="btn btn-primary w-100 py-3">Register Now</button>
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