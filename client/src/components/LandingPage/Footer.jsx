import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <footer className='bg-indigo-800 text-white stick bottom-0 mt-auto'>
                <div className='max-w-7xl mx-auto px-7 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:justify-items-center'>
                    <div>
                        <h1 className='font-bold text-3xl'>Mind Space</h1>
                        <p className='my-4 text-slate-400'>Mind Space: Nurturing Mental Well-being for a Balanced Life </p>

                        <div className='flex justify-start items-center gap-3'>
                            <Link to="facebook" className='w-12 h-12 bg-white text-black text-2xl rounded-xl flex justify-center items-center'>
                            <BsFacebook/>
                            </Link>
                            <Link to="#" className='w-12 h-12 bg-white text-black text-2xl rounded-xl flex justify-center items-center'>
                                <AiFillInstagram/>
                            </Link>
                            <Link to="#" className='w-12 h-12 bg-white text-black text-2xl rounded-xl flex justify-center items-center'>
                                <MdEmail/>
                            </Link>

                        </div>
                    </div>
                <div className='text-slate-400 flex flex-col gap-3'>
                    <h2 className='font-bold text-2xl text-white'>
                        About this
                    </h2>
                    <Link to="/about">About Us</Link>
                    <Link to="#">Features</Link>
                    <Link to="/doctors">Doctors</Link>
                </div>
                <div className='text-slate-400 flex flex-col gap-3'>
                    <h2 className='font-bold text-2xl text-white'>Support us</h2>
                    <Link to="/about">About Us</Link>
                    <Link to="#">Features</Link>
                    <Link to="/doctors">Doctors</Link>
                </div>
                <div className='text-slate-400 flex flex-col gap-3'>
                    <h2 className='font-bold text-2xl text-white'>Partner</h2>
                    <Link to="#">Our Partner</Link>
                    <Link to="#">Features</Link>
                </div>
                </div>
                <p className='text-white p-5 text-center bg-indigo-900'>All Rights Reserved. @ Mindspace.in Made With &#10084;</p>
            </footer>
        </>
    )
}

export default Footer