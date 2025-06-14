import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const MyAppointments = () => {
  const { doctors } = useContext(AppContext)

  return (
    <div>
    
       <p className='pb-3 mt-12 font-medium border-b'>My appointments</p>
      <div>
        {
          doctors.slice(0, 2).map((item,index) => (
            <div key={index} className='grid grid-cols-[1fr_3fr] gap-4 sm:flex sm:gap-6 py-2 border-b'>
              <div>
                <img
                  className='w-32 bg-indigo-50'
                  src={item.image || '/fallback-image.png'} // Fallback if image is missing
                  alt={item.name} // Add alt text for accessibility
                />
              </div>
              <div className='flex-1 text-sm text-zinc-600'>
                <p className='text-neutral-800 font-semibold'>{item.name}</p>
                <p>{item.speciality}</p>
                <p className='text-zinc-700 font-medium mt-1'>Address</p>
                <p className='text-sm'>{item.address.Line1}</p>
                <p className='text-sm'>{item.address.Line2}</p>
                <p><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> 25, May, 2025 | 5:00 PM</p>
              </div>
              <div></div>
              <div className='flex flex-col gap-2 justify-end'>
                <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>
                  Pay Online
                </button>
                <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>
                  Cancel Appointment
                </button>
              </div>
            </div>
          ))
        }
      </div> 
    </div>
  )
}

export default MyAppointments
