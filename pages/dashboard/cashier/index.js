import Layout from '@/widgets/Layout'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Cashier() {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        axios.get('https://sanber-pos-backend.sanbercloud.com/api/products')
            .then((res) => {
                setData(res.data)
            })
    }

    const rupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(number);
    }

  
    return (
        <Layout>
            <div className='container mx-auto py-36 px-5 bg-[#F4F5F6] '>
                <h1 className='font-bold text-2xl '>Cashier</h1>
                <div className=''>
                    {/* <div className='w-full rounded-md bg-white p-5'>
                        <p className='mb-6 border-l-4 pl-2 border-l-black'>Category</p>
                        <div className='flex gap-2 flex-wrap'>
                            <div className='bg-[#F4F5F6] px-5 py-2 rounded-md '>
                                <h1 className='font-bold '>All</h1>
                                <p className='text-xs text-[#707784]'>4357 Product</p>
                            </div>
                            <div className='bg-[#F4F5F6] px-5 py-2 rounded-md '>
                                <h1 className='font-bold '>Man</h1>
                                <p className='text-xs text-[#707784]'>4357 Product</p>
                            </div>
                        </div>
                    </div> */}
                    <div className='w-full rounded-md bg-white p-5 mt-10'>
                        <p className='mb-6 border-l-4 pl-2 border-l-black'>Product List</p>
                        <div className='flex gap-2 flex-wrap  justify-center lg:justify-start items-center'>
                            {
                                data !== null && data.map((e, index) => {
                                    return <div key={index} className='p-5 rounded-md hover:cursor-pointer hover:shadow-md hover:scale-105 duration-150'>
                                        <img className='relative w-48 h-48 bg-[#F4F5F6] rounded-lg' src={e.image_urls[0]} />
                                        <div className='mt-5'>
                                            <p className='text-xs text-[#707784] font-thin'>Kategori {e.category_id}</p>
                                            <p className='text-xs text-[#232B39] font-normal'>{e.name}</p>
                                            <p className='flex gap-1 flex-wrap mt-5'>
                                                <span className='text-xs text-[#232B39] font-normal'>IDR {rupiah(e.price)}</span>
                                            </p>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
              
            </div>
        </Layout>
    )
}
