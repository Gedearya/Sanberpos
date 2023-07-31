import { useRouter } from 'next/router'
import React from 'react'

const FormChangeShift = () => {
    const router = useRouter()

    return (
        <div className='mt-6'>
            <div className='w-full bg-[#FAFAFA] flex p-5 border cursor-pointer hover:scale-105 duration-500 hover:shadow-md '>
                <div className='grow flex gap-5 '>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[#A0A8B0]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='font-bold text-lg'>Elijah Gulgowski</h1>
                        <p className='text-[#707784]'>(599) 400-7994</p>
                    </div>
                </div>
                <div className='text-[#707784]'><p>08.00 AM - 01.00 PM</p></div>
            </div>
            <div className='flex justify-end'>
                <button className='bg-primary p-4 rounded-lg mt-10 text-white px-24' onClick={() => router.push('/dashboard')}>Continue</button>
            </div>
        </div>
    )
}

export default FormChangeShift