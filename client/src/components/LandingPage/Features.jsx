import React from 'react'
import { CgAddR } from "react-icons/cg";
import { VscAccount } from "react-icons/vsc";
import { AiFillCalendar } from "react-icons/ai";
import { RiChatPrivateLine } from "react-icons/ri";

const Features = () => {
  return (
    <>
        <section className='bg-blue-50 text-center'>
            <div className='max-w-7xl mx-auto px-7 py-10'>
                <div className='mb-14'>
                    {/* <p className='text-blue-600 text-lg'>Features</p> */}
                    <h1 className='font-bold text-4xl'>Why Choose Us?</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <div className='bg-white rounded-md py-6 px-2'>
                        <div className='bg-blue-200 text-blue-500 w-16 h-16 rounded-md mx-auto flex justify-center items-center text-3xl'>
                            <CgAddR/>
                        </div>
                        <h2 className='font-bold text-2xl my-3 '>Health Professionals</h2>
                        <p className='max-w-md mx-auto text-gray-400'>Our team consists of highly qualified and licensed mental health experts who specialize in various areas, including anxiety, depression, stress management, relationships, and more. </p>
                    </div>
                    <div className='bg-white rounded-md text-center py-6 px-2'>
                        <div className='bg-blue-200 text-blue-500 w-16 h-16 rounded-md mx-auto flex justify-center items-center text-3xl'>
                            <VscAccount/>
                        </div>
                        <h2 className='font-bold text-2xl my-3'>Personalized Sessions</h2>
                        <p className='max-w-md mx-auto text-gray-400'>We believe that each individual is unique and requires a personalized approach to address their mental health concerns effectively.</p>
                    </div>
                    <div className='bg-white rounded-md text-center py-6 px-2'>
                        <div className='bg-blue-200 text-blue-500 w-16 h-16 rounded-md mx-auto flex justify-center items-center text-3xl'>
                        <AiFillCalendar/>
                        </div>
                        <h2 className='font-bold text-2xl my-3'>Convenient Booking</h2>
                        <p className='max-w-md mx-auto text-gray-400'>We understand the importance of accessibility and convenience when seeking mental health support. With our user-friendly online booking system, you can easily schedule your sessions at a time that works best for you. </p>
                    </div>
                    <div className='bg-white rounded-md text-center py-6 px-2'>
                        <div className='bg-blue-200 text-blue-500 w-16 h-16 rounded-md mx-auto flex justify-center items-center text-3xl'>
                            <RiChatPrivateLine/>
                        </div>
                        <h2 className='font-bold text-2xl my-3'>Confidential</h2>
                        <p className='max-w-md mx-auto text-gray-400'>
                        Your privacy and confidentiality are our top priorities. We provide a secure and private platform for you to discuss your concerns openly and without judgment.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Features