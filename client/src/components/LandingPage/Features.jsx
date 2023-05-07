import React from 'react'

const Features = () => {
  return (
    <>
        <section className='bg-blue-50 text-center'>
            <div className='max-w-7xl mx-auto px-7 py-10'>
                <div className='mb-14'>
                    <p className='text-blue-600 text-lg'>Features</p>
                    <h1 className='font-bold text-4xl'>Our Special Features</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <div className='bg-white rounded-md py-6 px-2'>
                        <div className='bg-blue-200 text-blue-500 w-16 h-16 rounded-md mx-auto flex justify-center items-center text-3xl'>
                            <i className='fas fa-user'></i>
                        </div>
                        <h2 className='font-bold text-2xl my-3 '>User Friendly</h2>
                        <p className='max-w-md mx-auto text-gray-400'>Indori Bhaiya Aka Gel Choda</p>
                    </div>
                    <div className='bg-white rounded-md text-center py-6 px-2'>
                        <div className='bg-blue-200 text-blue-500 w-16 h-16 rounded-md mx-auto flex justify-center items-center text-3xl'>
                            <i className='fas fa-shield-alt'></i>
                        </div>
                        <h2 className='font-bold text-2xl my-3'>Trusted</h2>
                        <p className='max-w-md mx-auto text-gray-400'>While it can do so, and does it well, the main appeal of Lorem Ipsum Text Generator is that it allows you to input custom source text that it ...</p>
                    </div>
                    <div className='bg-white rounded-md text-center py-6 px-2'>
                        <div className='bg-blue-200 text-blue-500 w-16 h-16 rounded-md mx-auto flex justify-center items-center text-3xl'>
                            <i className='far fa-sticky-note'></i>
                        </div>
                        <h2 className='font-bold text-2xl my-3'>Flexible</h2>
                        <p className='max-w-md mx-auto text-gray-400'>While it can do so, and does it well, the main appeal of Lorem Ipsum Text Generator is that it allows you to input custom source text that it ...</p>
                    </div>
                    <div className='bg-white rounded-md text-center py-6 px-2'>
                        <div className='bg-blue-200 text-blue-500 w-16 h-16 rounded-md mx-auto flex justify-center items-center text-3xl'>
                            <i className='fas fa-percentage'></i>
                        </div>
                        <h2 className='font-bold text-2xl my-3'>100% Free</h2>
                        <p className='max-w-md mx-auto text-gray-400'>
                        While it can do so, and does it well, the main appeal of Lorem Ipsum Text Generator is that it allows you to input custom source text that it ...
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Features