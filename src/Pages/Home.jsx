import React from 'react'
import Hero from '../Components/Hero'
import Treatements from '../Components/Treatements'
import Smaile from '../Components/smaile'
import WhyClove from '../Components/WhyClove'
import PatientsSay from '../Components/PatientsSay'
import Appointment from '../Components/Appointment'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className='w-full flex flex-col gap-4'>
        <Hero/>
        <Treatements/>
        <Smaile />
        <WhyClove />
        <PatientsSay />
        <div className='w-full px-8 md:px-20 '>
          <Appointment />
        </div>
        <div className='w-full px-8 py-2 md:px-20 bg-[#462512]'>
          <Footer />
        </div>
    </div>
  )
}

export default Home