import React,{useState} from 'react'

const Login = () => {
  const [state, setstate] = useState('SignUp')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [name, setname] = useState('')
  const onSubmitHandler = async (event)=>{
    event.preventDefault()
  }
  return (
  
      <form className='min-h-[80vh] flex items-center'>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 rounded-xl text-zinc-600 text-sm shadow-lg'>
           <p className='text-xl font-semibold '>{state==='SignUp'?"Create Account":"Login"}</p>
           <p >Please {state==='SignUp'?"Sign Up":"Login"} to book appointment</p>
           <div className='w-full'>
            {state==="SignUp" && <div><p>Fullname</p>
            <input className='border border-zinc-400 p-2 w-full rounded-md m-2' type='text' value={name} onChange={(e)=>setname(e.target.value)} required/>
          </div>}
          <p>Email</p>
            <input className='border border-zinc-400 p-2 w-full rounded-md m-2'  type='email' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
         
            <p>Password</p>
            <input className='border border-zinc-400 p-2 w-full rounded-md m-2' type='password' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
          
         
           </div>
           <button className='bg-primary border-zinc-300 w-full rounded p-2 mt-1 text-white'>{state==="SignUp"?"Create Account":"Login"}</button>
           {
            state==="SignUp"?<p>Already have an account?<span onClick={()=>setstate('Login')}>Login here</span></p>:<p>Create an new account?<span onClick={()=>setstate('SignUp')}>click here</span></p>
           }
        </div>

      </form> 
  
  )
}

export default Login