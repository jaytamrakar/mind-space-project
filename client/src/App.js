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
import Dashboard from './Dashboard/Dashboard';
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
                <Dashboard />
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
            <Route path="*" element={<NotFound />} />
          </Route>

        </Route>


        {/* //-----------------ALl Doctors Routes-------------------// */}
        <Route path="doctor" element={<DoctorLayout />} >

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
