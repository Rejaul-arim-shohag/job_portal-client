import React from 'react';
import { BsPersonFill } from "react-icons/bs";
import JoditEditor from 'jodit-react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { createJob, readCategories, readLocations, readTypes } from '../../../ApiRequest/APIRequest';
import { ErrorToast, IsEmpty, SuccessToast } from '../../../Helper/FormHelper';

const SubmitJob = () => {
    useEffect(() => {
        readCategories()
            .then((result) => {
                setCategories(result)
            });
        readLocations()
            .then((result) => {
                setLocations(result)
            });
        readTypes()
            .then((result) => {
                setTypes(result)
            });
    }, [])
    const [categories, setCategories] = useState([]);
    const [types, setTypes] = useState([]);
    const [locations, setLocations] = useState([]);


    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [location, setLocation] = useState("");
    const [type, setType] = useState("");
    const [category, setCategory] = useState("");
    const [urgent, setIsUrgent] = useState("false");

    let jobTitleRef, salaryRef,vacancyRef, dedlineRef = useRef();

    const handleSubmitJob=()=>{
        const jobTitle = jobTitleRef.value;
        const salary = salaryRef.value;
        const vacancy=vacancyRef.value;
        const dedline = dedlineRef.value
        if(IsEmpty(jobTitle)){
            ErrorToast("Job Ttile Require")
        } else if(content.length<20){
            ErrorToast("Please Write a good job description")
        }
        else if(IsEmpty(location)){
            ErrorToast("location Require")
        }else if(IsEmpty(category)){
            ErrorToast("category Require")
        }else if(IsEmpty(type)){
            ErrorToast("type Require")
        }
         else if(IsEmpty(salary)){
            ErrorToast("salary Require")
        }
         else if(IsEmpty(vacancy)){
            ErrorToast("vacancy Require")
        }
        else if(IsEmpty(dedline)){
            ErrorToast(" Application Deadline Date Require")
        }
        else{
            createJob(jobTitle,content,category,type,location,salary,dedline,vacancy,urgent)
            .then((result)=>{
                if(result===true){
                    SuccessToast("Job submit success")
                }
            })
        }

    }

    return (
        <div>
            <div className="candidateProfile px-5  mt-4">
                <h3 className="mt-2">Post a New Job</h3>
                <div className="profile_update mt-4 px-5 py-4 rounded" style={{ backgroundColor: "#fff" }}>

                    <div className="row">
                        <div className="mt-3 col-12">
                            <label className="mb-2">Job Title </label>
                            <input ref={(input)=>jobTitleRef=input} className="form-control py-2 inputShadowNone" placeholder='Senior Full Stack Web developer(MERN)' style={{ backgroundColor: "#F9F8F8" }} type="text" />
                        </div>

                        <div className="mt-3 col-12">
                            <label className="mb-2">Job Description</label>
                            <JoditEditor
                                minHeight={100}
                                ref={editor}
                                onChange={(input) => setContent(input)}
                                value={content}
                                tabIndex={1}
                            />
                        </div>
                        <div className="mt-3 col-md-6">
                            <label className="mb-2">Location</label>
                            <select onChange={(e) => setLocation(e.target.value)} className="form-select py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} >
                            <option>Select Location</option>
                                {
                                    locations.map((item, index) => {
                                        return (
                                            <option key={index} value={item._id}>{item.location_name}</option>
                                        )
                                    })
                                }

                            </select>
                        </div>
                        <div className="mt-3 col-md-6">
                            <label className="mb-2">Category</label>
                            <select  onChange={(e) => setCategory(e.target.value)} className="form-select py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} >
                            <option>Select Category</option>
                                {
                                    categories.map((item, index) => {
                                        return (
                                            <option key={index} value={item._id}>{item.category_name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="mt-3 col-md-6">
                            <label className="mb-2">Type</label>
                            <select  onChange={(e) => setType(e.target.value)} className="form-select py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} >
                            <option>Select Type</option>

                            {
                                    types.map((item, index) => {
                                        return (
                                            <option key={index} value={item._id}>{item.type_name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <div className="mt-3 col-md-6">
                            <label className="mb-2">Salary</label>
                            <input ref={(input)=>salaryRef=input} className="form-control py-2 inputShadowNone" placeholder='30k-50k' style={{ backgroundColor: "#F9F8F8" }} type="text" />
                        </div>
                        <div className="mt-3 col-md-6">
                            <label className="mb-2">Vacancy</label>
                            <input ref={(input)=>vacancyRef=input} defaultValue="1" className="form-control py-2 inputShadowNone" min="1" style={{ backgroundColor: "#F9F8F8" }} type="number" />
                        </div>
                        <div className="mt-3 col-md-6">
                            <label className="mb-2">Application Deadline Date</label>
                            <input ref={(input)=>dedlineRef=input} className="form-control py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} type="date" />
                        </div>

                        <div className="mt-3 col-md-6">
                            <label className="mb-2">Is Argent?</label>
                            <select onChange={(e) => setIsUrgent(e.target.value)} className="form-select py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} >
                                <option selected value="false">No</option>
                                <option value="true">Yes</option>
                            </select>
                        </div>

                        <div className="mt-3 col-12">
                            <div className="col-6">
                                <button onClick={handleSubmitJob} className="btn btn-primary w-100 mt-3">Submit Job</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default SubmitJob;