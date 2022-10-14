import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 mx-auto mt-4 px-5 py-5 rounded" style={{ background: "#fff" }}>
                    <h4 className="text-center mt2 mb-4" style={{ fontWeight: "600" }}>Login to karim-job-portal</h4>
                    <div className="content-wrap mt-2">
                        <div className="mt-4">
                            <label for="email">Email *</label>
                            <input required className="form-control py-3" id="email" type="text" />
                        </div>
                        <div className="mt-4">
                            <label for="password">Password *</label>
                            <input required id="password" className="form-control py-3" type="password" />
                        </div>
                        <div className="mt-4">
                            <label for="confirmPass">Confirm Password *</label>
                            <input required id="confirmPass" className="form-control py-3" type="password" />
                        </div>


                        <div className="mt-4">
                            <button className="btn btn-primary w-100 py-3">Login</button>
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

