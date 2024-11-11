import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Login() {
  return (
       <> 
         <div className='bg-[#f9b570] h-screen flex justify-center items-center'>
         <div className='bg-white w-[300px] h-[400px] rounded-md shadow-orange-100 flex flex-col justify-center items-center'>
                <div className='h-[100px'>
                    <AccountCircleIcon sx={{ fontSize: 60 ,color:'#f9b570'}}/>
                </div>
                <form className=' flex flex-col justify-around items-center h-[250px]'>
                     <div className='h-[75px] flex flex-col justify-around'>
                         <p className='font-sans text-[18px]'>Enter the Email:</p>
                         <input className='w-[250px] rounded-sm text-xl p-1' type='email' placeholder='Enter the Email'/>
                     </div>
                     <div className='h-[75px] flex flex-col justify-around'>
                         <p className='font-sans text-[18px]'>Enter the Password:</p>
                         <input className='w-[250px] rounded-sm text-xl p-1' type='Password' placeholder='Enter the Email'/>
                     </div>
                      <input className='w-[130px] h-[40px] rounded-sm bg-[#f9b570] text-2xl text-white hover:bg-orange-200' type='submit' value="Login"/>
                </form>
                
          </div>

         </div>
          
       </>
  )
}

export default Login