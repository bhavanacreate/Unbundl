import React from 'react'

function TreatementsImage({image}) {
  return (
    <div className='flex flex-col md:flex-row w-xs  md:w-xl   border border-[#F58420] rounded-2xl m-4'>
        <div className='rounded-2xl  md:w-70  overflow-hidden min-h-full'>
            <img src={image} alt="" className='w-fit h-full  '/>
        </div>
        <div className='flex flex-col gap-1 py-3 ml-3'>
            <p className='text-[#000000] font-bold text-lg'>Root Canal Treatment</p>
            <p className='text-[#474747]  '>Ideal for infected or damaged tooth</p>
            <p className='text-[#000000] font-bold text-lg'>Types of RCT</p>
            <ul className='list-disc list-inside text-[#474747]'>
                <li>Root Canal Treatment</li>
                <li>Spilt RCT</li>
                <li>Split RCT with rubber dam</li>
                <li>Split RCT with laser</li>
            </ul>
            <p className='text-lg font-bold text-[#F58420]'>Starting Price</p>
            <p className='text-[#1A1A1A] font-extrabold text-lg'>₹ 19,999</p>
            <button className='bg-[#F58420] text-white font-semibold text-center mr-6 px-3 py-1 rounded-2xl'>Get Free Consultation</button>
        </div>
    </div>
  )
}

export default TreatementsImage