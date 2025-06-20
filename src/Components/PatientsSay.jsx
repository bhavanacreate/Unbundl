import React from 'react'
import Container from './Container'
import say from '../assets/say.gif'
import say2 from '../assets/say2.png'
import say3 from '../assets/say3.png'
import say4 from '../assets/say4.png'
import say5 from '../assets/say5.png'
import say6 from '../assets/say6.png'

function PatientsSay() {
  return (
    <div  className='w-full mt-4 mx-6 hidden md:flex md:flex-col'>
        <div className='flex flex-col gap-2 items-center justify-center'>
                <h2 className='font-bold text-lg'>
                  What Our Patients Say
                </h2>
                <p className='text-[#474747]'>Real smiles, real stories. Here’s what our patients love about their CLOVE Dental experience!</p>
        </div>
        <div className='px-12 grid grid-cols-6 gap-3 mt-4 h-80' >
               <Container image={say} name={'Aditya Verma'} city={'Banglore'}/>
                <Container image={say2} name={'Jaspeet'} city={'Mumbai'}/>
                <Container image={say3} name={'Abhishek'} city={'New Delhi'}/>
                <Container image={say4} name={'Kalpana'} city={'Chennai'}/>
                <Container image={say5} name={'Ishika'} city={'Chennai'}/>
                <Container image={say6} name={'Neha'} city={'Chennai'}/>
        </div>
    </div>
  )
}

export default PatientsSay