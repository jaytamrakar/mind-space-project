import React from "react";
import { SlGraduation } from "react-icons/sl";
import { TiTick } from "react-icons/ti";
import { SlCamrecorder } from "react-icons/sl";
import { GrChat } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import { GrUserExpert } from "react-icons/gr";

const DoctorInfo = () => {
  return (
    <>
      <div className="flex max-w-fit h-screen  m-2">
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
              <h3 className="text-xl font-medium">Janhavi Melinkeri</h3>
              <p className="p-4">
                MA in Clinical Psychology & MSc. in Applied Child Psychology
              </p>
            </div>
            <div className="flex justify-center flex-wrap space-x-8 p-5">
              <SlCamrecorder />
              <GrChat />
              <BsFillTelephoneFill />
            </div>
          </div>
          <div className="flex flex-col justify-end items-center ">
            <button className="bg-blue-700 text-white hover:bg-indigo-400 font-bold py-2 px-4 mt-3 rounded">
              Book Session
            </button>
          </div>
        </div>

        {/* Right Div */}
        <div className="flex flex-col   my-16 w-3/4">
          <div className="flex flex-row justify-evenly flex-wrap ">
            {/* Div to wrap 3 container of left */}

            <div>
              <div className="flex  space-x-4">
                <SlGraduation />
                <div>
                  <h1 className="text-xl font-bold">Qualification</h1>
                  <p className="my-2 py-4">
                    MA In Clinical Psychology & MSc. In Applied Child Psychology
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <BsFillStarFill />
                <div className="  max-w-md">
                  <h1 className="text-xl font-bold">Specialization</h1>
                  <p className="my-2 py-4">
                    MA In Clinical Psychology & MSc. In Applied Child
                    PsychAnxiety, ADHD (Child), ADHD (Adult), Autism Spectrum
                    Disorders, Child Counseling, Stress, Career Counselling,
                    Sleep Issues, Anger, Depression, Grief & Lossology
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <GrLanguage />
                <div className="  min-w-max max-w-md">
                  <h1 className="text-xl font-bold">Languages Spoken</h1>
                  <p className="my-2 py-4">English, Marathi, Hindi</p>
                </div>
              </div>
            </div>

            {/* Div to wrap other containers of right */}
            <div>

            
              <div className="flex space-x-4">
                <GrUserExpert />
                <div className="max-w-md">
                  <h1 className="text-xl font-bold">Expertise</h1>
                  <p className="my-2 py-4">
                    Client Centred, Mindfulness Based Therapies, Play And Art
                    Therapy For Kids, Behavioural Modification For Kids,
                    Psychodynamic
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <TiTick />
                <div className="  min-w-md">
                  <h1 className="text-xl font-bold">Next Available at</h1>
                  <p className="my-2 py-4">May 7, 2023 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="m-2">
              <h1 className="text-xl font-bold">About</h1>
              <p className="flex flex-col justify-end items-center h-full py-2">
                Janhavi is a passionate mental health professional with 7+ years
                of experience working with children, adolescents, young adults
                and the adult population. She aims to provide a safe,
                non-judgmental and empathetic space which will facilitate
                change, growth and healing in her clients. She believes that
                empowering clients with the right tools and strategies can
                enable them to overcomes obstacles, reach their goals and become
                a healthier, more confident version of themselves. She offers a
                holistic approach and focuses on client-centered therapy where
                the client and psychologist work as partners towards reaching
                the goal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorInfo;
