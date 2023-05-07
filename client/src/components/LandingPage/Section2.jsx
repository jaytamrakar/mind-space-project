import React from 'react'
import img from '../../assets/images/Psychologist-amico.png'

const Section2 = () => {
    return (
        <>
            <section className='bg-slate-50'>
                <div className='max-w-7xl mx-auto px-7 py-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-7 item-center mb-12'>
                        <img src={img} alt='Mind Space' />
                        <div>
                            <p className='text-blue-600 mb-4 text-lg'>Superiority</p>
                            <h1 className='font-bold text-4xl'>Smart System &amp; Friendly Design</h1>
                            <p className='max-w-md my-6 text-gray-400'>Build a clean modern app landing page design using one of the most popular CSS frameworks to date.</p>
                            <a href='#' className='bg-blue-700 hover:bg-blue-800 transition-colors text-white py-3 px-7 rounded-md mr-4 mt-1 inline-block text-lg'>Learn More</a>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-7 items-center mt-12'>
                        <div className='order-2 md:order-1'>
                            <p className='text-blue-600 mb-4 text-lg'>How it works</p>
                            <h1 className='font-bold text-4xl'>How It Works? <br /> We Have Three Options </h1>
                            <p className='max-w-md my-6 text-gray-400'>Build a clean modern app landing page design using one of the most popular CSS frameworks to date</p>
                            <a href='#' className='bg-blue-700 hover:bg-blue-800 transition-color text-white py-3 px-7 rounded-md mr-4 mt-1 inline-block text-lg'>Learn More</a>
                        </div>
                        <img src={img} alt="Mind Space" className='order-1 md:order-2'/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section2