import FormLogin from '@/components/FormLogin'
import Cookies from 'js-cookie'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading';

const Home = () => {
    const router = useRouter()
    const [displayScreen, setDisplayScreen] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setDisplayScreen(false)
        },3000)
    },[])

    if (Cookies.get('token') !== undefined) {
        router.push('/dashboard')
    }

    if (displayScreen) {
        return <div className='flex h-screen justify-center items-center'>
            <ReactLoading type={'bubbles'} color={'#5E59FF'} height={100} width={100} />
        </div>
    } else {
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
                <div className='flex-1 container mx-auto flex flex-col justify-center items-center  lg:h-screen'>
                    <div className='mx-auto   flex flex-col gap-7 scale-75 '>
                        <div className='flex justify-start items-center gap-2'>
                            <div className='relative w-8 h-5'>
                                <Image
                                    src={'/assets/img/logo.png'}
                                    fill
                                    alt='logo'
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <h1 className='font-bold text-[#232B39]'>Nija Works</h1>
                        </div>
                        <h1 className='font-semibold text-5xl text-[#232B39]'>Login to POS account</h1>
                        <h2 className='font-light text-xl text-[#707784]'>Welcome back! Please enter your details.</h2>
                        <button className='border border-primary w-full rounded-md flex justify-center items-center gap-2'>
                            <div className='relative w-5 h-5'>
                                <Image
                                    src={'/assets/img/google.png'}
                                    fill
                                    alt='logo_google'
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <p className='text-[#5E59FF] p-3'>Login with Google</p>
                        </button>
                        <div className="flex justify-center items-center gap-2">
                            <div className='bg-[#E5E7EB] h-[1px] grow rounded-md'></div>
                            <div className='text-[#707784] '>Or</div>
                            <div className='bg-[#E5E7EB] h-[1px] grow rounded-md'></div>
                        </div>
                        <FormLogin />
                    </div>
                </div>
            </div>
        )
    }

}

export default Home