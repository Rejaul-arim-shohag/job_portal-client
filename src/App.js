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

import FullScreenLoader from "./components/MasterLayout/FullScreenLoader";
import CandidatePrivate from "./components/PrivateRoute/CandidatePrivate";
import CandidateJobAppliedPage from "./Pages/CandidatePages/CandidateJobAppliedPage";
import EmployerLoginPage from "./Pages/EmployerPages/EmployerLoginPage";
import EmployerRegistrationPage from "./Pages/EmployerPages/EmployerRegistrationPage";
import EmployerPrivate from "./components/PrivateRoute/EmployerPrivate";
import SingleJobPage from "./Pages/SingleJobPage";
import ApplyNowPage from "./Pages/CandidatePages/ApplyNowPage";

function App() {


  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/JobList" element={<JobListPage />} />
          <Route path="/Job/:id" element={<SingleJobPage />} />

          
          //candidate
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/candidate_dashboard"
            element={
              <CandidatePrivate>
                <CandidateDashboardPage />
              </CandidatePrivate>
            }
          />
          <Route
            path="/apply/:job_id"
            element={
              <CandidatePrivate>
                <ApplyNowPage />
              </CandidatePrivate>
            }
          />

          <Route
            path="/candidate_dashboard/profile"
            element={
              <CandidatePrivate>
                <CandidateProfilePage />
              </CandidatePrivate>
            }
          />
          <Route
            path="/candidate_dashboard/my_applied"
            element={
              <CandidatePrivate>
                <CandidateJobAppliedPage />
              </CandidatePrivate>
            }
          />
          {/* <Route path="/candidate_dashboard" element={<CandidateDashboardPage />} /> */}
          {/* <Route path="/candidate_dashboard/profile" element={<CandidateProfilePage />} /> */}


          // employer
          <Route path="/employer_login" element={<EmployerLoginPage />} />
          <Route path="/employer_registration" element={<EmployerRegistrationPage />} />

          <Route
            path="/employer_dashboard"
            element={
              <EmployerPrivate>
                <EmployerDashboardPage />
              </EmployerPrivate>
            }
          />
          <Route
            path="/employer_dashboard/submit_job"
            element={
              <EmployerPrivate>
                <SubmitJobPage />
              </EmployerPrivate>
            }
          />
          <Route
            path="/employer_dashboard/employer_profile"
            element={
              <EmployerPrivate>
                <EmployerProfilePage />
              </EmployerPrivate>
            }
          />

          {/* <Route path="/employer_dashboard" element={<EmployerDashboardPage />} />
          <Route path="/employer_dashboard/submit_job" element={<SubmitJobPage />} />
          <Route path="/employer_dashboard/employer_profile" element={<EmployerProfilePage />} /> */}


        </Routes>

      </BrowserRouter>
      <FullScreenLoader />
    </Fragment>
  )

}

export default App;
