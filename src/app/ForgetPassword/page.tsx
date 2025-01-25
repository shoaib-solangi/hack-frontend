"use client";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Page() {
  const [password, setPassword] = useState("");
  const [newPass, setNewPass] = useState("");
  const [email, setEmail] = useState("");

    const router = useRouter();

 
  const { toast } = useToast()

  const RecoverHandle = async ( password: string , newPassword : string , email : string) => {
    console.log("hiss");
    
    try {
        if (password !== newPassword) {
            console.log("enter a confirm password");
            
        
        }
        console.log(password);
        const data = {
            email , 
            password
        }
        



        

        const response = await axios.post("http://localhost:4000/auth/password-reset", data
          )
    
   
        if (response.status === 200) {
        router.push("Login")
            
      toast({
        title: "Password Changed Successfully",
               })
        }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Recover Your Account
            </h3>
         
          </div>
        </div>
        <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded"  >
        <div>
              <label className="font-medium">Enter a Email</label>
              <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}

                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div className="mt-2">
              <label className="font-medium">Enter a new Password</label>
              <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}

                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div className="mt-2">
              <label className="font-medium">Confirm Your Password</label>
              <input
                onChange={(e) => {
                  setNewPass(e.target.value);
                }}
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
          
            
            <button onClick={()=>{
                RecoverHandle(password , newPass , email)
            }} className="w-full mt-4 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Submit
            </button>
          

        </div>
      </div>
      <Toaster />
    </main>
  );
}
