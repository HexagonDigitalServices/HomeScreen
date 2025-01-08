import React from 'react'
import Orbit from './Orbit/Orbit'

const Hero = () => {
    return (
        <section className='flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-6 md:px-12
         bg-gradient-to-r from-gray-800 to-teal-900 text-white'>
            {/* TEXT SECTION */}
            <div className='w-full md:w-1/2 text-center md:text-left'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight'>
                    Welcome to <span className='text-orange-500'>GlideSphere</span>
                </h1>
                <p className='text-lg sm:text-xl mb-6 leading-relaxed'>
                    Discover the next generation of web aplications, built with cuttng-edge
                    technology to empower your business and create seamless user experience.
                </p>
                <a href="learn-more" className=' inline-block text-sm md:text-base bg-gradient-to-r from-green-400 to-red-500
                 text-white px-6 py-3 rounded-full hover:opacity-90 transition duration-300'>
                    Learn More
                </a>
            </div>

            <div className='w-full sm:w-3/4 md:w-1/2 flex justify-center items-center mt-8 md:mt-0'>
                <Orbit />
            </div>
        </section>
    )
}

export default Hero