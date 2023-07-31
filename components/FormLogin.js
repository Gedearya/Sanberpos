import { useAuthStore } from '@/states/AuthStore'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const FormLogin = () => {

    const router = useRouter()
    const [displayPassword, setDisplayPassword] = useState(false)
    const [input, setInput] = useState({
        email: "",
        password: "",
        router
    })
    const handleChange = (e) => setInput({ ...input, [e.target.name]: e.target.value })
    const handleDisplayPassword = () => setDisplayPassword(displayPassword === false ? true : false)
    const loginAction = useAuthStore((state) => state.postLogin)
    const onLogin = (e) => loginAction({ email: input.email, password: input.password, prevent: e, router : router })

    return (
        <form onSubmit={onLogin} className='flex flex-col gap-2'>
            <div className='flex flex-col gap-1'>
                <p className='text-sm'>Email</p>
                <div className="flex relative border rounded-md">
                    <span className="rounded-l-md inline-flex  items-center px-3  bg-white   text-gray-500 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#707784]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </span>
                    <input required onChange={handleChange} value={input.email} type="text" className=" rounded-r-lg flex-1 appearance-none  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400  text-bold focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" placeholder="ex. yourname@gmail.com" />
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='text-sm'>Password</p>
                <div className="flex relative border rounded-md">
                    <span className="rounded-l-md inline-flex  items-center px-3  bg-white   text-gray-500 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#707784]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                        </svg>
                    </span>
                    <input required onChange={handleChange} value={input.password} type={displayPassword ? 'text' : 'password'} className=" rounded-r-lg flex-1 appearance-none  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400  text-bold focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="password" placeholder="Type your password here" />
                    <span onClick={handleDisplayPassword} className="ml-2 rounded-l-md inline-flex  items-center px-3  bg-white   text-gray-500 text-sm">
                        {
                            displayPassword ?
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#707784]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#707784]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                        }
                    </span>
                </div>
            </div>
            <Link href={'/auth/forgot-password'}>
                <p className='text-right text-primary'>Forgot Password</p>
            </Link>
            <button className='bg-primary w-full p-4 rounded-lg mt-10 text-white' type='submit'>Login</button>
            <p className='text-center mt-4'>
                Dont have an account?
                <Link href={'/auth/register'}>
                    <span className='text-primary ml-1'>Sign Up</span>
                </Link>
            </p>
        </form>
    )
}

export default FormLogin