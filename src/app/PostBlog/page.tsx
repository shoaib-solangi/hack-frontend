"use client"
import React from 'react'
import Header from '../components/Header'
import Form from './components/Form'

function Page() {
    
  return (
    <div className=''>
        <Header />
        <h2 className='text-center font-bold text-white text-2xl'>Post Blog</h2>

        <Form />
      
    </div>
  )
}

export default Page
