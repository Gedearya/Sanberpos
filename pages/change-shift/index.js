import FormChangeShift from '@/components/FormChangeShift'
import Image from 'next/image'
import React from 'react'

const ChangeShift = () => {
    return (
        <div className='flex'>
            <div className='flex-1 bg-[#F7F7F7] relative lg:flex hidden'>
                <div className='relative w-full h-full border '>
                    <Image
                        src={'/assets/img/image-auth2.png'}
                        fill
                        style={{ objectFit: "contain" }}
                        alt='gambar_depan'
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={true}
                        placeholder="blur"
                        blurDataURL={'/assets/img/image-auth2.png'}
                    />
                </div>
                <div className='w-full flex  absolute bottom-20 justify-center items-center '>
                    <div className='w-4/5 mx-auto backdrop-blur-sm bg-white/30 rounded-sm p-5 py-10 '>
                        <p className='font-bold'>Tips!</p>
                        <p>Fashion is like eating, you shouldn't stick to the same menu.</p>
                    </div>
                </div>
            </div>
            <div className='flex-1 container mx-auto flex flex-col justify-center items-center  lg:h-screen '>
                <div className='mx-auto  flex flex-col gap-7 scale-75 w-full '>
                    <div>
                        <button className='inline-flex gap-2 justify-center items-center border rounded-md p-1 '>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                                </svg>

                            </div>
                            <p className='font-bold'>Fashion7</p>
                        </button>
                    </div>
                    <h1 className='font-semibold text-5xl -mb-5 text-[#232B39]'>Shift Management</h1>
                    <h2 className='font-light text-xl text-[#707784]'>Choose your account to start to work.</h2>
                    <FormChangeShift />
                </div>
            </div>
        </div>
    )
}

export default ChangeShift