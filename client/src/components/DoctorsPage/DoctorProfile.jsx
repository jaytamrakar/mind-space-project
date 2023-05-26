import React from "react";
import { TiTick } from 'react-icons/ti';
import { SlGraduation, SlCamrecorder } from 'react-icons/sl';
import { GrChat, GrLanguage, GrUserExpert } from 'react-icons/gr';
import { BsFillTelephoneFill, BsFillStarFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";


const DoctorProfile = ({ fullName, email, qualification, Specialization, languages, expertise, nextAvailable, about }) => {
    const navigate = useNavigate();

    const handleBookSession = () => {
        navigate('check-availability');
    };
    const handleBookFakeSession = () => {
        navigate('check-fake-availability');
    };
    return (
        <>
            <div className="flex flex-col md:flex-row w-full h-screen  m-2">
                {/* left Div */}
                <div className="flex flex-col  m-2 w-1/4">
                    <div className=" bg-slate-300 border-4 rounded-xl shadow-xl">
                        <div className="flex justify-center">
                            <img
                                className="w-50 h-50 border-4  rounded-full my-4 md:p-4 "
                                src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                                alt="Doctor's Profile"
                            />
                        </div>
                        <div className="text-center m-2 p-4">
                            <h3 className="text-xl font-bold">Dr. {fullName}</h3>
                            <p className="p-4 font-semibold">{qualification}</p>
                            <p className="font-medium">{email}</p>

                        </div>
                        <div className="flex justify-center flex-wrap space-x-8 p-5">
                            <SlCamrecorder size={25} />
                            <GrChat size={25} />
                            <BsFillTelephoneFill size={25} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-end items-center ">
                        <button onClick={handleBookSession} className="bg-blue-700 text-white hover:bg-indigo-400 font-bold py-2 px-4 mt-3 rounded">
                            Book Session
                        </button>
                    </div>
                </div>

                {/* Right Div */}
                <div className="flex flex-col  my-16 w-3/4">
                    <div className="flex  flex-wrap ">
                        {/* Div to wrap 3 container of left */}

                        <div className="border-4 border-red-200 w-1/2">
                            <div className="flex  space-x-4">
                                <SlGraduation size={25} />
                                <div>
                                    <h1 className="text-xl font-bold">Qualification</h1>
                                    <p className="my-2 py-4">{qualification}</p>
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <BsFillStarFill size={25} />
                                <div className="max-w-md">
                                    <h1 className="text-xl font-bold">Specialization</h1>
                                    <p className="my-2 py-4">{Specialization}</p>
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <GrLanguage size={25} />
                                <div className="min-w-max max-w-md">
                                    <h1 className="text-xl font-bold">Languages Spoken</h1>
                                    <p className="my-2 py-4">{languages}</p>
                                </div>
                            </div>

                        </div>

                        {/* Div to wrap other containers of right */}
                        <div className="border-4 border-blue-200 w-1/2">


                            <div className="flex space-x-4">
                                <GrUserExpert size={25} />
                                <div className="max-w-">
                                    <h1 className="text-xl font-bold">Expertise</h1>
                                    <p className="my-2 py-4">{expertise}</p>
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <TiTick size={25} />
                                <div className="min-w-md">
                                    <h1 className="text-xl font-bold">Next Available at</h1>
                                    <p className="my-2 py-4">{nextAvailable}</p>
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <GrLanguage size={25} />
                                <div className=" max-w-md">
                                    <h1 className="text-xl font-bold">Email Id</h1>
                                    <p className="my-2 py-4">{email}</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="m-2">
                            <h1 className="text-xl font-bold">About</h1>
                            <p className=" h-full py-2">{about}</p>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <button onClick={handleBookFakeSession} className="bg-blue-700 text-white hover:bg-indigo-400 font-bold py-2 px-4 mt-3 rounded">
                            Book Session
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DoctorProfile;
