import { apiAuth } from '@/utils/apiAuth'
import { storage } from '@/utils/firebase'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { v4 } from 'uuid'
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from "firebase/storage";

const FormCreate = () => {

    const router = useRouter()
    const [inputfile, setinputfile] = useState(null)
    const [imageUrls, setImageUrls] = useState([]);
    const [input, setInput] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
        sku: "",
        category_id: "",
        image_urls: [...imageUrls]
    })
    const [data2, setData2] = useState(null)
    const [currId, setcurrId] = useState(-1)

    useEffect(() => {
        if (router.query.id !== undefined) {
            fetchDataId()
            setcurrId(router.query.id)
        }
        fetchData2()
    }, [])

    // console.log(input)

    const fetchDataId = () => {
        axios.get('https://sanber-pos-backend.sanbercloud.com/api/products/' + router.query.id)
            .then((res) => {
                console.log(res)
                setInput({
                    name: res.data.name,
                    description: res.data.description,
                    price: res.data.price,
                    stock: res.data.stock,
                    sku: res.data.sku,
                    category_id: res.data.category_id,
                    image_urls: []
                })
            })
    }
    const fetchData2 = () => {
        axios.get('https://sanber-pos-backend.sanbercloud.com/api/categories')
            .then((res) => {
                // console.log(res)
                setData2(res.data)
            })
    }

    const addProduct = (e) => {
        e.preventDefault()
        console.log(input)
        console.log(currId)
        const {
            name,
            description,
            price,
            stock,
            sku,
            category_id,
            image_urls
        } = input
        if (currId === -1) {
            axios.post('https://sanber-pos-backend.sanbercloud.com/api/products', {
                name,
                description,
                price,
                stock,
                sku,
                category_id,
                image_urls
            }, apiAuth.fetchHeaders())
                .then((res) => {
                    router.push('/dashboard/product')
                })
                .catch((err) => console.log(err))
        } else {
            axios.put('https://sanber-pos-backend.sanbercloud.com/api/products/' + currId, {
                name,
                description,
                price,
                stock,
                sku,
                category_id,
                image_urls
            }, apiAuth.fetchHeaders())
                .then((res) => {
                    router.push('/dashboard/product')
                })
                .catch((err) => console.log(err))
        }

        setInput({
            name: "",
            description: "",
            price: "",
            stock: "",
            sku: "",
            category_id: "",
            image_urls: []
        })
        setcurrId(-1)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setInput({ ...input, [name]: value })
    }

    const uploadFile = () => {
        if (inputfile == null) return;
        const imageRef = ref(storage, `images/${inputfile.name + v4()}`);
        uploadBytes(imageRef, inputfile).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrls((prev) => [...prev, url]);
                setInput({ ...input, image_urls: [...input.image_urls, url] })
            });
        });
        setinputfile(null)
    };

    console.log(imageUrls)
    // console.log(input)
    // console.log(input)
    return (
        <form className='mt-10' onSubmit={addProduct}>
            <div className='flex w-full gap-7 mt-4'>
                <div className='flex-1'>
                    <p className='font-bold'>Product Name</p>
                    <p className='text-[#A0A8B0]'>Do not exceed 20 characters when entering the product name.</p>
                </div>
                <div className='w-full flex-1'>
                    <input value={input.name} onChange={handleChange} name='name' required className='w-full border-2 border-gray-200 rounded-lg text-xs p-2' placeholder='Product Name' />
                </div>
            </div>
            <div className='flex w-full gap-7 mt-4'>
                <div className='flex-1'>
                    <p className='font-bold'>SKU</p>
                    <p className='text-[#A0A8B0]'>SKU is a scannable barcode and is the unit of measure in which the stock of a product is managed.</p>
                </div>
                <div className='w-full flex-1'>
                    <input value={input.sku} onChange={handleChange} name='sku' required className='w-full border-2 border-gray-200 rounded-lg text-xs p-2' placeholder='SKU' />
                </div>
            </div>
            <div className='flex w-full gap-7 mt-4'>
                <div className='flex-1'>
                    <p className='font-bold'>Price</p>
                </div>
                <div className='w-full flex-1'>
                    <input value={input.price} onChange={handleChange} name='price' type='number' required className='w-full border-2 border-gray-200 rounded-lg text-xs p-2' placeholder='Price' />
                </div>
            </div>
            <div className='flex w-full gap-7 mt-4'>
                <div className='flex-1'>
                    <p className='font-bold'>Stock</p>
                </div>
                <div className='w-full flex-1'>
                    <input value={input.stock} onChange={handleChange} name='stock' type='number' required className='w-full border-2 border-gray-200 rounded-lg text-xs p-2' placeholder='Stock' />
                </div>
            </div>
            <div className='flex w-full gap-7 mt-4'>
                <div className='flex-1'>
                    <p className='font-bold'>Category</p>
                    <p className='text-[#A0A8B0]'>Please select your product category from the list provided.</p>
                </div>
                <div className='w-full flex-1'>
                    <select name='category_id' onChange={(e) => setInput({ ...input, category_id: e.target.value })} value={input.category_id} className='w-full border-2 border-gray-200 rounded-lg text-xs p-2' >
                        <option></option>
                        {
                            data2 !== null && data2.map((e, i) => <option key={i} value={e.id}>{e.name}</option>)
                        }
                    </select>
                </div>
            </div>
            <div className='flex w-full gap-7 mt-4'>
                <div className='flex-1'>
                    <p className='font-bold'>Description</p>
                </div>
                <div className='w-full flex-1'>
                    <textarea value={input.description} onChange={handleChange} name='description' required className='w-full border-2 border-gray-200 rounded-lg text-xs p-2' placeholder='Description' />
                </div>
            </div>
            <div className='flex w-full gap-7 mt-4'>
                <div className='flex-1'>
                    <p className='font-bold'>Image</p>
                    <p className='text-[#A0A8B0]'>Recommended minimum width 1080px X 1080px, with a max size of 5MB, only *.png, *.jpg and *.jpeg image files are accepted.</p>
                </div>
                <div className='w-full flex-1 '>
                    {imageUrls.map((url, index) => {
                        return <img key={index} src={url} />;
                    })}
                    {
                        imageUrls.length === 0 && <div className='flex gap-2 mb-2'>
                            <input
                                onChange={(event) => {
                                    setinputfile(event.target.files[0]);
                                }}
                                className='w-full border-2 border-gray-200 rounded-lg text-xs p-2' type='file' placeholder='Description' />
                            <button onClick={uploadFile} type='button' className='bg-primary text-white text-xs px-3 rounded-md'>Add</button>
                        </div>
                    }
                </div>
            </div>
            <button type='submit' className='bg-primary text-white text-sm px-5 py-2 rounded-md w-full mt-10'>Add Product</button>
        </form>
    )
}

export default FormCreate