import { Card } from '@mui/material'
import React from 'react'
import AdminCard from './AdminCard'

function AdminMain() {
    const adminShow = [
        {
        name:"Students",
        qua:1233
        },{
            name:"Teachers",
            qua:80
        },{
            name:"Classes",
            qua:15
        }
]
  return (
    <div className='mt-3'>
         
        <div className=' w-[80%] m-auto flex justify-between'>
        {
            adminShow.map((item)=><AdminCard data ={{name:item.name,qua:item.qua}}/>)
         }
            
        </div> 

    </div>
  )
}

export default AdminMain