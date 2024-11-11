import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import LogoutIcon from '@mui/icons-material/Logout';


function Header() {
    return (
        <>
            <div className='w-full h-[60px] bg-[#090d44dd] flex justify-between'>
                <div className=' ml-2 flex justify-center  items-center'>
                    <Stack direction="row" spacing={2}>
                       
                        <Avatar sx={{ bgcolor: deepOrange[500] ,width:'50px',height:'50px' }}>s</Avatar>
                       
                    </Stack>
                    <h2 className='ml-1 text-xl text-[#eb3a3a] font-serif font-bold'>Manage School</h2>
                </div>
                <div className='flex flex-col m-2 justify-center items-center'>
                       <LogoutIcon sx={{ font:'20px',color:'#eb3a3a'}}/>
                       <h2 className='font-bold text-white'>Logout</h2>
                </div>
            </div>
        </>
    )
}

export default Header