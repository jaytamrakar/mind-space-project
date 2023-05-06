import React from 'react'
import Navbar from '../components/LandingPage/Navbar'
import Footer from '../components/LandingPage/Footer'

import { Outlet } from 'react-router-dom'
const UserLayout = (props) => {
  return (
    <>
      <Navbar />
        <Outlet />
      <Footer />
    </>
  )
}

export default UserLayout
