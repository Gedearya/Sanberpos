import Navbar from '@/components/Navbar'
import SearchEngineOptimization from '@/components/SearchEngineOptimization'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
      <SearchEngineOptimization />
      <div className='bg-[#F4F5F6]'>
        <Navbar />
        {children}
      </div>
    </>
  )
}

export default Layout