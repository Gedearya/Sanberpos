import FormCreate from '@/components/FormCreate'
import Layout from '@/widgets/Layout'
import React, { useState } from 'react'

export default function Product() {
  
    return (
        <Layout>
            <div className='container mx-auto py-36 px-5 bg-[#F4F5F6] '>
                {/* <h1 className='font-bold text-2xl '>Cashier</h1> */}
                <div className=''>
                    <div className='w-full rounded-md bg-white p-5 '>
                        <div className='mb-6 flex justify-between items-center'>
                            <p className=' border-l-4 pl-2 border-l-black'>Edit Product Informations</p>
                        </div>

                        <FormCreate />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
