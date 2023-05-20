import React from 'react'
import DoctorInfo from '../../components/DoctorInfo'

import CheckAvalibility from '../BookingPage/CheckAvalibility'
import FakeAvl from '../BookingPage/FakeAvl'
import TimeSlotForm from '../BookingPage/TimeSlotForm'

import ApplyForDoctor from '../ApplyForDoctor/ApplyForDoctor'
import UserDashboard from '../../components/Dashboard/UserDashboard'
import OTPVerification from '../OTPVerification'
const AboutUs = () => {
  return (
    // <div>About Us Page</div>
    <>

      <DoctorInfo />
      <CheckAvalibility />
      <FakeAvl />
      <TimeSlotForm />
      <UserDashboard />
      <ApplyForDoctor />
      <OTPVerification />


    </>

  )
}

export default AboutUs