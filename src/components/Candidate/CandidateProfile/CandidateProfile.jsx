import React from 'react';
import { FaUserTie } from "react-icons/fa";

import JoditEditor from 'jodit-react';
import { useState } from 'react';
import { useRef } from 'react';
import { ErrorToast, getBase64, IsEmpty, IsMobile } from '../../../Helper/FormHelper';
import { readCandidateProfileData, updateCandidateProfile, updateCandidateProfileImage } from '../../../ApiRequest/APIRequest';
import { useEffect } from 'react';
const CandidateProfile = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    let nameRef, jobTitleRef, emailRef, mobileRef, currentSalaryRef, birthRef, cvRef, linkedinRef, profileImageRef, profileImagePreviewRef = useRef();
    const [gender, setGender] = useState("Male");
    const [experience, setExperience] = useState("0");


    const previewImage = () => {
        let imageFile = profileImageRef.files[0]
        getBase64(imageFile).then((base64Image) => {
            profileImagePreviewRef.src = base64Image
            
        })
    }

   

    const handleUpdateCandidateProfile = () => {
        const fullName = nameRef.value;
        const job = jobTitleRef.value;
        const email = emailRef.value;
        const mobile = mobileRef.value;
        const currentSalary = currentSalaryRef.value;
        const dateOfBirth = birthRef.value;
        const cv = cvRef.value;
        const linkedin = linkedinRef.value;


        if (IsEmpty(fullName)) {
            ErrorToast("Name Require")
        }
        else if (IsEmpty(job)) {
            ErrorToast("Job Title Require")
        }
        else if (IsMobile(mobile)) {
            ErrorToast("Job Title Require")
        }

        else if (IsEmpty(dateOfBirth)) {
            ErrorToast("Date of birth Require")
        }
        else if (IsEmpty(cv)) {
            ErrorToast("CV Link Require")
        } else {
            updateCandidateProfile(fullName, job, gender, mobile, cv, content, currentSalary, experience, linkedin, dateOfBirth)
        }
    }

    useEffect(() => {
        readCandidateProfileData()
            .then((res) => {
                emailRef.value = res?.[0]?.email_address
                nameRef.value = res?.[0]?.applicant_name;
                jobTitleRef.value = res?.[0]?.job_title;
                emailRef.value = res?.[0]?.email_address;
                mobileRef.value = res?.[0]?.phone;
                currentSalaryRef.value = res?.[0]?.salary;
                cvRef.value = res?.[0]?.applicant_cv;
                birthRef.value = res?.[0]?.dateOfBirth;
                linkedinRef.value = res?.[0]?.linkedin;
                setContent(res?.[0]?.professional_summary)
                setGender(res?.[0]?.gender)
                setExperience(res?.[0]?.experience)
                profileImagePreviewRef.src =  res?.[0]?.profile_image;

            })
    }, [])

    const handleSaveProfileImage=()=>{
        const profileImage = profileImagePreviewRef.src

        let imageFile = profileImageRef.files;
        if(imageFile.length<1){
            ErrorToast("Select an image")
        }else{
            updateCandidateProfileImage(profileImage)
        }
    }

    return (
        <div>
            <div className="candidateProfile px-5  mt-4">
                <h3 className="mt-2">Edit Profile</h3>
                <div className="profile_update mt-4 px-5 py-4 rounded" style={{ backgroundColor: "#fff" }}>
                    <h6>My Profile</h6>
                    <div className="profile_image d-flex justify-content-center">
                        <div className="bg-white">
                            <div>
                                <img ref={(input) => profileImagePreviewRef = input}  className="user-profile-img" alt="" />
                            </div>
                            <input className="mt-2" onChange={previewImage} ref={(input) => profileImageRef = input} type="file" name="" id="" />
                            <br/>
                            <button onClick={handleSaveProfileImage} className="btn btn-primary btn-sm mt-2">Save</button>
                        </div>

                    </div>

                    <div className="row">
                        <div className="mt-3 col-md-6">
                            <label className="mb-2">Full Name</label>
                            <input ref={(input) => nameRef = input} className="form-control py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} id="email" type="text" />
                        </div>
                        <div className="mt-3 col-md-6">
                            <label className="mb-2">Job Title</label>
                            <input ref={(input) => jobTitleRef = input} className="form-control py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} id="email" type="text" />
                        </div>
                        <div className="mt-3 col-md-6">
                            <label className="mb-2">Gender</label>
                            <select onChange={(e) => setGender(e.target.value)} className="form-select py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} id="email" type="text" >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Both">Both</option>
                            </select>
                        </div>


                        <div className="mt-3 col-md-6">
                            <label className="mb-2">Email</label>
                            <input readOnly ref={(input) => emailRef = input} className="form-control py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} id="email" type="text" />
                        </div>
                        <div className="mt-3 col-md-6">
                            <label className="mb-2">Phone</label>
                            <input ref={(input) => mobileRef = input} className="form-control py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} id="email" type="text" />
                        </div>
                        <div className="mt-3 col-md-6">
                            <label className="mb-2">Current Salary</label>
                            <input ref={(input) => currentSalaryRef = input} className="form-control py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} id="email" type="text" />
                        </div>
                        <div className="mt-3 col-md-6">
                            <label className="mb-2">Date Of Birth</label>
                            <input ref={(input) => birthRef = input} className="form-control py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} id="email" type="date" />
                        </div>

                        <div className="mt-3 col-md-6">
                            <label className="mb-2">Experience</label>
                            <select onChange={(e) => setExperience(e.target.value)} className="form-select py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} id="email" type="text" >
                                <option value="0">Fresher</option>
                                <option value="1">1 year</option>
                                <option value="2">2 Years</option>
                                <option value="3">3 Years</option>
                                <option value="4">4 Years</option>
                                <option value="5+">5 + Years</option>
                            </select>
                        </div>
                        <div className="mt-3 col-md-6">
                            <label className="mb-2">CV Link</label>
                            <input ref={(input) => cvRef = input} className="form-control py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} id="email" type="text" />
                        </div>
                        <div className="mt-3 col-md-6">
                            <label className="mb-2">Linkedin</label>
                            <input ref={(input) => linkedinRef = input} className="form-control py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} id="email" type="text" />
                        </div>

                        <div className="mt-3 col-12" style={{ minHeight: "400px" }}>
                            <label className="mb-2">Description</label>
                            <JoditEditor
                                minHeight={100}
                                ref={editor}
                                onChange={(input) => setContent(input)}
                                value={content}
                                tabIndex={1}
                            />
                        </div>
                        <div className="mt-4 col-12 col-md-6">
                            <button onClick={handleUpdateCandidateProfile} className="btn btn-primary w-100">Save Profile</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default CandidateProfile;