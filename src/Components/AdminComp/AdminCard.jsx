import React from 'react'

function AdminCard({data}) {
  return (
   <>
        <div className='w-[350px] h-[140px] m-2 flex flex-col justify-center items-center c bg-orange-600  shadow-gray-400'>
                <h2 className='text-3xl font-bold font-mono text-white'>{data.name}</h2>
                 <p className='text-2xl font-semibold font-mono '>{data.qua}</p>
        </div>
   </>
  )
}

export default AdminCard;