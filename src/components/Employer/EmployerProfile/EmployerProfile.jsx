import React from 'react';
import { BsPersonFill } from "react-icons/bs";

const EmployerProfile = () => {
    return (
        <div>
            <div className="candidateProfile px-5  mt-4">
                <h3 className="mt-2">Edit Profile</h3>
                <div className="profile_update mt-4 px-5 py-4 rounded" style={{ backgroundColor: "#fff" }}>
                    <h6>My Profile</h6>
                    <div className="profile_image d-flex justify-content-center">
                        <div className="bg-white">
                            <BsPersonFill style={{ fontSize: "100px" }} />
                            <h6 className="mt-3">Rejaul Karim</h6>
                        </div>

                    </div>

                    <div className="row">
                        <div className="mt-3 col-md-6">
                            <label for="email" className="mb-2">Full Name</label>
                            <input required className="form-control py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} id="email" type="text" />
                        </div>
                        <div className="mt-3 col-md-6">
                            <label for="birthDate" className="mb-2">Date Of Birth</label>
                            <input required className="form-control py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} id="email" type="birthDate" />
                        </div>
                        <div className="mt-3 col-md-6">
                            <label for="gender" className="mb-2">gender</label>
                            <select required className="form-select py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} id="email" type="gender" >
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Both</option>
                            </select>
                        </div>
                        <div className="mt-3 col-md-6">
                            <label for="birthDate" className="mb-2">Date Of Birth</label>
                            <input required className="form-control py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} id="email" type="birthDate" />
                        </div>
                        <div className="mt-3 col-md-6">
                            <label for="birthDate" className="mb-2">Date Of Birth</label>
                            <input required className="form-control py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} id="email" type="birthDate" />
                        </div>
                        <div className="mt-3 col-md-6">
                            <label for="birthDate" className="mb-2">Date Of Birth</label>
                            <input required className="form-control py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} id="email" type="birthDate" />
                        </div>

                        <div className="mt-3 col-md-6">
                            <label for="birthDate" className="mb-2">Date Of Birth</label>
                            <input required className="form-control py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} id="email" type="birthDate" />
                        </div>
                        <div className="mt-3 col-md-6">
                            <label for="birthDate" className="mb-2">Date Of Birth</label>
                            <input required className="form-control py-2 inputShadowNone" style={{ backgroundColor: "#F9F8F8" }} id="email" type="birthDate" />
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default EmployerProfile;