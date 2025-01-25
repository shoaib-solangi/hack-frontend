"use client"
import {  useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
// import useAuth from '../useAuth/useAuth';
// import { doc, getDoc, getFirestore } from 'firebase/firestore';
// import { app } from '@/firebase/firebaseConfig';
// import { getAuth, signOut } from 'firebase/auth';
// import useUserStore from '@/Zustand/useUserStore';


function Navbar() {
  // const [menuOpen, setMenuOpen] = useState(false);
  // const [dataUser, setDataUser] = useState(null)

  
  // const {clearUser} = useUserStore();
  

  

  
  
  // const db = getFirestore(app)
  // useEffect(() => {
  //   const ready = async ()=>{
  //     if(user){
  //     const docRef = doc(db , "user" , user)
  //     const dataRef = await getDoc(docRef)
  //     console.log(dataRef);
      
  //     if (dataRef.exists()) {
  //       const userRole = dataRef.data().name;
  //       console.log(userRole);
        
  //       setDataUser(userRole);
  //     }
  //   }
  

      
  //   }
  //   ready();
  // }, [user])
  // const auth = getAuth(app)
  // console.log(dataUser);
  // const LogOut = ()=>{
  //   try{
  //   clearUser();
  //   }catch(error){
  //     console.log(error);
      
  //   }

  
  
  


  

  return (
    <h1>hello wolrd</h1>
  
    // <div className="flex justify-center items-center bg-blueGray-800 py-4">
    //   <div className="w-[95%] max-w-6xl">
    //     <div className="flex flex-col md:flex-row justify-between items-center p-4">
          
    //       <div className="mb-4 md:mb-0 flex justify-between items-center w-full md:w-auto">
    //         <h2 className="text-white font-bold text-2xl">Blog</h2>
            
    //         <div className="md:hidden cursor-pointer text-white" onClick={toggleMenu}>
    //           {menuOpen ? <X size={24} /> : <Menu size={24} />}
    //         </div>
    //       </div>




           
      //     <div className={`flex flex-col md:flex-row gap-4 items-center ${menuOpen ? 'block' : 'hidden'} md:flex`}>
      //       <Link href="/">
      //         <Button className="text-white bg-blueGray-900 hover:bg-white hover:text-black px-4 py-2">Homepage</Button>
      //       </Link>
           
      //       <Link href="/About">
      //         <Button className="text-white bg-blueGray-900 hover:bg-white hover:text-black px-4 py-2">About</Button>
      //       </Link>
      //       <Link href="/Contact">
      //         <Button className="text-white bg-blueGray-900 hover:bg-white hover:text-black px-4 py-2">Contact</Button>
      //       </Link>
      //       <Link href="/Blog">
      //         <Button className="text-white bg-blueGray-900 hover:bg-white hover:text-black px-4 py-2">Blog</Button>
      // </Link>
      // </div>
          
  //   </div>
  )
}

export default Navbar;
