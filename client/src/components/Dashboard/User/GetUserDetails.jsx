import React from 'react'
import { useSelector } from 'react-redux';

const GetUserDetails = () => {

  const { user } = useSelector((state) => state.user);

  if (!user) {
    return <p>Loading...</p>; // or handle the case when user is not available
  }
  const { _id, firstName, lastName, email, isDoctor, isBlock, appointments, notifications, isAdmin } = user;

  return (
    <>
      <h1>Dashboard</h1>

      <div className="text-xl">
        hello {user?.name} and your mail is {user?.email}
        {/* <button onClick={btnclick}>hey</button> */}
        <p>User ID: {_id}</p>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Is Doctor: {isDoctor ? 'Yes' : 'No'}</p>
        <p>Is Admin: {isAdmin ? 'Yes' : 'No'}</p>
        <p>Is Blocked: {isBlock ? 'Yes' : 'No'}</p>
        <p>Appointments: {appointments.join(', ')}</p>
        <p>Notifications: {notifications.join(', ')}</p>
      </div>
    </>
  )
}

export default GetUserDetails
