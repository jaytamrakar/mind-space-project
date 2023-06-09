import './App.css';
import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import UserLayout from './layout/UserLayout';
import DoctorLayout from './layout/DoctorLayout';
import AdminLayout from './layout/AdminLayout';
import NotFound from './pages/NotFound/NotFound';
import Doctors from './pages/Doctors/Doctors';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import TermsAndConditions from './pages/TermsAndConditions/TermAndConditions';
import { useSelector } from 'react-redux';
import Spinner from './components/spinner';
import ProtectedRoute from './components/ProtectedRoute';
// import PublicRoute from './components/PublicRoute';

// Hello I am learing git 

import OTPVerification from './pages/OTPVerification';
import DashboardLayout from './layout/DashboardLayout';
import Appointments from './components/Dashboard/User/Appointments';
import ApplyForDoctor from './components/Dashboard/User/ApplyForDoctor';
import Schedule from './components/Dashboard/User/Schedule';
import Settings from './components/Dashboard/User/Settings';
import Profile from './components/Dashboard/User/Profile';
import GetUserDetails from './components/Dashboard/User/GetUserDetails';
import AllDoctorsData from './components/Dashboard/Admin/AllDoctorsData';
import AllUsersData from './components/Dashboard/Admin/AllUsersData';
import DoctorInfo from './components/DoctorInfo';
import DoctorProfile from './components/DoctorsPage/DoctorProfile';
import ViewDoctorProfile from './components/DoctorsPage/ViewDoctorProfile';
import CheckAvailability from './pages/BookingPage/CheckAvalibility';
import FakeAvl from './pages/BookingPage/FakeAvl';
import PendingRequest from './components/Dashboard/Admin/PendingRequest';
import BlockedUsers from './components/Dashboard/Admin/BlockedUsers';
import BlockedDoctors from './components/Dashboard/Admin/BlockedDoctors';

// side bar Pages

function App() {
  const { loading } = useSelector(state => state.alerts);
  // const { user } =  useSelector((state) => state.user !== null);
  // if (!user) {
  //   return <p>Loading...</p>; // or handle the case when user is not available
  // }
  // const { isDoctor, isAdmin} = user;
  return (
    <>
      {loading && <Spinner />}
      <Routes>
        {/* //---------------- All users Routes----------------------// */}


        <Route path="/" element={<UserLayout />} >

          <Route index
            element={
              // <PublicRoute>
              <Home />
              // </PublicRoute>
            } />
          <Route path="/about"
            element={
              // <PublicRoute>
              <AboutUs />
              // </PublicRoute>
            } />
          <Route path="/doctors"
            element={
              // <PublicRoute>
              <Doctors />
              // </PublicRoute>
            } />

          <Route path='doctors/viewprofile/:doctorId'
            element={
              <ViewDoctorProfile  />
            } />
          <Route path='doctors/viewprofile/:doctorId/check-availability'
            element={
              <CheckAvailability  />
            } />
          <Route path='doctors/viewprofile/:doctorId/check-fake-availability'
            element={
              <FakeAvl  />
            } />

          <Route path="/login"
            element={
              // <PublicRoute>
              <Login />
              // </PublicRoute>
            } />
          <Route path="/signup"
            element={
              // <PublicRoute>
              <Signup />
              // </PublicRoute>
            } />
          <Route path="/protected-dashboard"
            element={
              <ProtectedRoute >
                <GetUserDetails />
              </ProtectedRoute>
            } />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
          <Route path='/termsandconditions' element={<TermsAndConditions />} />
          <Route path='/otpverification' element={<OTPVerification />} />


          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } />
            <Route path="apply"
              element={
                <ProtectedRoute>
                  <ApplyForDoctor />
                </ProtectedRoute>
              } />
            <Route path="appointments"
              element={
                <ProtectedRoute>
                  <Appointments />
                </ProtectedRoute>
              } />
            <Route path="schedule"
              element={
                <ProtectedRoute>
                  <Schedule />
                </ProtectedRoute>
              } />
            <Route path="settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              } />
            <Route path="get-user"
              element={
                <ProtectedRoute>
                  <GetUserDetails />
                </ProtectedRoute>
              } />
            <Route path="admin/all-users"
              element={
                <ProtectedRoute>
                  <AllUsersData />
                </ProtectedRoute>
              } />
            <Route path="admin/all-doctors"
              element={
                <ProtectedRoute>
                  <AllDoctorsData />
                </ProtectedRoute>
              } />
            <Route path="admin/pending-request"
              element={
                <ProtectedRoute>
                  <PendingRequest/>
                </ProtectedRoute>
              } />
            <Route path="admin/blocked-users"
              element={
                <ProtectedRoute>
                  <BlockedUsers/>
                </ProtectedRoute>
              } />
            <Route path="admin/blocked-doctors"
              element={
                <ProtectedRoute>
                  <BlockedDoctors/>
                </ProtectedRoute>
              } />





            <Route path="*" element={<NotFound />} />
          </Route>

        </Route>


        {/* //-----------------ALl Doctors Routes-------------------// */}
        <Route path="doctor" element={<DoctorLayout />} >
          <Route index element={
            <DoctorInfo />
          } />
        </Route>


        {/* //-----------------ALl Admin Routes-------------------// */}

        <Route path="admin" element={<AdminLayout />}>

        </Route>


        {/* //----------------Page Not Found Route-------------------// */}
        <Route path="*" element={<NotFound />} >

        </Route>
      </Routes>


    </>
  );
}

export default App;
