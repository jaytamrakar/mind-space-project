import React from 'react'
import img from '../../assets/images/Online Doctor-amico.png'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
        <>
        <header className='min-h-screen flex justify-center items-center  pb-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-7'>
                    <div className='mb-10 md:mb-0'>
                        <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
                            Get care <br /> from the people <br />
                            {/* <br/>
                            quickly */}
                            <span className='font-bold ' > Who care</span>
                        </h1>
                        <p className='mb-5 mt-7 max-w-md text-gray-400'>"We understand that mental health is just as important as physical health. That's why we offer an online therapy platform that connects you to licensed mental health professionals from the comfort and privacy of your own home." </p>
                        <Link to="/login" className='bg-blue-700 hover:bg-blue-800 transition-colors text-white py-3 px-7 rounded-md mr-4 mt-1 inline-block text-lg font-semibold'>Book An Appointment</Link>
                        <Link to="/doctors" className='inline-block hover:bg-violet-500 hover:text-white py-3 px-7 rounded-md  mr-4 mt-1 transition-colors text-lg font-semibold'>Meet Doctors</Link>
                    </div>
                    <img src={img} alt='Mind Space' />
                </div>
            </header>
        </>
    )
}

export default HeroSection