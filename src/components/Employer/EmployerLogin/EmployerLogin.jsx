import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginEmployer } from '../../../ApiRequest/APIRequest';
import { ErrorToast, IsEmail, IsEmpty } from '../../../Helper/FormHelper';

const EmployerLogin = () => {
    let emailRef, passRef= useRef();
    let navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const handleLoginEmployer=()=>{
        const email = emailRef.value;
        const password = passRef.value;
        if(IsEmail(email)){
            ErrorToast("valid Email required")
        } else if (IsEmpty(password)){
            ErrorToast("Password required")
        } else{
            loginEmployer(email,password)
            .then((result)=>{
                if(result.data.data){
                    navigate("/employer_dashboard")
                }
               
            })
        }
      }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 mx-auto mt-4 px-5 py-5 rounded" style={{ background: "#fff" }}>
                    <h1 className="text-center mt2 mb-4" style={{ fontWeight: "600" }}>Login</h1>
                    <div className="content-wrap mt-2">
                        <div className="mt-4">
                            <label for="email">Email *</label>
                            <input ref={(input)=>emailRef=input} required className="form-control py-2" id="email" type="text" />
                        </div>
                        <div className="mt-4">
                            <label for="password">Password *</label>
                            <input ref={(input)=>passRef=input} required id="password" className="form-control py-2" type="password" />
                        </div>
                        

                        <div className="mt-4">
                            <button onClick={handleLoginEmployer}  className="btn btn-primary w-100 py-2">Login</button>
                        </div>

                        <div className="mt-3">
                            <p className="text-center">Don't you have an account? <Link to="/employer_registration" className="text-primary font-weight-bold"> Register</Link></p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default EmployerLogin;