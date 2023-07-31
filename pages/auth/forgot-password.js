import FormForgotPassword from '@/components/FormForgotPassword'
import Image from 'next/image'
import React from 'react'

const ForgotPassword = () => {
    return (
        <div className='flex'>
            <div className='flex-1 bg-[#F7F7F7] relative lg:flex hidden'>
                <div className='relative w-full h-full border '>
                    <Image
                        src={'/assets/img/image-auth3.png'}
                        fill
                        style={{ objectFit: "contain" }}
                        alt='gambar_depan'
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={true}
                        placeholder="blur"
                        blurDataURL={'/assets/img/image-auth3.png'}
                    />
                </div>
                <div className='w-full flex  absolute bottom-20 justify-center items-center '>
                    <div className='w-4/5 mx-auto backdrop-blur-sm bg-white/30 rounded-sm p-5 py-10 '>
                        <p className='font-bold'>Tips!</p>
                        <p>Fashion is like eating, you shouldn't stick to the same menu.</p>
                    </div>
                </div>
            </div>
            <div className='flex-1 container mx-auto flex flex-col justify-center items-center  lg:h-screen'>
                <div className='mx-auto   flex flex-col gap-7 scale-75 '>
                    <h1 className='font-semibold text-5xl text-[#232B39]'>Forgot password</h1>
                    <h2 className='font-light text-xl text-[#707784] w-4/6'>Please enter new password using combination of character, number and symbol</h2>
                    <FormForgotPassword />
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword