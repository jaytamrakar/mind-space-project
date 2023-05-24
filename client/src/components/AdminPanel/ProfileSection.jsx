import React from "react";

const ProfileSection = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="w-2/3 max-w-3xl bg-white rounded-lg shadow-md p-8 flex">
      <div className="w-1/3">
        <div className="w-40 h-40 rounded-full overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
            alt="Profile"
          />
        </div>
      </div>
      <div className="w-2/3 px-8">
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Personal Information</h3>
          <div className="flex items-center mb-2">
            <svg
              className="w-5 h-5 mr-2 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <p className="text-gray-700">
              <span className="font-bold">First Name:</span> First Name
            </p>
          </div>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <p className="text-gray-700">
              <span className="font-bold">Last Name:</span> Last Name
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>
          <div className="flex items-center mb-2">
            <svg
              className="w-5 h-5 mr-2 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <p className="text-gray-700">
              <span className="font-bold">Email:</span> example@example.com
            </p>
          </div>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V4H4v8c0 6 8 10 8 10z"></path>
            </svg>
            <p className="text-gray-700">
              <span className="font-bold">Phone Number:</span> 123-456-7890
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProfileSection;
