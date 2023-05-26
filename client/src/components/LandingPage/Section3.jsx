import React from 'react'
import img from '../../assets/images/Image2.svg'
import img1 from '../../assets/images/MentalHealthSupport.svg'
import img2 from '../../assets/images/Meditation.svg'

const Section3 = () => {
    return (
        <>
            <section className='bg-white'>
                <div className='max-w-7xl mx-auto px-7 py-10'>
                    <div className='mb-14 text-center'>
                        {/* <p className='text-blue-600 text-lg'>Articles</p> */}
                        <h1 className='font-bold text-4xl'>Discover the Power of Mind Space</h1>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className='border border-gray-200 rounded-lg p-4'>
                            <img src={img} alt="Mind Space" className='mb-4' />
                            <p className='text-gray-400 text-lg'>Mind Space</p>
                            <h2 className='text-2xl font-bold my-4'>Empathetic and Qualified Professionals</h2>
                            {/* <a href='#' className='flex justify-start items-center gap-4 hover:text-blue-600 transition-colors mb-2'>
                                <span className='font-bold'>Read More</span>
                                <i className='fas fa-arrow-right text-blue-600'></i>
                            </a> */}
                        </div>

                        <div className='border border-gray-200 rounded-lg p-4'>
                            <img src={img1} alt="Mind Space" className='mb-4' />
                            <p className='text-gray-400 text-lg'>Mind Space</p>
                            <h2 className='text-2xl font-bold my-4'>Personalized Mental Health Support</h2>
                            {/* <a href='#' className='flex justify-start items-center gap-4 hover:text-blue-600 transition-colors mb-2'>
                                <span className='font-bold'>Read More</span>
                                <i className='fas fa-arrow-right text-blue-600'></i>
                            </a> */}
                        </div>
                        
                        <div className='border border-gray-200 rounded-lg p-4'>
                            <img src={img2} alt="Mind Space" className='mb-4' />
                            <p className='text-gray-400 text-lg'>Mind Space</p>
                            <h2 className='text-2xl font-bold my-4'>Cultivating Resilience and Inner Harmony</h2>
                            {/* <a href='#' className='flex justify-start items-center gap-4 hover:text-blue-600 transition-colors mb-2'>
                                <span className='font-bold'>Read More</span>
                                <i className='fas fa-arrow-right text-blue-600'></i>
                            </a> */}
                        </div>
                    
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section3