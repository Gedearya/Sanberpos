import { useRouter } from 'next/router'
import React from 'react'

const FormForgotPassword = () => {
    const router = useRouter()

    return (
        <div className='flex flex-col gap-2 mt-5'>
            <div className='flex flex-col gap-1'>
                <p className='text-sm'>Password</p>
                <div className="flex relative border rounded-md">
                    <span className="rounded-l-md inline-flex  items-center px-3  bg-white   text-gray-500 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#707784]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                        </svg>
                    </span>
                    <input type="password"  className=" rounded-r-lg flex-1 appearance-none  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400  text-bold focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" placeholder="Type your password here" />
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='text-sm'>Confirm Password</p>
                <div className="flex relative border rounded-md">
                    <span className="rounded-l-md inline-flex  items-center px-3  bg-white   text-gray-500 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#707784]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                        </svg>
                    </span>
                    <input type="password"  className=" rounded-r-lg flex-1 appearance-none  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400  text-bold focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" placeholder="Confirm your password" />
                </div>
            </div>
            <button className='bg-primary w-full p-4 rounded-lg mt-10 text-white' onClick={() => router.push('/')}>Send</button>
        </div>
    )
}

export default FormForgotPassword