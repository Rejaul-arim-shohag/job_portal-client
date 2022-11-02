import axios from "axios";
import { ErrorToast, SuccessToast } from "../Helper/FormHelper";
import { getCandidateToken, getEmployerToken, removeSession, setCandidateDetails, setCandidateToken, setEmployerDetails, setEmployerToken, } from "../Helper/SessionHelper";
import store from "../redux/store/store";
import { HideLoader, ShowLoader } from "../redux/stateSlice/settingSlice";

//business table product slice
import { SetALLProduct, SetTotal } from "../redux/stateSlice/productSlice";

import { SetCanceledTask, setCompletedTask, setNewTask, SetProgressTask } from "../redux/stateSlice/taskSlice";
import { SetSummary } from "../redux/stateSlice/summarySlice";
import { SetProfile } from "../redux/stateSlice/profileSlice";

const baseUrl = "http://localhost:5000/api/v1";

const candidate_axiosHeader = { headers: { "applicantstoken": getCandidateToken() } }
const applicantDetails = localStorage.getItem("CandidateDetails")
const parsedData = JSON.parse(applicantDetails);
const applicant_id = parsedData?._id

const employer_axiosHeader = { headers: { "employer_token": getEmployerToken() } }
const employerDetails = localStorage.getItem("employerDetails")
const parsedEmployerDetails = JSON.parse(employerDetails);
const employer_id = parsedEmployerDetails?._id

export function registrationCandidate(email, password) {
    const url = baseUrl + "/ApplicantRegistration";
    store.dispatch(ShowLoader())
    const postBody = {
        email_address: email,
        password: password
    }
    return axios.post(url, postBody)
        .then((result) => {
            store.dispatch(HideLoader())
            if (result.status === 200) {
                return result.data.data
            } else {
                return "something went wrong"
            }
        })
}

export function loginCandidate(email, password) {
    const url = baseUrl + "/ApplicantLogin";
    store.dispatch(ShowLoader())
    const postBody = {
        email_address: email,
        password: password
    }
    return axios.post(url, postBody)
        .then((result) => {
            store.dispatch(HideLoader())
            if (result.status === 200) {
                setCandidateToken(result.data["ApplicantToken"])
                setCandidateDetails(result.data.data)
                SuccessToast("Login Success")
                return result.data.data
            } else {
                ErrorToast("Invalid email address or password")
                return "something went wrong"
            }
        })
}

export function updateCandidateProfile(name, job_title, gender, phone, cv, summary, salary, experience, linkedin, dateOfBirth) {
    const url = baseUrl + "/ApplicantProfileUpdate/" + applicant_id;
    store.dispatch(ShowLoader())
    const postBody = {
        applicant_name: name,
        job_title: job_title,
        gender: gender,
        phone: phone,
        applicant_cv: cv,
        professional_summary: summary,
        salary: salary,
        experience: experience,
        linkedin: linkedin,
        dateOfBirth: dateOfBirth
    }
    return axios.post(url, postBody, candidate_axiosHeader)
        .then((result) => {
            store.dispatch(HideLoader())
            if (result.status === 200) {
                SuccessToast("Success")
                return result.data.data
            } else {

                return "something went wrong"
            }
        })
}

export function updateCandidateProfileImage(image) {
    const url = baseUrl + "/ApplicantProfilePicUpdate/" + applicant_id;
    store.dispatch(ShowLoader())
    const postBody = {
        profile_image: image
    }
    return axios.post(url, postBody, candidate_axiosHeader)
        .then((result) => {
            store.dispatch(HideLoader())
            if (result.status === 200) {
                SuccessToast("Success")
                return result.data.data
            } else {
                return "something went wrong"
            }
        }).catch((err) => {
            store.dispatch(HideLoader())
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/login"
            }
        })
}

export function readCandidateProfileData() {
    const url = baseUrl + "/readApplicantProfile/" + applicant_id;
    store.dispatch(ShowLoader())
    return axios.get(url)
        .then((result) => {
            store.dispatch(HideLoader())
            if (result.status === 200 || 201) {
                return result.data.data
            } else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        })
}

export function readApplicantJobs() {
    const url = baseUrl + "/readApplicantJobs/" + applicant_id;
    store.dispatch(ShowLoader())
    return axios.get(url, candidate_axiosHeader)
        .then((result) => {
            store.dispatch(HideLoader())
            if (result.status === 200 || 201) {
                return result.data.data
            } else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        })
}

export function jobApplicationSend(job_id, companyId) {
    const url = baseUrl + "/CreateJobApply";
    store.dispatch(ShowLoader())
    const postBody = {
        applicant_id:applicant_id,
        job_id:job_id,
        companyId:companyId,

    }
    return axios.post(url, postBody, candidate_axiosHeader)
        .then((result) => {
            store.dispatch(HideLoader())
            if (result.status === 200) {
                return true
            } else {
               ErrorToast("Applied Failed")
            }
        }).catch((err) => {
            store.dispatch(HideLoader())
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/login"
            }
        })
}


export function readCategories() {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/jobCategoryRead";
    return axios.get(url)
        .then((result) => {
            store.dispatch(HideLoader())
            if (result.status === 200) {
                return result.data.data
            } else {
                ErrorToast("Something Went Wrong")
            }
        })
}

export function readLocations() {
    const url = baseUrl + "/readLocations";
    return axios.get(url)
        .then((result) => {
            if (result.status === 200) {
                return result.data.data
            } else {
                return "something went wrong"
            }
        })
}

export function readTypes() {
    const url = baseUrl + "/jobTypeRead";
    return axios.get(url)
        .then((result) => {
            if (result.status === 200) {
                return result.data.data
            } else {
                return "something went wrong"
            }
        })
}



export function readJobs(perPage, searchKeyword, location, category, type, sortBy, pageNo) {
   debugger;
    const url = baseUrl + "/readJobs/" + pageNo+ "/" + perPage;
    store.dispatch(ShowLoader())
    const postBody = {
        searchKeyword: searchKeyword,
        job_location_id: location,
        job_category_id: category,
        job_type: type,
        sortBy: sortBy
    }
    return axios.post(url, postBody)
        .then((result) => {
            store.dispatch(HideLoader())
            if (result.status === 200) {
                return result.data.data
            } else {
                ErrorToast("Something Went Wrong")
            }
        })
}


export function readJobById(id) {
    const url = baseUrl + "/readJobById/" + id;
    store.dispatch(ShowLoader())
    return axios.get(url)
        .then((result) => {
            store.dispatch(HideLoader())
            if (result.status === 200) {
                return result.data.data[0]
            } else {
                ErrorToast("Something Went Wrong")
            }
        })
}

//employer

export function registrationEmployer(email, password) {
    const url = baseUrl + "/registrationCompany";
    store.dispatch(ShowLoader())
    const postBody = {
        company_email: email,
        password: password
    }
    return axios.post(url, postBody)
        .then((res) => {
            store.dispatch(HideLoader())
            debugger;
            if (res.status === 200 || 201) {
                if (res.data['status'] === "fail") {
                    if (res.data['data']['keyPattern']['company_email'] === 1) {
                        ErrorToast("Email Already Exist")
                        return false;
                    }
                    else {
                        ErrorToast("Something Went Wrong1")
                        console.log(res)
                        return res;
                    }
                }
                else {
                    SuccessToast("Registration Success")
                    return true;
                }
            }
            else {
                ErrorToast("Something Went Wrong2")
                return false;
            }
        })
}

export function loginEmployer(email, password) {
    const url = baseUrl + "/EmployerLogin";
    store.dispatch(ShowLoader())
    const postBody = {
        company_email: email,
        password: password
    }
    return axios.post(url, postBody)
        .then((result) => {
            store.dispatch(HideLoader())
            if (result.status === 200) {
                setEmployerToken(result.data["EmployerToken"])
                setEmployerDetails(result.data.data)
                SuccessToast("Login Success")
                return result.data.data
            } else {
                ErrorToast("Invalid email address or password")
                return "something went wrong"
            }
        })
}

export function createJob(job_title, description, category, type, location, salary, dadeline, vacancy, urgent) {
    const url = baseUrl + "/CreateJob";
    const postBody = {
        job_title: job_title,
        job_description: description,
        company_id: employer_id,
        job_category_id: category,
        job_type: type,
        job_location_id: location,
        job_salary: salary,
        last_application_date: dadeline,
        no_of_vacancy: vacancy,
        isArgent: urgent
    }
    store.dispatch(ShowLoader())
    return axios.post(url, postBody, employer_axiosHeader)
        .then((result) => {
            store.dispatch(HideLoader())
            if (result.status === 200) {
                return true
            } else {
                ErrorToast("Something Went Wrong")
            }
        })
}

export function updateEmployerProfile(name, address, contact, website, summary, founded_date, company_size, categories, linkedin) {
    const url = baseUrl + "/CompanyProfileUpdate/" + employer_id;
    store.dispatch(ShowLoader())
    const postBody = {
        company_name: name,
        company_address: address,
        company_contact: contact,
        company_website: website,
        professional_summary: summary,
        founded_date: founded_date,
        company_size: company_size,
        categories: categories,
        linkedin: linkedin,
    }
    return axios.post(url, postBody, employer_axiosHeader)
        .then((result) => {
            store.dispatch(HideLoader())
            if (result.status === 200) {
                return true
            }
            else {
                return false
            }
        })
        // .catch((err) => {
        //     store.dispatch(HideLoader())
        //     if (err.response.status === 401) {
        //         // removeSession()
        //         window.location.href = "/employer_login"
        //     }
        // })
}
export function updateEmployerProfileImage(image) {
    const url = baseUrl + "/EmployerProfilePicUpdate/" + employer_id;
    store.dispatch(ShowLoader())
    const postBody = {
        profile_image: image
    }
    return axios.post(url, postBody, employer_axiosHeader)
        .then((result) => {
            store.dispatch(HideLoader())
            if (result.status === 200) {
                SuccessToast("Success")
                return result.data.data
            } else {
                return "something went wrong"
            }
        }).catch((err) => {
            store.dispatch(HideLoader())
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/login"
            }
        })
}

export function readEmployerProfile() {
    const url = baseUrl + "/readCompanyProfile/" + employer_id;
    store.dispatch(ShowLoader())
    return axios.get(url)
        .then((result) => {
            store.dispatch(HideLoader())
            if (result.status === 200) {
                return result.data.data[0]
            } else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        }).catch((err) => {
            store.dispatch(HideLoader())
            if (err.response.status === 401) {
                window.location.href = "/employer_login"
            }
        })
}

export function readJobsByCompanyId() {
    const url = baseUrl + "/readJobsByCompanyId/" + employer_id;
    store.dispatch(ShowLoader())
    return axios.get(url, employer_axiosHeader)
        .then((result) => {
            store.dispatch(HideLoader())
            if (result.status === 200) {
                return result.data

            } else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        }).catch((err) => {
            store.dispatch(HideLoader())
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/employer_login"
            }
        })
}

export function readEmployerJobDetails() {
    const url = baseUrl + "/readEmployerJobDetails/" + employer_id;
    store.dispatch(ShowLoader())
    return axios.get(url, employer_axiosHeader)
        .then((result) => {
            store.dispatch(HideLoader())
            if (result.status === 200) {
                return result.data

            } else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        }).catch((err) => {
            store.dispatch(HideLoader())
            if (err.response.status === 401) {
                removeSession()
                window.location.href = "/employer_login"
            }
        })
}






//bussiness table management
export async function GetProductList(pageNo, perPage, searchKeyword) {
    store.dispatch(ShowLoader())
    let URL = baseUrl + "/ProductList/" + pageNo + "/" + perPage + "/" + searchKeyword;
    try {
        const result = await axios.get(URL)

        store.dispatch(HideLoader())
        if (result.status === 200 && result.data['status'] === "success") {
            if (result.data['data'][0]['Rows'].length > 0) {
                store.dispatch(SetALLProduct(result.data['data'][0]['Rows']))
                store.dispatch(SetTotal(result.data['data'][0]['Total'][0]['count']))
            } else {
                store.dispatch(SetALLProduct([]))
                store.dispatch(SetTotal(0))
                ErrorToast("No Data Found")
            }
        } else {
            ErrorToast("Something Went Wrong")
        }
    }

    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
    }
}






export function registrationRequest(email, firstName, lastName, mobile, password, photo) {
    store.dispatch(ShowLoader())
    const url = baseUrl + "/registration";
    const postBody = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        mobile: mobile,
        password: password,
        photo: photo
    }
    return axios.post(url, postBody)
        .then((res) => {
            store.dispatch(HideLoader())
            if (res.status === 200) {
                if (res.data['status'] === "fail") {
                    if (res.data['data']['keyPattern']['email'] === 1) {
                        ErrorToast("Email Already Exist")
                        return false;
                    }
                    else {
                        ErrorToast("Something Went Wrong")
                        return false;
                    }
                }
                else {
                    SuccessToast("Registration Success")
                    return true;
                }
            }
            else {
                ErrorToast("Something Went Wrong")
                return false;
            }
        }).catch((err) => {
            store.dispatch(HideLoader())
            ErrorToast("Something Went Wrong")
            return false;
        })
}











//recover passworad steap 1
export function RecoverVerifyEmailRequest(email) {
    debugger;
    store.dispatch(ShowLoader())
    let url = baseUrl + "/RecoverVerifyEmail/" + email;
    return axios.get(url).then((res) => {
        store.dispatch(HideLoader())
        if (res.status === 200) {
            return true;
        }
        else {
            ErrorToast("Something Went Wrong")
        }
    }).catch((err) => {
        ErrorToast("Something Went Wrong")
        debugger;
        store.dispatch(HideLoader())
    });
}

//recover verify OTP 2
export function RecoverVerifyOTPRequest(email, OTP) {
    store.dispatch(ShowLoader())
    let url = baseUrl + "/RecoverVerifyEmail/" + email + "/" + OTP;
    return axios.get(url).then((res) => {
        store.dispatch(HideLoader())
        if (res.status === 200) {
            return true;
        }
        else {
            ErrorToast("Something Went Wrong")
        }
    }).catch((err) => {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
    });
}

//recover password steap 3, reset password
export function RecoverRestePassRequest(email, OTP, password) {
    store.dispatch(ShowLoader());
    let url = baseUrl + "/RecoverRestePass/" + email + "/" + OTP;
    const postBody = {
        email: email,
        OTP: OTP,
        password: password
    }
    return axios.post(url, postBody).then((res) => {
        store.dispatch(HideLoader())
        if (res.status === 200) {
            return true;
        } else {
            return false;
        }
    })
        .catch((err) => {
            store.dispatch(HideLoader())
            return false;
        })
}