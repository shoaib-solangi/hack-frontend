import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function DashboardHeader() {
  return (
    <div className='p-5 shadow-sm border flex justify-between'>
      <div className=''>hello , Admin</div>
      <div>
        <Link href = {'/Logout'}>
          <Button>
            Logout
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default DashboardHeader
