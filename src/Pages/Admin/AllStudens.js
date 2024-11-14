import React from 'react'
import Header from '../../Components/Header'

function AllStudens() {
    const allstudent=[
        {
            id:"12",
            name:"Aditya shukla",
            fatherName:"Ashok shukla",
            email:"aditya@gmail.com",
            city:"Maihar",
            phone:"4757348348",
            Gender:"Male",
            class:"12th"

        },
        {
            id:"12",
            name:"Aditya shukla",
            fatherName:"Ashok shukla",
            email:"aditya@gmail.com",
            city:"Maihar",
            phone:"4757348348",
            Gender:"Male",
            class:"12th"

        },
        {
            id:"12",
            name:"Aditya shukla",
            fatherName:"Ashok shukla",
            email:"aditya@gmail.com",
            city:"Maihar",
            phone:"4757348348",
            Gender:"Male",
            class:"12th"

        },
        {
            id:"12",
            name:"Aditya shukla",
            fatherName:"Ashok shukla",
            email:"aditya@gmail.com",
            city:"Maihar",
            phone:"4757348348",
            Gender:"Male",
            class:"12th"

        },
        {
            id:"12",
            name:"Aditya shukla",
            fatherName:"Ashok shukla",
            email:"aditya@gmail.com",
            city:"Maihar",
            phone:"4757348348",
            Gender:"Male",
            class:"12th"

        }
    ]
  return (
    <>
         <Header/>

         <table className='w-[80%] h-[60px] m-auto bg-slate-200 mt-6'>
               <thead>
                   <tr>
                     <th>Id</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Phone Number</th>
                     <th>City</th>
                     <th>Class</th>
                     <th>Gender</th>

                   </tr>
               </thead>
               <tbody>
                   {
                    allstudent.map((item)=><tr className='w-[100%]'>
                         <td>{item.id}</td>
                         <td>{item.name}</td>
                         <td>{item.email}</td>
                         <td>{item.phone}</td>
                         <td>{item.city}</td>
                         <td>{item.class}</td>
                         <td>{item.Gender}</td>
                         

                    </tr>)
                   }
               </tbody>
         </table>
    </>
  )
}

export default AllStudens