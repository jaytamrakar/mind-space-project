import React from 'react'

import Android from '../../assets/images/Android.png'
import App from '../../assets/images/App.svg'
const Section4 = () => {
    return (
        <>
            <section className='bg-blue-50'>
                <div className='max-w-7xl mx-auto px-7 py-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-7 items-center mb-12'>
                        <img src={App} alt="application" className='w-full h-full object-contain'/>
                        <div>

                            <p className='text-blue-600 mb-4 text-lg'>Download</p>
                            <h1 className='font-bold text-4xl'>Download Tasking on your Device</h1>
                            <p className='max-w-md my-6 text-gray-400'>Build a clean modern app landing page design using one of the most popular CSS frameworks to date.</p>
                            <div className='flex justify-start items-center gap-4'>
                                {/* <a href='#'> */}
                                    <img src={Android} alt='Mind Space' className='h-12' />
                                {/* </a> */}
                                {/* <a href='#'> */}
                                    {/* <img src={Ios} alt='Mind Space' className='h-12' /> */}
                                {/* </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section4