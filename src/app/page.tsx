// "use client";
// import React, { useState } from "react";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import PostSection from "./components/PostSection";
// import Footer from "./components/Footer";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// function Page() {
//   const [categ, setCateg] = useState("");

//   return (
//     <div className="bg-blueGray-900">
//       <Header />
//       <Hero />
//       <div className="flex justify-center">
//         <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-4 max-w-6xl w-[95%] ">
//           <div className="mb-8 w-full max-w-6xl text-center md:text-left">
//             <h3 className="text-white font-bold text-2xl border-b-2 border-white inline-block py-2">
//               Popular Post
//             </h3>
//           </div>
//           <div className="flex items-center justify-center w-full md:w-auto">
//             <span className="text-white mr-2">Search:</span>
//             <Select onValueChange={(value) => setCateg(value)}>
//               <SelectTrigger className="w-full max-w-[180px] text-white md:w-[180px]">
//                 <SelectValue placeholder="Select a category" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectGroup>
//                   <SelectLabel>Category</SelectLabel>
//                   <SelectItem value="All">All</SelectItem>

//                   <SelectItem value="Technology">Technology</SelectItem>
//                   <SelectItem value="Health & Wellness">
//                     Health & Wellness
//                   </SelectItem>
//                   <SelectItem value="Travel">Travel</SelectItem>
//                   <SelectItem value="Lifestyle">Lifestyle</SelectItem>
//                   <SelectItem value="Sports">Sports</SelectItem>
//                 </SelectGroup>
//               </SelectContent>
//             </Select>
//           </div>
//         </div>
//       </div>
//       <PostSection categ={categ} />
//       <Footer />
//     </div>
//   );
// }

// export default Page;


"use client"
import Link from 'next/link'
import React from 'react'


function page() {
  return (
    <div>
      <Link href="/Login">Login</Link>
      
    </div>
  )
}

export default page
