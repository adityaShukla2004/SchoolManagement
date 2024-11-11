import React from 'react'
import Link from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import FlightClassSharpIcon from '@mui/icons-material/FlightClassSharp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FamilyRestroomSharpIcon from '@mui/icons-material/FamilyRestroomSharp';
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp';
import PaymentsSharpIcon from '@mui/icons-material/PaymentsSharp';
import EditNotificationsSharpIcon from '@mui/icons-material/EditNotificationsSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';

function Navbar() {
    return (
        <>
            <div className=' m-1 w-[200px]'>
                
                <div style={{
                    borderBottom:'1px solid white'
                }}className=' w-[80%] p-2 flex justify-around  border-white'>
                     <HomeIcon sx={{color:['white']}}/>
                      <p className='text-slate-300'>Home</p>
                </div>

                <div style={{
                    borderBottom:'1px solid white'
                }}className=' w-[80%] p-2 flex justify-around  border-white'>
                     <SchoolSharpIcon sx={{color:['white']}}/>
                      <p className='text-slate-300'>Students</p>
                </div>

                <div style={{
                    borderBottom:'1px solid white'
                }}className=' w-[80%] p-2 flex justify-around  border-white'>
                     <AccountCircleIcon sx={{color:['white']}}/>
                      <p className='text-slate-300'>Teachers</p>
                </div>
                <div style={{
                    borderBottom:'1px solid white'
                }}className=' w-[80%] p-2 flex justify-around  border-white'>
                     <HomeIcon sx={{color:['white']}}/>
                      <p className='text-slate-300'>Home</p>
                </div>


                <div style={{
                    borderBottom:'1px solid white'
                }}className=' w-[80%] p-2 flex justify-around  border-white'>
                     <HomeIcon sx={{color:['white']}}/>
                      <p className='text-slate-300'>Home</p>
                </div>


                <div style={{
                    borderBottom:'1px solid white'
                }}className=' w-[80%] p-2 flex justify-around  border-white'>
                     <HomeIcon sx={{color:['white']}}/>
                      <p className='text-slate-300'>Home</p>
                </div>

                <div style={{
                    borderBottom:'1px solid white',
                  
                }}className=' w-[80%] p-2 flex justify-around  border-white'>
                     <SettingsSharpIcon sx={{color:['white']}}/>
                      <p className='text-slate-300'>Confuguration</p>
                </div>
                


                


            </div>
            

        </>
    )
}

export default Navbar