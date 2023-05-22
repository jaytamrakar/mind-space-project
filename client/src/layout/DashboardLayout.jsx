import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Dashboard/Sidebar'


const DashboardLayout = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="h-screen flex-1">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default DashboardLayout
