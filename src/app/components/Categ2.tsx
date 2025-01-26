"use client"
import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import Link from "next/link";

function Categ1() {
  return (
    <div className="bg-green-50 py-2">
      <div className="container mx-auto px-2">
              <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="h-[350px] w-full relative ">
  <Image
    src="/ijk.webp"
    layout="fill" // Image will fill the parent div
    objectFit="cover" // Ensures the image covers the container
    alt="Wedding celebration"
    className="rounded-lg"
  />

          </div>
          <div className="space-y-6 ">
            <h3 className="text-5xl font-bold text-green-600">
              <span className="text-6xl block mb-2">Home Construction Loans</span>
              
            </h3>
            <p className="text-xl text-gray-600">
            Build your dream home with our flexible financing options            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-green-50 text-black">
                <DialogHeader>
                  <DialogTitle className="font-bold text-2xl">
                  Home Construction Loans                  </DialogTitle>
                  <DialogDescription>
                    <div>
                      <p className="font-medium mb-2">Subcategories:</p>
                      <ul className="list-disc pl-5 mb-4">
                        <li> Structure, Finishing, Loan
                        </li>
                        <li>Finishing</li>
                        <li>Loan</li>
                      </ul>
                      <p className="mb-2">
                        <strong>Maximum loan:</strong> PKR 10 Lakh
                      </p>
                      <p className="mb-4">
                        <strong>Loan period:</strong> 5 years
                      </p>
                      <Link href="/apply">
                        <Button className=" bg-green-500">Apply Now</Button>
                      </Link>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Categ1;

