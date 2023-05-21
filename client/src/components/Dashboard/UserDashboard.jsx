import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const UserDashboard = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  )
}

export default UserDashboard