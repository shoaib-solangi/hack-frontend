"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
function Hero() {
  return (
//     <div className='flex justify-center'>
//     <div className='flex justify-between items-center w-[95%]'>
//        <div >
//         <h1 className='text-white font-bold text-6xl'>Creative Thoughts</h1>
//         <p className='text-white text-1xl mt-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis adipisci minima reiciendis a autem assumenda dolore.</p>
//       <div className='mt-5'>
//         <Link href="/"><Button 
//          className=' text-white kk hover:text-black hover:bg-white'>Learn more</Button></Link>
//       </div>
//        </div>
//        <div>  <Image
//       src="/hero.gif"
//       width={500}
//       height={500}
//       alt="Picture of the author"
//     /></div>

      
// </div>
//     </div>



<div className="flex justify-center py-8 sm:py-12">
  <div className="flex flex-col md:flex-row justify-between items-center w-[95%] max-w-6xl space-y-8 md:space-y-0">
    
    {/* Left Content */}
    <div className="text-center md:text-left">
      <h1 className="text-white font-bold text-4xl sm:text-3xl md:text-6xl">Creative Thoughts</h1>
      <p className="text-white text-lg sm:text-base mt-4 md:mt-8 max-w-md mx-auto md:mx-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis adipisci minima reiciendis a autem assumenda dolore.
      </p>
      <div className="mt-5">
        <Link href="/">
          <Button className="text-white hover:text-black hover:bg-white">Learn more</Button>
        </Link>
      </div>
    </div>

    {/* Right Image */}
    <div className="mt-6 md:mt-0">
      <Image
        src="/hero.gif"
        width={500}
        height={500}
        alt="Picture of the author"
        className="rounded-lg shadow-lg"
      />
    </div>
  </div>
</div>

  )
}

export default Hero 
