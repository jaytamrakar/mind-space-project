import React, { useEffect } from 'react'
import axios from 'axios';

const Dashboard = () => {

    const getUserData = async () => {
        try {
          const res = await axios.get(
            "http://localhost:8080/api/user/getUserData",{},
    
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );
          if (res.data.success) {
            console.log(res);
            // setDoctors(res.data.data);
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getUserData();
      }, []);

  return (
    <>
        <h1>Dashboard</h1>
    </>
  )
}

export default Dashboard
