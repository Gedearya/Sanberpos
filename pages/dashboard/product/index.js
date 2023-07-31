import TableProduct from '@/components/TableProduct'
import Layout from '@/widgets/Layout'
import Link from 'next/link'
import React from 'react'
import { apiAuth } from '@/utils/apiAuth'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ModalCategory from '@/components/ModalCategory'
import { getStorage, ref, deleteObject } from "firebase/storage";
import { storage } from '@/utils/firebase'

export default function Product() {

    const router = useRouter()
    const [data, setData] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        axios.get('https://sanber-pos-backend.sanbercloud.com/api/products')
            .then((res) => {
                console.log(res)
                setData(res.data)
            })
    }

    const addEdit = (e) => {
        router.push('/dashboard/product/edit/' + e.target.value)
    }

    const addDelete = async (e) => {

        //delete image from firbease
        await axios.get('https://sanber-pos-backend.sanbercloud.com/api/products/' + e.target.value)
            .then((res) => {
                const desertRef = ref(storage, res.data.image_urls[0]);
                deleteObject(desertRef).then(() => {
                    // File deleted successfully
                }).catch((error) => {
                    // Uh-oh, an error occurred!
                    alert(error)
                });
            })
        
        //delete data api
        await axios.delete('https://sanber-pos-backend.sanbercloud.com/api/products/' + e.target.value, apiAuth.fetchHeaders())
            .then((res) => {
                fetchData()
            })
    }


    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <Layout>
            <div className='container mx-auto py-36 px-5 bg-[#F4F5F6] '>
                <h1 className='font-bold text-2xl '>Product</h1>
                <div className='mt-5'>
                    <div className='w-full rounded-md bg-white p-5 '>
                        <div className='mb-6 flex justify-between items-center'>
                            <p className=' border-l-4 pl-2 border-l-black'>Product List</p>
                            <div className='flex flex-wrap gap-3'>
                                <button onClick={openModal} className='bg-primary text-white text-sm px-5 py-2 rounded-md'>Add Category</button>
                                <Link href={'/dashboard/product/create'} className='bg-primary text-white text-sm px-5 py-2 rounded-md'>Add Product</Link>
                            </div>
                        </div>

                        {data !== null && <TableProduct data={data} addDelete={addDelete} addEdit={addEdit} />}
                    </div>
                </div>
            </div>

            <ModalCategory isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal} openModal={openModal} />
        </Layout>
    )
}
