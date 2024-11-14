import React, { useState } from 'react'
import Header from '../../Components/Header'
import Navbar from '../../Components/Navbar'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AdminMain from '../../Components/AdminComp/AdminMain';
import Opration from '../../Components/Opration';
import NoticeBord from '../../Components/NoticeBord';


function AdminDashboard() {

  const noticeData=[
    {
        date:"1 May,2025",
      Notice:"Today is Holiday for festval"
    },
    {
        date:"1 May,2025",
      Notice:"Today is Holiday for festval"
    },
    {
        date:"1 May,2025",
      Notice:"Today is Holiday for festval"
    },
    {
        date:"1 May,2025",
      Notice:"Today is Holiday for festval"
    },
    {
        date:"1 May,2025",
      Notice:"Today is Holiday for festval"
    },
]
    
   
  return (
    <>
        <div>

               

          <Header/>

        </div>
        <div className='flex w-full bg-[#ddd1d1a7]'>
            <div className='h-screen '>
                
                <Navbar/>  
            </div>
            <div  className='w-full  h-screen'>
                  <AdminMain/>

                  <div className='w-[80%] m-auto flex justify-between  mt-3 shadow-slate-400'>
                       <div className='w-[60%] h-[370px] m-1 flex flex-col justify-center items-center shadow-slate-400 bg-white'>
                        <p className='text-xl m-2 text-orange-600 font-serif font-bold'>Admin oprations</p>
                        <Opration/>
                         
                       </div>
                       <div   className='w-[35%] h-[370px] m-1 flex flex-col justify-center items-center shadow-slate-400 bg-white'>
                       <p className='text-xl m-2 text-orange-600 font-serif font-bold'>Notice Bord</p>
                        <div className='h-[80%] overflow-scroll overflow-x-visible'>
                          {
                              noticeData.map((item)=><NoticeBord data={{nDate:item.date,nData:item.Notice}}/>)
                          }
                            
                        </div>

                       </div>
                  </div>
            </div>
        </div>

       
       
    </>
  )
}

export default AdminDashboard