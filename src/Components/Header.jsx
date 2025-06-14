import React from 'react'
import { assets } from '../assets/assets/assets_frontend/assets'

const header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap  bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
            {/*--left */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4  py-10 m-auto md:py-[10vw] md:mb-[30px]'>
                <p className='text-3xl font-semibold text-white md:text-4xl lg:text-5xl leading-tight '>Book Appointment <br /> With Trusted Doctors</p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                    <img src={assets.group_profiles} className='w-28' />
                    <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block'/>
                        schedule your appointment hassle-free.
                    </p>
                    </div>
                    <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>Book Appointment
                        <img src={assets.arrow_icon} className='w-3' />
                    </a>

               
            </div>
            {/* ---right */}
            <div className='md:w-1/2 relative'>
                <img className='w-full md:absolute bottom-10 h-auto rounded-lg'  src={assets.header_img} alt=""/>
            </div>

        </div>
    )
}

export default header
