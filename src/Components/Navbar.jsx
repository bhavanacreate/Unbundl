import React from 'react'
import clove from '../assets/clove.png'
import book from '../assets/book.png'
import call from '../assets/call.png'

const Navbar = () => {
  return (
    <div className='flex justify-between px-6 md:px-20 items-center w-full'>
        <div>
            <img src={clove} alt="" className=' h-8 md:h-12'/>
        </div>
        <div className='flex gap-6 items-center '>
            <button className=' items-center gap-3 rounded-2xl hidden md:flex bg-[#F8943F] text-white border border-[#DE6F0D] px-4 py-1 font-semibold cursor-pointer'><img src={book} alt="" className='w-5'/> Book Appointment</button>
            <button className='flex items-center gap-3 rounded-2xl border border-[#462512] px-4 py-1 font-semibold cursor-pointer'><img src={call} className='w-3'/> 985-6589-510</button>
        </div>
    </div>
  )
}

export default Navbar