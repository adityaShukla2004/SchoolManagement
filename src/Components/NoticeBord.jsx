import React from 'react'



export default function NoticeBord({data}) {
  return (
    <div style={{borderBottom:'1px solid gray'}} className='flex flex-col mt-3 justify-center h-[60px]'>
          <p className='text-[14px] text-orange-600 font-serif '>{data.nDate}</p> 
          <p> {data.nData}</p> 
         
    </div>

  )
}
