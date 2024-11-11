import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
        <div className='h-screen  flex justify-center  bg-[#090d44dd]'>
                  <div className='flex flex-col justify-center items-center'>
                       <div className='text-4xl text-center'>Welcome to <h2 className=' font-bold text-[#eb3a3a]'>ManageSchool.com</h2> </div>
                        
                       <button className='w-[160px] h-10 mt-4 border-x rounded-sm  bg-white text-2xl  text-[#eb3a3a] font-semibold    hover:bg-orange-200 hover:text-black'><Link to='/login'>Login</Link></button>
                       <Link to='/admin'>Admin</Link>
                  </div>
         </div>
    </>
  )
}

export default Home