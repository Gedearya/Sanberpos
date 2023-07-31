import { apiAuth } from '@/utils/apiAuth'
import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios'
import { Fragment, useEffect, useState } from 'react'

export default function ModalCategory({ isOpen, setIsOpen, closeModal, openModal }) {

    const [input, setInput] = useState('')
    const [data, setData] = useState(null)
    const [currId, setcurrId] = useState(-1)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        axios.get('https://sanber-pos-backend.sanbercloud.com/api/categories')
            .then((res) => {
                // console.log(res)
                setData(res.data)
            })
    }
    const addCategory = (e) => {
        e.preventDefault()
        // console.log(currId)
        if (currId === -1) {
            axios.post('https://sanber-pos-backend.sanbercloud.com/api/categories', { name: input }, apiAuth.fetchHeaders())
                .then((res) => {
                    fetchData()
                })
                .catch((err) => console.log(err))
        } else {
            axios.put('https://sanber-pos-backend.sanbercloud.com/api/categories/' + currId, { name: input }, apiAuth.fetchHeaders())
                .then((res) => {
                    fetchData()
                })
                .catch((err) => console.log(err))
        }

        setInput('')
        setcurrId(-1)
    }

    const addEdit = (e) => {
        axios.get('https://sanber-pos-backend.sanbercloud.com/api/categories/' + e.target.value)
            .then((res) => {
                console.log(res.data.id);
                setInput(res.data.name)
                setcurrId(res.data.id)
            })
    }

    const addDelete = (e) => {
        axios.delete('https://sanber-pos-backend.sanbercloud.com/api/categories/' + e.target.value, apiAuth.fetchHeaders())
            .then((res) => {
                fetchData()
            })
    }


    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Add Category
                                    </Dialog.Title>
                                    <form onSubmit={addCategory}>
                                        <div className="mt-7">
                                            <input value={input} type='text' onChange={(e) => setInput(e.target.value)} required className='w-full border-2 border-gray-200 rounded-lg text-xs p-2' placeholder='Category' />
                                        </div>
                                        <div className="mt-2">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-1 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            >
                                                Add Category
                                            </button>
                                            <button
                                                type="button"
                                                className="inline-flex ml-2 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-1 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={closeModal}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                    <div className='mt-2 h-28 overflow-y-auto'>
                                        {
                                            data !== null && data.map((e, index) => {
                                                return <div key={index} className='p-2 border-2 rounded-md text-xs flex justify-between items-center'>
                                                    <p>{e.name}</p>
                                                    <div>
                                                        <button value={e.id} onClick={addEdit} className='px-2 border-2 border-primary rounded-sm mr-2'>Edit</button>
                                                        <button value={e.id} onClick={addDelete} className='px-2 border-2 border-red-400 rounded-sm'>Delete</button>
                                                    </div>
                                                </div>
                                            })
                                        }

                                    </div>


                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
