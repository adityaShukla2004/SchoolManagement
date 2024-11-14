import React from 'react'
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import { Link } from 'react-router-dom';

function NavbarLink({linkData,navAnimation}) {
  return (
      <>
           <div style={{
                    borderBottom: '1px solid white'
                }} className=' w-[90%] p-2 flex justify-start  border-white hover:bg-orange-200 '>
                    { linkData.icon}
                    <p className='text-slate-300 ml-3 hover:text-black'><Link to={linkData.link}>{navAnimation=="200px"?linkData.name:""}</Link></p>
                </div>
      </>
  )
}

export default NavbarLink