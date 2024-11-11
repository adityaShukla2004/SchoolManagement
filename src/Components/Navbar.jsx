import React from 'react'
import Link from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className='w-full m-auto pt-6 h-20 flex justify-between bg-indigo-100 shadow-sm' >

                <div>
                    <h3 className='ml-4 text-3xl text-indigo-600 font-bold '>Teach us</h3>
                </div>

                <div className='w-2/3  flex justify-around '>

                    <p className='hover:text-violet-600'>Home</p>

                    <p className='hover:text-violet-600'>Teachers</p>
                    <p className='hover:text-violet-600'>About us</p>

                    <p className='hover:text-violet-600'>Contact us</p>

                    <p className='hover:text-violet-600'>Sign in</p>

                    <p className='hover:text-violet-600'>Sign up</p>




                </div>
            </div>

        </>
    )
}

export default Navbar