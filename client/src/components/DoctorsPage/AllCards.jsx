import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
// import data from "./Data";
import { useDispatch } from "react-redux";
import { showLoading ,hideLoading } from "../../redux/features/alertSlice.js";
const AllCards = () => {
  const dispatch = useDispatch();

  const [doctors, setDoctors] = useState([]);
  // const [isError, setIsError] = useState("");
  const getAllDoctors = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get('api/doctor/all');
      dispatch(hideLoading());
      const { success, data } = response.data;
      console.log(data);  
  
      if (success) {
        return setDoctors(response.data.data);
      } else {
        throw new Error('Failed to get doctors');
      }
    } catch (error) {
      dispatch(hideLoading());
      console.error(error);
        // return setIsError(error.message);
    }
  };

  useEffect(() => {
    getAllDoctors();
    (doctors ? console.log(doctors) : console.log("error"))
    
  }, []);
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {doctors && doctors.map((item) => (
          <Card
          key={item._id}
            img={item.displayPicture} 
            name={item.firstName.concat(" ",item.lastName)}
            qualification={item.qualification}
            specialization={item.Specialization}
            experience={item.experience}
            doctorId={item.doctorId}
          />
        ))}
      </div>
    </>
  );
};

export default AllCards;
