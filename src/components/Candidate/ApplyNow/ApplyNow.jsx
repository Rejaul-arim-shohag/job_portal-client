import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { jobApplicationSend, readCandidateProfileData, readJobById } from '../../../ApiRequest/APIRequest';
import { SuccessToast } from '../../../Helper/FormHelper';

const ApplyNow = () => {
    let nameRef, emailRef, phonRef, cvRef = useRef()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    useEffect(() => {
        readCandidateProfileData()
            .then((res) => {
                emailRef.value = res?.[0]?.email_address;
                nameRef.value = res?.[0]?.applicant_name;
                phonRef.value = res?.[0]?.phone;
                cvRef.value = res?.[0]?.applicant_cv;
            })
    })

    let { job_id } = useParams()
    const [Job, setSIngleJob] = useState({})
    useEffect(() => {
        readJobById(job_id)
            .then((result) => {
                console.log(result)
                setSIngleJob(result)
            })
    }, [])

    const handleSendApplication=()=>{
        jobApplicationSend(job_id, Job.company_id)
        .then((result)=>{
            if(result===true){
                SuccessToast("Applied Success")
            }
        })
    }
    return (
        <div className=" py-5">
            <div className="container">
                <div className="row ">
                    {/* <h6 className='text-center mb-3'>Applying For  <span className="text-primary font-weight-bold" style={{fontSize:"20px"}}>Junior MERN stack developer</span></h6> */}
                    <h3 className="text-center">Apply Online</h3>
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className="col-12 mb-5 mt-5">
                                <h4>{Job?.company_name}</h4>
                                <h6>{Job?.job_title}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 bg-white px-5 py-5 mx-auto">
                        <div className="col-12 mt-3">
                            <label className="mb-2">Name</label>
                            <input readOnly ref={(input) => nameRef = input} className="form-control inputShadowNone" type="text" />
                        </div>
                        <div className="col-12 mt-3">
                            <label className="mb-2">Email Address</label>
                            <input readOnly ref={(input) => emailRef = input} className="form-control inputShadowNone" type="text" />
                        </div>
                        <div className="col-12 mt-3">
                            <label className="mb-2">Phone </label>
                            <input readOnly ref={(input) => phonRef = input} className="form-control inputShadowNone" type="text" />
                        </div>
                        <div className="col-12 mt-3">
                            <label className="mb-2">CV/Resume</label>
                            <input readOnly ref={(input) => cvRef = input} className="form-control inputShadowNone" type="text" />
                        </div>
                        <div className="col-12 mt-3">
                            <label className="mb-2">Message</label>
                            <textarea className="form-control inputShadowNone" rows="3" type="text" />
                        </div>
                        <div className="col-12 mt-4">
                            <button onClick={handleSendApplication} className="btn btn-primary">Send Application</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplyNow;