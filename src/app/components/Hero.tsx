// "use client"
// import React from 'react'
// import Image from 'next/image'
// import { Button } from '@/components/ui/button'
// import Link from 'next/link'
// function Hero() {
//   return (
//     <>

//       <div className='flex justify-center bg-black'>
        
//     <div className='flex justify-between items-center w-[95%]'>
//        <div >
//         <h1 className='text-white font-bold text-6xl'>Saylani Microfinance</h1>
//             <p className='text-white text-1xl mt-8'>Empowering Dreams, Transforming Lives</p>
//             <div className='flex gap-2 '>
//       <div className='mt-5 '>
//         <Link href="/"><Button 
//          className=' text-white kk hover:text-black hover:bg-white'>Apply for a Loan</Button></Link>
//             </div>
//             <div className='mt-5'>
//         <Link href="/"><Button 
//          className=' text-white kk hover:text-black hover:bg-white'>View Loan Cateogiries</Button></Link>
//               </div>
//               </div>
            
//        </div>
//        <div>  <Image
//       src="/hero.gif"
//       width={500}
//       height={500}
//       alt="Picture of the author"
//     /></div>

      
// </div>
//     </div>



// <div className="flex justify-center py-8 sm:py-12">
//   <div className="flex flex-col md:flex-row justify-between items-center w-[95%] max-w-6xl space-y-8 md:space-y-0">
    
//     {/* Left Content */}
//     <div className="text-center md:text-left">
//       <h1 className="text-white font-bold text-4xl sm:text-3xl md:text-6xl">Creative Thoughts</h1>
//       <p className="text-white text-lg sm:text-base mt-4 md:mt-8 max-w-md mx-auto md:mx-0">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis adipisci minima reiciendis a autem assumenda dolore.
//       </p>
//       <div className="mt-5">
//         <Link href="/">
//           <Button className="text-white hover:text-black hover:bg-white">Learn more</Button>
//         </Link>
//       </div>
//     </div>

//     {/* Right Image */}
//     <div className="mt-6 md:mt-0">
//       <Image
//         src="/hero.gif"
//         width={500}
//         height={500}
//         alt="Picture of the author"
//         className="rounded-lg shadow-lg"
//       />
//     </div>
//   </div>
//       </div>
//       </>

//   )
// }

// export default Hero 
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <div className="bg-green-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="block text-sm font-semibold uppercase tracking-wide text-green-600">
                Saylani Welfare
              </span>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="block text-gray-900">Empowering Lives</span>
                <span className="block text-green-600">Through Microfinance</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Saylani Microfinance program offers interest-free loans to help individuals start businesses, support
              education, and improve their quality of life. Join us in making a difference.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <p className="text-base font-medium text-gray-900">
                Ready to take the first step towards financial independence?
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link href="/apply">Apply for a Loan</Link>
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/loan-categories">Explore Loan Categories</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <Image
                className="w-full rounded-lg"
                src="/placeholder.svg"
                alt="People helped by Saylani Microfinance"
                width={500}
                height={300}
              />
              <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                <svg className="h-20 w-20 text-green-600" fill="currentColor" viewBox="0 0 84 84">
                  <circle opacity="0.9" cx="42" cy="42" r="42" fill="white" />
                  <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;