import React from "react";

const DoctorInfo = () => {
  return (
    <>
      <div className="flex w-screen h-screen border-4 border-red-600 m-2">
        {/* left Div */}
        <div className="flex flex-col border-4 border-yellow-600 m-2 w-1/4">
          <div>
            <div className="photo-wrapper ">
              <img
                className="w-50 h-50 border-4  rounded-full my-4 md:p-4 "
                src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                alt="Photo"
              />
            </div>
            <div className="text-center m-2 p-4 border-4 border-pink-700 m-2">
              <h3 className="text-xl font-medium">Janhavi Melinkeri</h3>
              <p className="p-4">
                MA in Clinical Psychology & MSc. in Applied Child Psychology
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-end items-center ">
            <button className="bg-blue-700 text-white hover:bg-indigo-400 font-bold py-2 px-4 mt-3 rounded">Book Session</button>
          </div>
        </div>

        {/* Right Div */}
        <div className="flex flex-col  border-4 border-blue-600 m-2 w-3/4">
          <div className="flex flex-row justify-evenly flex-wrap border-2  border-amber-950 ">
            <div className="border-4 border-lime-600 m-2 p-4 ">
              <h1 className="text-xl font-bold">Qualification</h1>
              <p className="my-2 py-4">
                MA In Clinical Psychology & MSc. In Applied Child Psychology
              </p>
            </div>
            <div className="border-4 border-cyan-500 m-2 p-4 max-w-md">
              <h1 className="text-xl font-bold">Specialization</h1>
              <p className="my-2 py-4">
                MA In Clinical Psychology & MSc. In Applied Child PsychAnxiety,
                ADHD (Child), ADHD (Adult), Autism Spectrum Disorders, Child
                Counseling, Stress, Career Counselling, Sleep Issues, Anger,
                Depression, Grief & Lossology
              </p>
            </div>
            <div className="border-4 border-cyan-500 m-2 p-4 min-w-max max-w-md">
              <h1 className="text-xl font-bold">Languages Spoken</h1>
              <p className="my-2 py-4">English, Marathi, Hindi</p>
            </div>

            <div className="border-4 border-cyan-500 m-2 p-4 min-w-md">
              <h1 className="text-xl font-bold">Next Available at</h1>
              <p className="my-2 py-4">May 7, 2023 4:00 PM</p>
            </div>

            <div className="border-4 border-cyan-500 m-2 p-4 max-w-md">
              <h1 className="text-xl font-bold">Expertise</h1>
              <p className="my-2 py-4">
                Client Centred, Mindfulness Based Therapies, Play And Art
                Therapy For Kids, Behavioural Modification For Kids,
                Psychodynamic
              </p>
            </div>
          </div>

          <div className="border-4 border-black  overflow-hidden">
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
