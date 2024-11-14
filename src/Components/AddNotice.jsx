import React from 'react'

function AddNotice() {
  return (
    <>
      <div className='bg-[#090d44dd] h-screen flex  justify-center items-center'>
        <div className='bg-white w-[65%] h-[500px] rounded-md  flex flex-col justify-center items-center'>
          
          <form className=' h-[350px] w-[85%]  flex flex-col  justify-around items-center'>
            <div className='h-[75px]  w-[30%] flex flex-col justify-around'>
              <p className='font-sans text-[18px]'> Notice Date:</p>
              <input className='w-[250px] rounded-sm text-xl p-1' type='date' placeholder='Enter the date' />
            </div>
            <div className='  w-[70%] flex flex-col justify-center items-center'>
              <p className='font-sans text-[18px]'>Notice:</p>
              <textarea style={{border:'1px solid gray'}} className='w-[60%] h-[150px]'>

              </textarea>
              
            </div>


            <div className='h-[75px]   w-[30%] flex flex-col justify-around'>
              <p className='font-sans text-[18px]'>Enter the file:</p>
              <input className='w-[250px] rounded-sm text-xl p-1' type='file' placeholder='Enter the File' />
            </div>


            
            <input className='w-[130px] h-[40px] mt-6  bg-[#eb3a3a] text-1xl p-2 text-white hover:bg-orange-200' type='submit' value="Add Notice" />
          </form>

        </div>

      </div>


    </>
  )
}

export default AddNotice