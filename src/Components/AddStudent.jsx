import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function AddStudent() {
  return (
    <>
      <div className='bg-[#090d44dd] h-screen flex  justify-center items-center'>
        <div className='bg-white w-[85%] h-[500px] rounded-md  flex flex-col justify-center items-center'>
          <div className='h-[100px'>
            <AccountCircleIcon sx={{ fontSize: 100, color: '#eb3a3a' }} />
          </div>
          <form className=' h-[350px] w-[85%]  flex flex-col flex-wrap justify-around items-center'>
            <div className='h-[75px]  w-[30%] flex flex-col justify-around'>
              <p className='font-sans text-[18px]'>Enter the Name:</p>
              <input className='w-[250px] rounded-sm text-xl p-1' type='text' placeholder='Enter the name' />
            </div>
            <div className='h-[75px]  w-[30%] flex flex-col justify-around'>
              <p className='font-sans text-[18px]'>Enter the Father name:</p>
              <input className='w-[250px] rounded-sm text-xl p-1' type='text' placeholder='Enter the Father Name' />
            </div>


            <div className='h-[75px]   w-[30%] flex flex-col justify-around'>
              <p className='font-sans text-[18px]'>Enter the Email:</p>
              <input className='w-[250px] rounded-sm text-xl p-1' type='email' placeholder='Enter the Email' />
            </div>


            <div className='h-[75px]  w-[30%] flex flex-col justify-around'>
              <p className='font-sans text-[18px]'>Enter the Password:</p>
              <input className='w-[250px] rounded-sm text-xl p-1' type='Password' placeholder='Enter the Email' />
            </div>


            <div className='h-[75px]  w-[30%] flex flex-col justify-around'>
              <p className='font-sans text-[18px]'>Enter the Address:</p>

              <input className='w-[250px] rounded-sm text-xl p-1' type='text' placeholder='Enter the Address' />
            </div>


            <div className='h-[75px]   w-[30%] flex flex-col justify-around'>
              <p className='font-sans text-[18px]'>Enter the Pin Code:</p>
              <input className='w-[250px] rounded-sm text-xl p-1' type='text' placeholder='Enter the Pin code' />
            </div>


            <div className='h-[75px]  w-[30%] flex flex-col justify-around'>
              <p className='font-sans text-[18px]'>Enter the Phone Number:</p>
              <input className='w-[250px] rounded-sm text-xl p-1' type='text' placeholder='Enter the Phone Number' />
            </div>

            <div className='h-[75px]  w-[30%] flex  justify-center items-center '>
              <p className='font-sans text-[18px]'>Enter the  Class:</p>
              <select className='ml-4'>
                <option>
                  Class
                </option>
                <option>
                  1
                </option>
                <option>
                  2
                </option>
                <option>
                  3
                </option>
                <option>
                  4
                </option>
                <option>
                  5
                </option>
                <option>
                  6
                </option>

                <option>
                  7
                </option>
                <option>
                  8
                </option>
                <option>
                  9
                </option>
                <option>
                  10
                </option>
                <option>
                  11
                </option>
                <option>
                  12
                </option>
              </select>
            </div>

            <div className='h-[75px]  w-[30%] flex flex-col justify-around'>
              <p className='font-sans text-[18px]'>Enter the Phone Branch:</p>
              <select>
                <option>
                  Branch
                </option>
                <option>
                  Commerce
                </option>
                <option>
                  Math
                </option>
                <option>
                  Bio
                </option>
                <option>
                  Art
                </option>
              </select>
            </div>

            <div className='h-[75px]   w-[30%] flex flex-col justify-around'>


              <p className='font-sans text-[18px]'>Enter the Phone Gender:</p>
              <select>
                <option>
                  Gender
                </option>
                <option>
                  Male
                </option>
                <option>
                  Female
                </option>
                <option>
                  other
                </option>
              </select>

            </div>
            <input className='w-[130px] h-[40px]  bg-[#eb3a3a] text-1xl p-2 text-white hover:bg-orange-200' type='submit' value="Add Student" />
          </form>

        </div>

      </div>


    </>
  )
}

export default AddStudent