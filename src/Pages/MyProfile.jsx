import React,{useState} from 'react'
import { assets } from '../assets/assets/assets_frontend/assets'

const MyProfile = () => {
  const [userData, setuserData] = useState({
    name:"Mouni",
    image:assets.profile_pic,
    email:"sheikmouniya327@gmail.com",
    phone:"9492122758",
    address:{
      Line1:"Kutukuluru",
      Line2:"EastGodavari,AP"
    },
    gender:"Female",
    dob:"08-01-2004"

  })
  const [isEdit, setisEdit] = useState(false)

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <img className='w-40 rounded'  src={userData.image} alt=""/>
      {
        isEdit ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type='text' onChange={e=>setuserData(prev=>({...prev,name:e.target.value}))} value={userData.name} />
        :<p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      }
      <hr className='bg-zinc-400 h-[1px] border-none'/>
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p  className='font-medium'>Phone:</p>
          {
            isEdit?<input className='bg-gray-100 max-w-52' type='text' onChange={e=>setuserData(prev=>({...prev,phone:e.target.value}))} value={userData.phone} />
            :<p >{userData.phone}</p>
          }
           <p className='font-medium'>Address:</p>
           {
            isEdit?
            <p><input type='text' value={userData.address.Line1} onChange={(e)=>setuserData(prev=>({...prev,address:{...prev.address,Line1:e.target.value}}))} />
            <br />
            <input type='text' value={userData.address.Line2} onChange={(e)=>setuserData(prev=>({...prev,address:{...prev.address,Line2:e.target.value}}))} />
            </p>
            :<p>
             <p>{userData.address.Line1}</p>
             <p>{userData.address.Line2}</p>
            </p>
           }

        </div>
      </div>
      <div>
      <p>BASIC INFORMATION</p>
      <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-600'>
        <p className='font-medium' >Gender:</p>
        {
          isEdit?
          <select onChange={e=>setuserData(prev=>({...prev,gender:e.target.value}))} value={userData.gender}>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>
          :<p className='font-medium'>{userData.gender}</p>
        }
        <p className='font-medium'>Birthday</p>
        {
            isEdit?<input className='bg-gray-100 max-w-52' type='date' onChange={e=>setuserData(prev=>({...prev,dob:e.target.value}))} value={userData.dob} />
            :<p >{userData.dob}</p>
          }
      </div>
      </div>
      <div className='mt-10'>
             {
              isEdit?
              <button onClick={()=>setisEdit(false)} className='border border-primary px-8 py-2 rounded-full hover:text-black transition-all'>Save Information</button>
              :<button onClick={()=>setisEdit(true)} className='border border-primary px-8 py-2 rounded-full  hover:text-black transition-all'>Edit</button>
             }
      </div>

    </div>
    
  )
}

export default MyProfile