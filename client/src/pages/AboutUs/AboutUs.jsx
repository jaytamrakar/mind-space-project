import React from 'react'
import DoctorInfo from '../../components/DoctorInfo'
import CheckAvalibility from '../BookingPage/CheckAvalibility'
import FakeAvl from '../BookingPage/FakeAvl'
import TimeSlotForm from '../BookingPage/TimeSlotForm'
import ApplyForDoctor from '../ApplyForDoctor/ApplyForDoctor'
import OTPVerification from '../OTPVerification'
import Main from '../../components/Webrtc/Main.jsx'
import Lobby from '../../components/Webrtc/Lobby'
import ProfileSection from '../../components/AdminPanel/ProfileSection'

import FeedbackForm from '../../components/Feedback/FeedbackForm'
import UserReview from '../../components/Feedback/UserReview'
const AboutUs = () => {
  return (
    
    <>


    {/* This all pages was included to test at development phase. We will fix it at deployment phase */}
    {/* <ProfileSection/> */}
       

       <DoctorInfo />
      <CheckAvalibility />
      <FakeAvl />
      <TimeSlotForm /> 

      <ApplyForDoctor />
      <OTPVerification /> 
     <ApplyForDoctor/> 
      <Main/> 
      {/* This all pages was included to test at development phase. We will fix it at deployment phase */}

{/* <DoctorInfo />
      <CheckAvalibility />
      <FakeAvl />
      <TimeSlotForm />
      <ApplyForDoctor />
      <OTPVerification />
      <ApplyForDoctor />
      <Main /> */}

      {/* <ApplyForDoctor />
      {/* <ApplyForDoctor/> */}
      {/* <Main/> */}
      {/* <Lobby/> */}

      <FeedbackForm/>
      <UserReview/>

    </>

  )
}

export default AboutUs