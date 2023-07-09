import React from 'react'

export const Navbar = () => {
  return (
    <div className='w-full text-violet-950 text-sm font-semibold 
    border-t-0 border-4 border-violet-950 shadow-2xl shadow-violet-300 rounded-b-3xl'>

      {/* Heading */}
      <p className='py-5 text-3xl text-center'>
        Busybud
      </p>

      <div className='py-5 flex w-fit mx-auto space-x-5'>



        <p className='m-auto px-1 cursor-pointer hover:text-blue-700 duration-700'>Home</p>
        <p className='m-auto px-1 cursor-pointer hover:text-blue-700 duration-700'>Products</p>
        <p className='m-auto px-1 cursor-pointer hover:text-blue-700 duration-700'>Services</p>
        <p className='m-auto px-1 cursor-pointer hover:text-blue-700 duration-700'>Contact</p>




      </div>




    </div>
  )
}
