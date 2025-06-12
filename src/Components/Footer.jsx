import React from 'react'
import { assets } from '../assets/assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className="md:mx-10">
        <div className='flex flex-col md:grid grid-cols-[3fr_1fr_1fr]  gap-14 my-10 mt-40 text-sm '> 
            {/* LEFT */}
            <div>
               <div className="flex">
               <img src={assets.logo} className='w-10 h-10'/>
               <p className='p-2 font-bold'>MedSoft</p>
               </div>
                <p className='leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            </div>
            {/* CENTER */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            {/* RIGHT */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+0-100-010-111</li>
                    <li>medsoft@gmail.com</li>
                </ul>
            </div>

        </div>
        {/* COPYRIGHT */}
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2025 @ MedSoft - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer