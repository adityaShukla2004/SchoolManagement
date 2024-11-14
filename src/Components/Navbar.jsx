import React from 'react'
import Link from 'react-router-dom'
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';

import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import FlightClassSharpIcon from '@mui/icons-material/FlightClassSharp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FamilyRestroomSharpIcon from '@mui/icons-material/FamilyRestroomSharp';
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp';
import PaymentsSharpIcon from '@mui/icons-material/PaymentsSharp';
import EditNotificationsSharpIcon from '@mui/icons-material/EditNotificationsSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import { listItemSecondaryActionClasses } from '@mui/material';
import NavbarLink from './NavbarLink';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


function Navbar() {
    const [navAnimation,setNavAnimation]= useState("60px");
   const hun =()=>{

        if(navAnimation=="60px")
        {   
            setNavAnimation("200px")
        }
        else{
            setNavAnimation("60px")
        }
        
   }

    const nav = [{
        name: 'Home',
        icon: <HomeIcon sx={{ color: ['white'] }} />,
        link: '/'
    }, {
        name: 'Student',
        icon: <SchoolSharpIcon sx={{ color: ['white'] }} />,
        link: '/allstudent'
    },
    {
        name: 'Teacher',
        icon: <AccountCircleIcon sx={{ color: ['white'] }} />,
        link: '/students'
    },
    {
        name: 'Exams',
        icon: <FamilyRestroomSharpIcon sx={{ color: ['white'] }} />,
        link: '/students'
    },
    {
        name: 'Attendance',
        icon: <BorderColorSharpIcon sx={{ color: ['white'] }} />,
        link: '/students'
    },
    {
        name: 'Notifications',
        icon: <EditNotificationsSharpIcon sx={{ color: ['white'] }} />,
        link: '/students'
    },
    {
        name: 'Fees Collections',
        icon: <PaymentsSharpIcon sx={{ color: ['white'] }} />,
        link: '/students'
    },
    {
        name: 'Settings',
        icon: <SettingsSharpIcon sx={{ color: ['white'] }} />,
        link: '/students'
    },



]
    return (
        <>
            <div style={{width:navAnimation}} className=' h-full w-[200px] bg-[#090d44dd] overflow-hidden transition-all'>

                <p onClick={hun} className='text-2xl text-white relative top-0 right-0'>
                    {
                        navAnimation=="60px"?<KeyboardArrowRightIcon  sx={{color:'white'}}/>:<KeyboardArrowLeftIcon/>
                    }
                 </p>

                {
                    nav.map((item) => { return <NavbarLink linkData={{ name:item.name, link:item.link,icon:item.icon}} navAnimation={navAnimation}/>})
                }
               
            </div>


        </>
    )
}

export default Navbar