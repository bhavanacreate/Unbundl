import React from 'react'
import Box from './Box'
import patient from '../assets/patient.png'
import patient2 from '../assets/patient2.png'
import patient3 from '../assets/patient3.png'
import patient4 from '../assets/patient4.png'

function Smaile() {
  return (
    <div className='hidden md:flex md:flex-col w-full mt-4 mx-6'>
         <div className='flex flex-col gap-2 items-center justify-center'>
                <h2 className='font-bold text-lg'>
                  Real Smiles, Real Transformations
                </h2>
                <p className='text-[#474747]'>See the life-changing results our dental implant patients enjoy</p>
            </div>
            <div className='px-12 flex justify-evenly mt-6'>
                <Box image={patient} name={'Aditya Verma'} city={'Banglore'}/>
                <Box image={patient2} name={'Kavita Sharma'} city={'Mumbai'}/>
                <Box image={patient3} name={'Neha Joshi'} city={'New Delhi'}/>
                <Box image={patient4} name={'Viram Desai'} city={'Chennai'}/>
            </div>
    </div>
  )
}

export default Smaile