import React from 'react'
import DoctorInfo from '../../components/DoctorInfo'
import CheckAvalibility from '../BookingPage/CheckAvalibility'
import FakeAvl from '../BookingPage/FakeAvl'
import TimeSlotForm from '../BookingPage/TimeSlotForm'

const AboutUs = () => {
  return (
    // <div>About Us Page</div>
    <>

    <DoctorInfo/>
    <CheckAvalibility />
    <FakeAvl />
    <TimeSlotForm />
    </>
  )
}

export default AboutUs