import React, { useState } from 'react'
import { assets } from '../assets/assets/assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();
  const [ShowMenu, setShowMenu] = useState(false)
  const [token, settoken] = useState(true)

  return (
    <div className='flex justify-between text-sm py-4 mb-5 border-b border-b-gray-400 '>
      <div className='flex justify-center'>
        <img src={assets.logo} alt="Logo" className=' cursor-pointer w-20 h-15' onClick={() => navigate('/')} />
        <span className='text-center p-5 text-3xl font-bold'>MedSoft</span>
      </div>
      <ul className='md:flex hidden items-center gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/doctors'>
          <li className='py-1'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1'>ABOUT</li><hr className='border-none outline-none h-0.5 hidden bg-primary w-3/5 m-auto' />
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1'>CONTACT</li><hr className='border-none outline-none h-0.5 hidden bg-primary w-3/5 m-auto' />
        </NavLink>
      </ul>
      <div className=' flex item-center gap-4' >
        {
          token ?
            <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img src={assets.profile_pic} className="w-11 rounded-full" alt="" />

              <img src={assets.dropdown_icon} className='w-2.5' alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 hidden z-20 group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                  <p className='hover:text-black cursor-pointer' onClick={() => navigate('/my-profile')}>My Profile</p>
                  <p className='hover:text-black cursor-pointer ' onClick={() => navigate('/my-appointments')}>My Appointments</p>
                  <p className='hover:text-black cursor-pointer' onClick={() => settoken(false)}>Logout</p>
                </div>
              </div>
            </div>
            : <button className='bg-primary text-blue px-4 py-1 rounded-md font-light hidden md:block mt-6 h-10' onClick={() => { navigate('/login') }} >CREATE ACCOUNT</button>
        }
        < img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} />
        {/* Mobile Menu */}
        <div className={` ${ShowMenu ? 'fixed w-full' : 'h-0 w-0'}   md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img src={assets.logo} alt="" className='w-15 h-10' />
            <img className='w-7' src={assets.cross_icon} onClick={() => setShowMenu(false)} />

          </div>
          <ul className='flex flex-col items-center g-2 mt-5 px-5 text-lg font-medium'>
            <NavLink to='/' onClick={() => setShowMenu(false)}><p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
            <NavLink to='/doctors' onClick={() => setShowMenu(false)}><p className='px-4 py-2 rounded inline-block'>All Doctors</p></NavLink> 
             <NavLink to='/about' onClick={() => setShowMenu(false)}><p className='px-4 py-2 rounded inline-block'>About</p></NavLink> 
              <NavLink to='/contact' onClick={() => setShowMenu(false)}><p className='px-4 py-2 rounded inline-block'>Contact</p></NavLink>
             
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Navbar