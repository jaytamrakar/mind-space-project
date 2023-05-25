import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import data from "./Data";
const AllCards = () => {

  const [doctors, setDoctors] = useState([]);
  const [isError, setIsError] = useState("");
  const getAllDoctors = async () => {
    try {
      const response = await axios.get('api/doctor/all');
      const { success, data } = response.data;
      console.log(response);
  
      if (success) {
        return setDoctors(response.data.data);

      } else {
        throw new Error('Failed to get doctors');
      }
    } catch (error) {
        return setIsError(error.message);
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
            img={item.img} 
            name={item.firstName.concat(" ",item.lastName)}
            qualification={item.qualification}
            specialization={item.specializations}
            experience={item.experience}
          />
        ))}
      </div>
    </>
  );
};

export default AllCards;
