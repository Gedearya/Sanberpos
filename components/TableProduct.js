import React from 'react'
import Image from 'next/image'

const TableProduct = ({ data, addDelete, addEdit }) => {
    return (
        <div className=" px-4 sm:px-8">
            <div className="py-8">
                <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                    <div className="inline-block min-w-full overflow-hidden shadow">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Product
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Category
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Stock
                                    </th>
                                    <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        Price
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((e, i) => {
                                        return <tr key={i}>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <div className="flex items-center gap-9">
                                                    <div className='flex flex-col justify-start items-start text-xs gap-2'>
                                                        <button onClick={addEdit} value={e.id} className='px-1 rounded-lg border-primary border-2 w-full'>Edit</button>
                                                        <button onClick={addDelete} value={e.id} className='px-1 rounded-lg border-red-400 border-2 w-full'>Delete</button>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <div className='relative w-32 h-w-32 rounded-md'>
                                                            {/* <Image
                                                                alt='gambar'
                                                                src={'/assets/img/image-auth2.png'}
                                                                fill
                                                                style={{ objectFit: "cover" }}
                                                            /> */}
                                                            <img 
                                                                src={e.image_urls[0]}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {e.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                   {e.category_id ?? 'undefined'}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {e.stock}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    Rp{e.price}
                                                </p>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TableProduct