import React from "react";

const Card = ({img,name,qualification,specialization,experience,btn1 }) => {
    return (
    <>
      {/*  Main container to wrap doctorCard */}
      <div className="flex flex-row max-w-lg bg-white rounded-lg flex-wrap m-auto justify-center max-h-screen shadow-xl">
        {/* Div for upper Part */}
        <div className="flex ">
          {/* Div for image and Name of Doctor */}
          <div>
            <div className="photo-wrapper  p-5">
              <img
                className="w-50 h-50 border-4  rounded-full my-4 md:p-4 "
                src={img}
                alt="Image"
              />
              <div className="p-3">
                <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                  {name}
                </h3>
                <p className="text-center text-sm text-gray-500 font-medium leading-6">
                  {qualification}
                </p>
              </div>
            </div>
          </div>

          {/* Div for rest of information about doctors */}
          <div className="flex flex-col justify-center p-3">
            <div>
              <h3 className="text-black font-medium ">Specialization</h3>
              <p className="p-2 text-base">{specialization}</p>
            </div>
            <div>
              <h3 className="text-black font-medium ">Experience</h3>
              <p className="p-2 text-base">{experience}</p>
            </div>

            {/* Div for lower part (Button) */}
            <div className="flex flex-row justify-end items-center h-full w-fit">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                View Profile
              </button>

              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
