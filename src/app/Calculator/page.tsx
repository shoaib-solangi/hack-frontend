"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, DollarSign } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Header from "../components/Header";
import Footer from '../components/Footer'



export default function Page() {
  const [category, setCategory] = useState("");
  const [deposit, setDeposit] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [totalLoan, setTotalLoan] = useState<number | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const calculateLoan = () => {
    const depositAmount = Number.parseFloat(deposit);
    const requestedLoan = Number.parseFloat(loanAmount);

    if (isNaN(depositAmount) || isNaN(requestedLoan)) {
      alert("Please enter valid numbers for deposit and loan amount");
      return;
    }

    const maxLoan = 500000; // 5 Lakh PKR
    const actualLoan = Math.min(requestedLoan - depositAmount, maxLoan);

    if (actualLoan <= 0) {
      alert("The deposit amount is greater than or equal to the requested loan amount");
      return;
    }

    const monthlyPayment = actualLoan / 24; // 24 months (2 years)
    setMonthlyPayment(monthlyPayment);
    setTotalLoan(actualLoan);
    setOpenDialog(true); // Open dialog when calculation is done
  };

  const weddingLoanCategories = [
    "Wedding Loans",
    "Home Construction Loans",
    "Business Startup Loans",
    "Education Loans",
  ];

  return (
      <>
          <Header />
      <div className="bg-green-50">
        <div className="container mx-auto px-4">
          <h5 className="text-center font-bold text-3xl my-5">Loan Calculator</h5>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card>
              <CardHeader className="text-white">
                <CardTitle className="text-2xl font-bold flex items-center text-black">
                  <Calculator className="mr-2 text-black" />
                  Calculate Your Loan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div>
                  <label htmlFor="category" className="text-sm font-medium text-gray-700">
                    Loan Category
                  </label>
                  <Select onValueChange={setCategory} value={category}>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-black">
                      {weddingLoanCategories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="deposit" className="text-sm font-medium text-gray-700 flex items-center">
                    <DollarSign className="w-4 h-4 mr-1" />
                    Deposit Amount (PKR)
                  </label>
                  <Input
                    id="deposit"
                    type="number"
                    value={deposit}
                    onChange={(e) => setDeposit(e.target.value)}
                    placeholder="Enter deposit amount"
                    className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="loanAmount" className="text-sm font-medium text-gray-700 flex items-center">
                    <DollarSign className="w-4 h-4 mr-1" />
                    Desired Loan Amount (PKR)
                  </label>
                  <Input
                    id="loanAmount"
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    placeholder="Enter desired loan amount"
                    className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <Button onClick={calculateLoan} className="w-full bg-green-600 hover:bg-green-700 transition-colors">
                  Calculate Loan
                </Button>
              </CardContent>
            </Card>
          
          </div>
          <Dialog  open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger className="bg-white text-black" asChild>
              <Button className="hidden">Show Results</Button>
            </DialogTrigger>
            <DialogContent className="bg-white text-black">
              <DialogHeader>
                <DialogTitle>Loan Calculation Results</DialogTitle>
                <DialogDescription>
                  Here are the results of your loan calculation.
                </DialogDescription>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-sm text-gray-600">Monthly Payment</p>
                  <p className="text-2xl font-bold text-green-600">
                    PKR {monthlyPayment?.toFixed(2)}
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-sm text-gray-600">Total Payment</p>
                  <p className="text-2xl font-bold text-green-600">
                    PKR {totalLoan?.toFixed(2)}
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
          </div>
          <Footer />
    </>
  );
}
