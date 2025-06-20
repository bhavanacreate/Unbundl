import React from 'react'
import logo from '../assets/logo.png'

function Footer() {
  return (
    <div className='w-full h-28 bg-[#462512] flex flex-col md:flex-row md:justify-between md:items-center text-white font-light'>
        <div className='md:px-8'>
            <img src={logo} alt="" className='w-36 h-12'/>
        </div>
        <div className='flex flex-col gap-2'>
            <div className='flex gap-x-1 mt-4 md:mt-0 md:gap-4 justify-end'>
                <p>Privacy Policy</p>
                <p>Terms Of Service</p>
                <p>Accessability</p>
            </div>
            <div className='border border-white '></div>
            <div className='text-sm font-light '>
                <p className='mb-3'>All Rights Reserved - 2024, Clove Dental (a brand name of M/s. SStar Dental Centre Private Limited). Managed By Unbund</p>
            </div>
        </div>
    </div>
  )
}

export default Footer