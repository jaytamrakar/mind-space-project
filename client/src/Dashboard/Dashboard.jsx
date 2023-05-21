import React from 'react'
// import axios from 'axios';
import { useSelector } from 'react-redux';

const Dashboard = () => {

  const { user } = useSelector((state) => state.user);

  // const getUserData = async () => {
  //     try {
  //       const res = await axios.post(
  //         "http://localhost:8080/api/user/getUserData",{},

  //         {
  //           headers: {
  //             Authorization: "Bearer " + localStorage.getItem("token"),
  //           },
  //         }
  //       );
  //       if (res.data.success) {
  //         console.log(res);
  //         return res.data;
  //         // setDoctors(res.data.data);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   // useEffect(() => {
  //   //   getUserData();
  //   // }, []);

  //   const btnclick = () => {
  //     const data = getUserData();
  //     return data;
  //   }

  if (!user) {
    return <p>Loading...</p>; // or handle the case when user is not available
  }
  const { _id, name, email, isDoctor, isBlock, appointments, notifications , isAdmin} = user;

  return (
    <>
      <h1>Dashboard</h1>

      <div className="text-xl">
        hello {user?.name} and your mail is {user?.email}
        {/* <button onClick={btnclick}>hey</button> */}



        <p>User ID: {_id}</p>
        <p>Name: {name}</p>
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

export default Dashboard
