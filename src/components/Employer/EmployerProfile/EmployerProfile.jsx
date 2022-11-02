import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { BsPersonFill } from "react-icons/bs";
import { readCategories, readEmployerProfile, updateEmployerProfile, updateEmployerProfileImage } from '../../../ApiRequest/APIRequest';
import JoditEditor from 'jodit-react';
import { ErrorToast, getBase64, IsEmail, IsEmpty, SuccessToast } from '../../../Helper/FormHelper';

const EmployerProfile = () => {

    const [categories, setCategories] = useState([])
    useEffect(() => {
        readCategories()
            .then((res) => {
                setCategories(res)
            })
    }, [])


    let profileImageRef, profileImagePreviewRef,nameRef, addressRef, contactRef, emailRef, websiteRef, foundateDateRef, linkedinRef = useRef()
    const [category, setCategory] = useState("");
    const [size, setSize] = useState("");
    const editor = useRef(null);
    const [content, setContent] = useState();

    const handleUpdateCompanyProfile = () => {
        const compnay_Name = nameRef.value;
        const address = addressRef.value;
        const contact = contactRef.value;
        const email = emailRef.value;
        const Website = websiteRef.value;
        const foundateDate = foundateDateRef.value;

        const linkedin = linkedinRef.value;
        if (IsEmpty(compnay_Name)) {
            ErrorToast("Company name require")
        } else if (IsEmpty(address)) {
            ErrorToast("address require")
        }
        else if (IsEmpty(contact)) {
            ErrorToast("Phone number require")
        }

        else if (IsEmpty(Website)) {
            ErrorToast("Website require")
        }
        else if (IsEmpty(foundateDate)) {
            ErrorToast("founded Date require")
        }
        else if (IsEmpty(size)) {
            ErrorToast("Company Size require")
        }
        else if (IsEmpty(linkedin)) {
            ErrorToast("Company Size require")
        } else {
            updateEmployerProfile(compnay_Name, address, contact, Website, content, foundateDate, size, category, linkedin)
                .then((res) => {
                    if (res === true) {
                        SuccessToast("Update Success")
                    }
                })
          
        }

    }
    const handleSaveProfileImage=()=>{
        const profileImage = profileImagePreviewRef.src

        let imageFile = profileImageRef.files;
        if(imageFile.length<1){
            ErrorToast("Select an image")
        }else{
            updateEmployerProfileImage(profileImage)
        }
    }

    useEffect(() => {
        readEmployerProfile()
            .then((res) => {
                nameRef.value = res?.company_name
                addressRef.value = res?.company_address;
                contactRef.value = res?.company_contact;
                emailRef.value = res?.company_email;
                websiteRef.value = res?.company_website;
                foundateDateRef.value = res?.founded_date;
                setSize(res?.company_size)
                linkedinRef.value = res?.linkedin;
                setContent(res.professional_summary);
                setCategory(res?.categories);
                profileImagePreviewRef.src = res?.profile_image;

            })
    }, [])

    const previewImage = () => {
        let imageFile = profileImageRef.files[0]
        getBase64(imageFile).then((base64Image) => {
            profileImagePreviewRef.src = base64Image
        })
    }

    
    return (
        <div>
            <div className="candidateProfile px-5  mt-4">
                <div className="profile_image d-flex justify-content-center">
                    <div className="">
                        <div className="mb-2">
                            <img ref={(input) => profileImagePreviewRef = input} className="user-profile-img" alt="" />
                        </div>
                        <input onChange={previewImage} ref={(input) => profileImageRef = input} type="file" name="" id="" />
                        <br />
                        <button onClick={handleSaveProfileImage} className="btn btn-primary btn-sm mt-2">Save</button>
                    </div>
                </div>
                <div className="row">
                    <div className="mt-3 col-md-6">
                        <label className="mb-2">Company Name</label>
                        <input placeholder="" ref={(input) => nameRef = input} className="form-control py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} id="email" type="text" />
                    </div>
                    <div className="mt-3 col-md-6">
                        <label className="mb-2">Address</label>
                        <input ref={(input) => addressRef = input} className="form-control py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} id="email" type="text" />
                    </div>
                    <div className="mt-3 col-md-6">
                        <label className="mb-2">Category</label>
                        <select onChange={(e) => setCategory(e.target.value)} className="form-select py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} id="email" type="text" >
                            <option >Chooice  category</option>

                            {
                                categories.map((item, index) => {
                                    return (
                                        <option key={index} value={item.category_name}>{item.category_name}</option>
                                    )
                                })
                            }


                        </select>
                    </div>
                    <div className="mt-3 col-md-6">
                        <label className="mb-2">Phone</label>
                        <input ref={(input) => contactRef = input} className="form-control py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} id="email" type="text" />
                    </div>

                    <div className="mt-3 col-md-6">
                        <label className="mb-2">Email</label>
                        <input readOnly ref={(input) => emailRef = input} className="form-control py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} id="email" type="text" />
                    </div>

                    <div className="mt-3 col-md-6">
                        <label className="mb-2">Website</label>
                        <input ref={(input) => websiteRef = input} className="form-control py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} id="email" type="text" />
                    </div>
                    <div className="mt-3 col-md-6">
                        <label className="mb-2">Founded Date</label>
                        <input ref={(input) => foundateDateRef = input} className="form-control py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} id="email" type="text" />
                    </div>


                    <div className="mt-3 col-md-6">
                        <label className="mb-2">Employment Number</label>
                        <select onChange={(e) => setSize(e.target.value)} className="form-select py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} id="email" type="text">
                            <option >Company Size</option>
                            <option value="20-50">20-50</option>
                            <option value="50-100">50-100</option>
                            <option value="100+">100+</option>
                        </select>
                    </div>
                    <div className="mt-3 col-12">
                        <label className="mb-2">Professional Summary</label>
                        <JoditEditor
                            ref={editor}
                            onChange={(input) => setContent(input)}
                            value={content}
                            tabIndex={1}
                        />
                    </div>
                    <div className="mt-3 col-md-6">
                        <label className="mb-2">Linkedin</label>
                        <input ref={(input) => linkedinRef = input} className="form-control py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} id="email" type="text" />
                    </div>


                    <div className="mt-4 col-12">
                        <button onClick={handleUpdateCompanyProfile} className="btn btn-primary w-49">Save Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployerProfile;