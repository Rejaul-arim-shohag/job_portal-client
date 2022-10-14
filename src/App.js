import { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CandidateDashboardPage from "./Pages/CandidatePages/CandidateDashboardPage";
import CandidateProfilePage from "./Pages/CandidatePages/CandidateProfilePage";
import EmployerDashboardPage from "./Pages/EmployerPages/EmployerDashboardPage";
import EmployerProfilePage from "./Pages/EmployerPages/EmployerProfilePage";
import SubmitJobPage from "./Pages/EmployerPages/SubmitJobPage";
import HomePage from "./Pages/HomePage";
import JobListPage from "./Pages/JobListPage";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";


function App() {


  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/JobList" element={<JobListPage />} />

          //candidate dashboard
          <Route path="/candidate_dashboard" element={<CandidateDashboardPage />} />
          <Route path="/candidate_dashboard/profile" element={<CandidateProfilePage />} />


          // employer
          <Route path="/employer_dashboard" element={<EmployerDashboardPage />} />
          <Route path="/employer_dashboard/submit_job" element={<SubmitJobPage />} />
          <Route path="/employer_dashboard/employer_profile" element={<EmployerProfilePage />} />

                   
        </Routes>
      </BrowserRouter>
    </Fragment>
  )

}

export default App;
