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
          <div className="space-y-6 ">
            <h3 className="text-5xl font-bold text-green-600">
              <span className="text-6xl block mb-2">Wedding Loans</span>
              
            </h3>
            <p className="text-xl text-gray-600">
              Start your new life together with financial support for your special day.
            </p>
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
                    Education Loans
                  </DialogTitle>
                  <DialogDescription>
                    <div>
                      <p className="font-medium mb-2">Subcategories:</p>
                      <ul className="list-disc pl-5 mb-4">
                        <li>Valima
                        </li>
                        <li>Valima Food</li>
                        <li>Furniture</li>
                        <li>Valima</li>
                      </ul>
                      <p className="mb-2">
                        <strong>Maximum loan:</strong> PKR 5 Lakh
                      </p>
                      <p className="mb-4">
                        <strong>Loan period:</strong> 4 years
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
          <div className="h-[350px] w-full relative ">
  <Image
    src="/weeding.webp"
    layout="fill" // Image will fill the parent div
    objectFit="cover" // Ensures the image covers the container
    alt="Wedding celebration"
    className="rounded-lg"
  />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Categ1;

