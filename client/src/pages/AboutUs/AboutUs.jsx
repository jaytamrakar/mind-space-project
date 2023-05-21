import React from 'react'
import DoctorInfo from '../../components/DoctorInfo'

import CheckAvalibility from '../BookingPage/CheckAvalibility'
import FakeAvl from '../BookingPage/FakeAvl'
import TimeSlotForm from '../BookingPage/TimeSlotForm'

import ApplyForDoctor from '../ApplyForDoctor/ApplyForDoctor'
import UserDashboard from '../../components/Dashboard/UserDashboard'
import OTPVerification from '../OTPVerification'
import Main from '../../components/Webrtc/Main.jsx'
import Lobby from '../../components/Webrtc/Lobby'
const AboutUs = () => {
  return (
    // <div>About Us Page</div>
    <>

      {/* This all pages was included to test at development phase. We will fix it at deployment phase */}

      <DoctorInfo />
      <CheckAvalibility />
      <FakeAvl />
      <TimeSlotForm />
      <UserDashboard />
      <ApplyForDoctor />
      <OTPVerification />
      <ApplyForDoctor />
      <Main />
      {/* <ApplyForDoctor />
      {/* <ApplyForDoctor/> */}
      {/* <Main/> */}
      {/* <Lobby/> */}



    </>

  )
}

export default AboutUs