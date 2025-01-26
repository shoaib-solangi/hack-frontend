import React from 'react'
import SideNav from './components/SideNav'
import DashboardHeader from './components/DashboardHeader'
import { Toaster } from '@/components/ui/toaster'

function layout({children}: any) {
  return (
    <>
    <div className='fixed md:w-64 hidden md:block '>
    <SideNav  />

    </div>
    <div className='md:ml-64'>
      <DashboardHeader />
      <Toaster />

      {children}
    </div>
    </>
  )
}

export default layout
