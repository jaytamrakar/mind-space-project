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
// Hello I am learing git 
function App() {
  return (
    <>

      <Routes>
        {/* //---------------- All users Routes----------------------// */}


        <Route path="/" element={<UserLayout />} >
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path = "/doctors" element = {<Doctors />} />
          <Route path = "/login" element = { <Login />} />
          <Route path = "/signup" element = { <Signup />} />
          <Route path = '/forgetpassword' element = { <ForgetPassword />} />
          <Route path = '/termsandconditions' element = { <TermsAndConditions/>} />
          


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
