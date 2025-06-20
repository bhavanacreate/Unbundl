import React from 'react'
import Navbar from './Navbar'
import Main from './Main'

const Hero = () => {
  return (
    <div className='bg-[#FFFAF5] w-full h-fit py-3 flex flex-col gap-4 overflow-hidden'>
        <Navbar />
        <Main />
    </div>
  )
}

export default Hero