import React, { useState } from 'react'
import Header from '../../Components/Header'
import Navbar from '../../Components/Navbar'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


function AdminDashboard() {
    
   
  return (
    <>
        <div>

               

          <Header/>

        </div>
        <div className='flex w-full'>
            <div className='h-screen '>
                
                <Navbar/>  
            </div>
            <div  className='w-full  h-screen'>

            </div>
        </div>

       
       
    </>
  )
}

export default AdminDashboard