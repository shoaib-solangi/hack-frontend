"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

function Categ4() {
  return (
    <div className="bg-green-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="h-[350px] w-full relative">
            <Image
              src="/i.webp"
              layout="fill"
              objectFit="cover"
              alt="Education and learning"
              className="rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-5xl font-bold text-green-600">
              <span className="text-6xl block mb-2">Education Loans</span>
            </h3>
            <p className="text-xl text-gray-600">
              Invest in your future with our flexible education financing
              options.
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
                        <li>University Fees
                        </li>
                        <li>Child Fees Loan</li>
                      </ul>
                      <p className="mb-2">
                        <strong>Maximum loan:</strong> PKR 5 lakh
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
        </div>
      </div>
    </div>
  );
}

export default Categ4;
