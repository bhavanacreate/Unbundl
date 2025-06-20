import React from 'react'
import image from '../assets/image.png'
import image2 from '../assets/mobile.png'
const Main = () => {
    return (
        <div className='flex flex-col md:flex-row text-lg w-full m-0 '>
            <div className='hidden md:flex'>
                <img src={image} alt="" className='lg:max-w-[967px]' />
            </div>
            <div className='flex md:hidden'>
                <img src={image2} alt="" className='w-full' />
            </div>
            <div className='flex flex-col  lg:px-12 border border-[#FFE0C4] items-center'>
                <div className='px-8 lg:px-8 pt-12'>
                    <div className='flex flex-col px-8  gap-4'>
                        <h2 className='font-semibold text-black lg:text-lg text-center'>Get Expert Dental Guidance in Delhi</h2>
                        <p className='text-sm text-[#474747]'>Book your free consultation today and take the first step towards healthy, beautiful teeth.</p>
                    </div>
                    <form action="" className='flex flex-col  gap-4 mt-5'>
                        <input type="text" className='bg-[#ffffff] rounded-2xl border border-[#FFE0C4] mx-10 px-5  lg:px-3  py-1 text-[#777777]' placeholder='Name' />
                        <input type="text" className='bg-[#ffffff] rounded-2xl border border-[#FFE0C4] mx-10 px-5 lg:px-3  py-1 text-[#777777]' placeholder='Mobile Number' />
                        <div className='flex gap-0 items-center'>
                            <input type="text" className='bg-[#ffffff] rounded-tl-2xl rounded-bl-2xl border border-[#FFE0C4] px-3 max-w-56 ml-10  md:w-80  py-1 text-[#777777]' placeholder='Enter Capta' />
                            <p className='bg-[#462512] rounded-tr-2xl rounded-br-2xl text-white px-5 py-1 font-light '>1531</p>
                        </div>
                        <div className='flex gap-2 items-start mx-10'>
                            <input type="checkbox" className='border border-[#FFE0C4] h-6 w-6' />
                            <p className='font-light text-[#303030] text-sm'>I agree to CLOVE Dental’s Terms and Privacy Policy and consent to contact via phone, email, or SMS.</p>
                        </div>
                        <button className='bg-[#F58420] text-center w-[80%] m-auto md:w-full py-3 rounded-2xl text-white font-semibold mb-2'>Book a Free Consultation</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Main