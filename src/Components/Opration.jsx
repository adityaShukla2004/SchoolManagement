import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import MinimizeIcon from '@mui/icons-material/Minimize';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddStudent from './AddStudent';
import { Link } from 'react-router-dom';

export default function Opration() {

    const opration = [
        {
            opName: 'Add Student',
            icon: <AddIcon />,
            subIcon: <PermIdentityIcon />,
            link: '/addstudent'



        },
        {
            opName: 'Add Teacher',
            icon: <AddIcon />,
            subIcon: <PermIdentityIcon />,
            link: '/addteacher'

        },
        {
            opName: 'Add Notice',
            icon: <AddIcon />,
            subIcon: <EditNotificationsIcon />,
            link: '/addnotice'

        },
        {
            opName: 'Delete Student',
            icon: <MinimizeIcon />,
            subIcon: <PermIdentityIcon />,
            link: '/addstudent'

        },
        {
            opName: 'Delete Teacher',
            icon: < MinimizeIcon />,
            subIcon: <PermIdentityIcon />,
            link: '/addstudent'


        },
        {
            opName: 'Edit Fees Details',
            icon: <EditCalendarIcon />,
            subIcon: <AttachMoneyIcon />,
            link: '/addstudent'

        }





    ]
    return (
        <>
            <div className='flex justify-center flex-wrap cursor-pointer'>
                {
                    opration.map((item) =>
                        <Link to={item.link}>
                            <div style={{ border: '2px solid #eb3a3a' }} className='flex flex-col justify-center items-center w-[150px] h-[100px] m-2 rounded-md shadow-slate-500'>
                                {item.icon}

                                <p className='text-[#eb3a3a] text-1xl font-semibold'>{item.opName}</p>

                                {
                                    item.subIcon
                                }
                            </div>

                        </Link>
                    )
                }
            </div>
        </>
    )
}
