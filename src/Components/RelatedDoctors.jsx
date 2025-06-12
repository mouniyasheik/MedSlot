import React, { useContext,useEffect,useState } from 'react'
import { AppContext } from '../Context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({speciality,docId}) => {
    const navigate = useNavigate()
    const {doctors} = useContext(AppContext)
    const [relDoc, setrelDoc] = useState([])
    useEffect(()=>{
        if(doctors.length >0 && speciality){
            const doctorsData= doctors.filter((doc)=>
                doc.speciality===speciality && doc._id !== docId)
           setrelDoc(doctorsData)
        }
    },[doctors,speciality,docId])
  return (
    
        <div className=' w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {
                relDoc.slice(0,5).map((item, index)=>(
                    <div onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}}  key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                        <img src={item.image} className='bg-blue-50' />
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-center text-gray-500'>
                                <p className='w-2 h-2 bg-green-500 rounded-full' ></p>
                                <p>Available</p>
                            </div>
                            <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>
                        </div>

                    </div>
        )  ) }
           
        </div>
      
     
  )
}

export default RelatedDoctors
