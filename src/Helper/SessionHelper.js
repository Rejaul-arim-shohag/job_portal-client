class SessionHelper{
    setCandidateToken(token){
        localStorage.setItem("candidateToken",token)
    }
    getCandidateToken(){
        return localStorage.getItem("candidateToken")
    }
    setCandidateDetails(CandidateDetails){
        localStorage.setItem("CandidateDetails",JSON.stringify(CandidateDetails))
    }
    getCandidateDetails(){
       return JSON.parse(localStorage.getItem("CandidateDetails"))
    }
    setCandidateEmail(email){
        localStorage.setItem("candidate",email)
    }
    getCandidateEmailEmail(){
        return localStorage.getItem("candidate")
    }

//employer
    setEmployerToken(token){
        localStorage.setItem("employerToken",token)
    }
    setEmployerDetails(employerDetails){
        localStorage.setItem("employerDetails",JSON.stringify(employerDetails))
    }
    getEmployerToken(){
        return localStorage.getItem("employerToken")
    }
    getEmployerDetails(){
        return JSON.parse(localStorage.getItem("employerDetails"))
     }

    setOTP(OTP){
        localStorage.setItem("OTP",OTP)
    }
    getOTP(){
        return localStorage.getItem("OTP")
    }
    setUserDetails(userDetails){
        localStorage.setItem("userDetails",JSON.stringify(userDetails))
    }
    getUserDetails(){
       return JSON.parse(localStorage.getItem("userDetails"))
    }
    removeSession(){
        localStorage.clear();
        window.location.href="/"
    }
}
export const {
    setEmployerToken,setEmployerDetails,getEmployerToken,getEmployerDetails,
    setCandidateToken, getCandidateToken, setCandidateDetails,getCandidateDetails,
     removeSession,setCandidateEmail,getCandidateEmailEmail,setOTP,getOTP
}=new SessionHelper;