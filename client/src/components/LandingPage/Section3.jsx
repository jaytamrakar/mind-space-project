import React from 'react'
import img from '../../assets/images/Online Doctor-amico.png'

const Section3 = () => {
    return (
        <>
            <section className='bg-white'>
                <div className='max-w-7xl mx-auto px-7 py-10'>
                    <div className='mb-14 text-center'>
                        <p className='text-blue-600 text-lg'>Articles</p>
                        <h1 className='font-bold text-4xl'>Articles From Tasking</h1>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className='border border-gray-200 rounded-lg p-4'>
                            <img src={img} alt="Mind Space" className='mb-4' />
                            <p className='text-gray-400 text-lg'>Technology</p>
                            <h2 className='text-2xl font-bold my-4'>Bradford assay is an addition to comassie</h2>
                            {/* <a href='#' className='flex justify-start items-center gap-4 hover:text-blue-600 transition-colors mb-2'>
                                <span className='font-bold'>Read More</span>
                                <i className='fas fa-arrow-right text-blue-600'></i>
                            </a> */}
                        </div>

                        <div className='border border-gray-200 rounded-lg p-4'>
                            <img src={img} alt="Mind Space" className='mb-4' />
                            <p className='text-gray-400 text-lg'>Technology</p>
                            <h2 className='text-2xl font-bold my-4'>Bradford assay is an addition to comassie</h2>
                            {/* <a href='#' className='flex justify-start items-center gap-4 hover:text-blue-600 transition-colors mb-2'>
                                <span className='font-bold'>Read More</span>
                                <i className='fas fa-arrow-right text-blue-600'></i>
                            </a> */}
                        </div>
                        
                        <div className='border border-gray-200 rounded-lg p-4'>
                            <img src={img} alt="Mind Space" className='mb-4' />
                            <p className='text-gray-400 text-lg'>Technology</p>
                            <h2 className='text-2xl font-bold my-4'>Bradford assay is an addition to comassie</h2>
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