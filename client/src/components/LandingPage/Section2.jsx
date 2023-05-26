import React from 'react'
import img from '../../assets/images/Psychologist-amico.png'
import img1 from '../../assets/images/Image1.svg'


const Section2 = () => {
    return (
        <>
            <section className='bg-slate-50'>
                <div className='max-w-7xl mx-auto px-7 py-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-7 item-center mt-12'>
                        <img src={img} alt='Mind Space' className='order-2 md:order-1'/>
                        <div className='order-1 md:order-2'>
                            {/* <p className='text-blue-600 mb-4 text-lg'>Superiority</p> */}
                            <h1 className='font-bold text-4xl'>Holistic Approach</h1>
                            <p className='max-w-md my-6 text-gray-400'>At Mind Space, we believe in a holistic approach to mental health. Our professionals consider various aspects of your life, including your relationships, work, and lifestyle, to provide comprehensive support. We aim to empower you with the tools and strategies necessary to foster long-lasting well-being.

                            </p>
                            {/* <a href='#' className='bg-blue-700 hover:bg-blue-800 transition-colors text-white py-3 px-7 rounded-md mr-4 mt-1 inline-block text-lg'>Learn More</a> */}
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-7 items-center mt-12'>
                        <div className='order-2 md:order-1'>
                            {/* <p className='text-blue-600 mb-4 text-lg'>How it works</p> */}
                            <h1 className='font-bold text-4xl'>Empathetic and Qualified Professionals </h1>
                            <p className='max-w-md my-6 text-gray-400'>Our team of mental health experts comprises compassionate and highly qualified professionals who are committed to helping you navigate life's ups and downs. They bring extensive experience and expertise in a variety of areas, including anxiety, depression, self-esteem, trauma, and more. With their guidance, you can find the support you need to thrive.</p>
                            {/* <a href='#' className='bg-blue-700 hover:bg-blue-800 transition-color text-white py-3 px-7 rounded-md mr-4 mt-1 inline-block text-lg'>Learn More</a> */}
                        </div>
                        <img src={img1} alt="Mind Space" className='order-1 md:order-2' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section2