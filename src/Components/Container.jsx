import React from 'react'

function Container({image,name,city}) {
  return (
     <div className='w-52 h-96'>
        <div className='w-full h-80 rounded-2xl overflow-hidden'>
            <img src={image} alt="" className='w-fit h-80 rounded-2xl'/>
        </div>
        <div className='mt-1 flex justify-between items-center px-2'>
            <p className='font-semibold'>{name}</p>
            <p className='font-semibold text-[#F58420]'>{city}</p>
        </div>
    </div>
  )
}

export default Container