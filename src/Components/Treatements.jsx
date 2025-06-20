import React from 'react'
import TreatementsImage from './TreatementsImage'
import tooth from '../assets/tooth.png'
import tooth2 from '../assets/image2.png'

function Treatements() {
    return (
        <div className='w-full mt-4 mx-6'>
            <div className='flex flex-col gap-2 items-center justify-center'>
                <h2 className='font-bold text-lg'>
                    Types of Root Canal Treatments
                </h2>
                <p className='text-[#474747]'>In a root canal, the dentist removes infected pulp, cleans the tooth, and fills it with special material.</p>
            </div>
             <div className='flex flex-col md:flex-row justify-evenly gap-2 md:gap-12 md:px-16'>
                    <TreatementsImage image={tooth}/>
                    <TreatementsImage image={tooth2}/>
                </div>
        </div>
    )
}

export default Treatements