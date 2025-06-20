import React from 'react'
import Whycloveimage from '../assets/WhyCloveimage.png'
import Vector from '../assets/Vector.png'
function WhyClove() {
  return (
    <div className='w-full mt-4 mx-6 '>
        <div className='flex flex-col gap-2 items-center justify-center'>
                <h2 className='font-bold text-lg'>
                  Why Choose Clove Dental
                </h2>
                <p className='text-[#474747] text-center px-4 pr-12 md:px-0'>Clove Dental is India’s Leading dental care brand with 600+ clinic nationwide</p>
        </div>
            <div className='w-full rounded-2xl flex flex-col-reverse justify-center items-center md:flex-row gap-10 md:justify-between px-10 mt-5'>
                <div className='w-full md:w-[70%] mt-5 md:px-24 pr-6 gap-3 md:gap-10 flex flex-col'>
                    <div className='flex justify-between'>
                        <p className='font-semibold '>DORI - A.I. enabled Dental chair</p>
                        <img src={Vector} alt="" className='w-4 h-4' /> 
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-semibold '>10x Safety and 4 steps sterilization process</p>
                        <img src={Vector} alt="" className='w-4 h-4'/> 
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-semibold '>Experienced and Certified implantologist</p>
                        <img src={Vector} alt="" className='w-4 h-4'/> 
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-semibold '>Updated with world class equipments</p>
                        <img src={Vector} alt="" className='w-4 h-4'/> 
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-semibold '>Regular audits for safety protocols</p>
                        <img src={Vector} alt="" className='w-4 h-4'/> 
                    </div>
                </div>
                <div className= 'w-72 md:w-92 rounded-2xl overflow-hidden mr-12 md:mr-20'>
                    <img src={Whycloveimage} alt="" className='w-92 rounded-2xl overflow-hidden'/>
                </div>
            </div>
    </div>
  )
}

export default WhyClove