import React, { useState } from 'react'
import Header from '../../Components/Header'
import Navbar from '../../Components/Navbar'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

function AdminDashboard() {
    const [nav,setNav]= useState("20%")
   const hun =()=>{

        if(nav=="20%")
        {   
            setNav("5%")
        }
        else{
            setNav("20%")
        }
        
   }
   
  return (
    <>
        <div>

               

          <Header/>

        </div>
        <div className='flex w-full'>
            <div style={{width:nav,}} className='h-screen bg-[#090d44dd]'>
                 <p onClick={hun} className='text-2xl text-white relative top-0 right-0'>
                    {
                        nav=="5%"?<KeyboardArrowRightIcon  sx={{color:'white'}}/>:<KeyboardArrowLeftIcon/>
                    }
                 </p>
                <Navbar/>  
            </div>
            <div  className='w-full bg-[#b7ff00] h-screen'>

            </div>
        </div>

       
       
    </>
  )
}

export default AdminDashboard