import React from 'react'

function Appointment() {
    return (
        <div className='bg-[#FFFAF5] w-full h-fit py-3 flex flex-col gap-2 overflow-hidden mt-10 rounded-xl'>
            <h1 className='text-center font-bold text-lg'>Book an Appointment With Clove Dentist in Delhi</h1>
            <div>
                <form action="" className='flex flex-col  gap-4 mt-5'>
                    <div className='flex flex-col md:flex-row gap-2 items-center justify-evenly'>
                        <input type="text" className='bg-[#ffffff] rounded-2xl border border-[#FFE0C4] px-3 w-64 md:w-96  py-1 text-[#777777]' placeholder='Name' />
                        <input type="text" className='bg-[#ffffff] rounded-2xl border border-[#FFE0C4] px-3 w-64 md:w-96 py-1 text-[#777777]' placeholder='Mobile Number' />
                        <div className='flex gap-0 items-center w-74 px-6'>
                            <input type="text" className='bg-[#ffffff] rounded-tl-2xl rounded-bl-2xl border border-[#FFE0C4] px-3 py-1 text-[#777777]' placeholder='Enter Capta' />
                            <p className='bg-[#462512] rounded-tr-2xl rounded-br-2xl text-white px-5 py-1 font-light '>1531</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-end items-center px-8 gap-4'>
                        <div className='flex gap-2 items-start'>
                        <input type="checkbox" className='border border-[#FFE0C4] h-4 w-4' />
                        <p className='font-semibold text-[#303030] text-sm'>I agree to CLOVE Dental’s Terms and Privacy Policy and consent to contact via phone, email, or SMS.</p>
                    </div>
                    <button className='bg-[#F58420] text-center w-fit px-6 py-3 rounded-2xl text-white font-semibold mb-2'>Book a Free Consultation</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Appointment