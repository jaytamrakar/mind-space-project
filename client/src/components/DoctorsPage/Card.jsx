import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ img, name, qualification, specialization, experience, doctorId }) => {

  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/doctors/viewprofile/${doctorId}`);
  };

  const handleBookSession = () => {
    navigate("/doctors/viewprofile")
  }


  return (
    <>
      {/*  Main container to wrap doctorCard */}
      <div className="flex flex-row max-w-md bg-white rounded-lg flex-wrap m-5 justify-center max-h-screen shadow-lg ">
        {/* Div for upper Part */}
        <div className="flex ">
          {/* Div for image and Name of Doctor */}

            <div className="photo-wrapper  p-2">
              <img
                className="w-50 h-50 border-4  rounded-full my-2 md:p-2 "
                src={img}
                alt="The Doctor"
              />
              <div className="p-3">
                <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                  Dr. {name}
                </h3>
                <p className="text-center text-sm text-gray-500 font-medium leading-6">
                  {qualification}
                </p>
              </div>
            </div>
        

          {/* Div for rest of information about doctors */}
          <div className="flex flex-col justify-center p-3">
            <div>
              <h3 className="text-black font-semibold text-lg ">Specialization</h3>
              <p className="p-2 text-base">{specialization}</p>
            </div>
            <div>
              <h3 className="text-black font-semibold text-lg">Experience</h3>
              <p className="p-2 text-base">{experience} Years</p>
            </div>

            {/* Div for lower part (Button) */}
            <div className="flex flex-row justify-end items-center h-full w-fit">
              <button onClick={handleViewProfile} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 min-w-max">
                View Profile
              </button>

              <button onClick={handleBookSession} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded min-w-max">
                Book Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
