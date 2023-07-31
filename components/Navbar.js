import React, { useState } from 'react'
import NavbarAvatar from './NavbarAvatar'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Navbar() {
    const [display, setDisplay] = useState(false)
    const handleOpen = () => setDisplay(display ? false : true)
    const router = useRouter()
    console.log(router.asPath)

    const menu = ['dashboard', 'cashier', 'product', 'transaction']

    return (
        <>
            <div className={`w-full bg-white h-screen fixed top-0 z-50 duration-200 ${display === false ? 'hidden' : 'block'}`}>
                <div className='p-8' onClick={handleOpen}>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className=' w-full text-xl flex justify-center items-center list-none'>
                    <div className='flex-col text-center underline'>
                        <Link href={'/dashboard'} className='cursor-pointer block'>Dashboard</Link>
                        <Link href={'/dashboard/cashier'} className='cursor-pointer block'>Cashier</Link>
                        <Link href={'/dashboard/product'} className='cursor-pointer block'>Product</Link>
                        <Link href={'/dashboard/transaction'} className='cursor-pointer block'>Transaction</Link>
                        <button
                            className='text-red-600 underline'
                            onClick={() => {
                                Cookies.remove('token')
                                router.push('/')
                            }}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
            <nav className={`flex fixed w-full top-0 bg-white border p-4  justify-between items-center z-10`}>
                <div>
                    <button className='inline-flex gap-2  justify-center items-center border rounded-sm p-3 '>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                            </svg>
                        </div>
                        <p className='font-bold'>Fashion7</p>
                    </button>
                </div>
                <div className='px-4 py-4 lg:flex hidden gap-5'>
                    <div className='list-none flex gap-7'>
                        {
                            menu.map((item, index) => {
                                return (
                                    <Link key={index} href={item === 'dashboard' ? '/dashboard' : `/dashboard/${item}`} className={`cursor-pointer ${'/dashboard/' + item === router.asPath ? 'font-bold' : 'font-light'} `}>{item[0].toUpperCase() + item.slice(1)}</Link>
                                )
                            })
                        }
                    </div>
                    <div>|</div>
                    <NavbarAvatar />
                </div>

                <button className='lg:hidden block' onClick={handleOpen}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </nav>

        </>
    )
}